---
title: "使用 FizzBee 进行形式化验证"
description: "前段时间形式化验证的话题在推上似乎有些热度。虽然之前也看过几篇 TLA+ 的入门文章，不过 TLA+ 的语法和思考方式还是太数学了，既难写又难看懂。即使有 PlusCal 这样可以编译成 TLA+ 的「高级」语言，依然很反人类。直到最近…"
date: "2026-10-01"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F0ab30027-250f-4346-9582-54c005670012%2FCD5B42CD-6942-46AC-9A2A-5C3472297273.jpeg?table=block&id=3ea88756-3979-804a-92d8-c185eefdafb9"
tags:
  - "分布式系统"
  - "形式化验证"
canonical: "https://xxxuuu.me/post/fizzbee-for-formal-verification"
---

前段时间形式化验证的话题在推上似乎有些热度。虽然之前也看过几篇 TLA+ 的入门文章，不过 TLA+ 的语法和思考方式还是太数学了，既难写又难看懂。即使有 PlusCal 这样可以编译成 TLA+ 的「高级」语言，依然很反人类

直到最近在研究 [SlateDB — An embedded database built on object storage](https://slatedb.io/) 的实现时，发现 SlateDB 使用了 [FizzBee – Design Reliable, Scalable Distributed Systems](https://fizzbee.io/) 来做建模和形式化验证。相比 TLA+/PlusCal，FizzBee 的 Python-like 语法就友好多了，还支持可视化、故障注入和代码生成，是面向工程师的设计



## Tower of Hanoi

先以汉诺塔问题为例

FizzBee 通过 `role` 定义系统中的参与者，每个 role 都可以拥有自己的状态和 action，类似 class 或 struct。首先定义一个表示杆的 role，变量 `disks` 表示这根杆子上的圆盘，形式是 `[3,2,1]`，左侧为栈底，数字表示圆盘大小。每根杆只有一个 `action` 将圆盘移动到其他杆上，约束移动必须是合法的：

```python
role Rod:
    action Init:
        self.disks = []

    atomic action Move:
        require len(self.disks) > 0
        other_rod = oneof RODS \
            if other_rod != self and \
                (len(other_rod.disks) == 0 or other_rod.disks[-1] > self.disks[-1])
        other_rod.disks.append(self.disks.pop())
```

这里有几个和 Python 不同的 keyword：

-   action 使用 `atomic` 修饰，因为 FizzBee 会并发执行 action，还有隐式故障注入。在这个问题中不需要，声明 action 是原子的
-   `oneof` 用于取 list 内的任意值，后面跟着限制条件，模型检查器将在这里 fork 出执行分支遍历所有可能
-   模型检查器会自动执行 action，`require` 用于限制 action 执行的条件

添加一个全局的初始化 action，`Init` 是约定的名称：

```python
NUM_RODS = 3

action Init:
    RODS = []
    for _ in range(NUM_RODS):
        RODS.append(Rod())
    RODS[0].disks = [3,2,1]
```

形式化验证通过探索状态空间来寻找违反约束的反例，这里我们需要寻找的是一个解，所以最后要反过来将停止条件作为安全性（safety）不变量，使用 `always assertion` 声明安全性约束：

```python
always assertion NotSolved:
    return RODS[-1].disks != [3,2,1]
```



运行 `fizz hanoi.fizz` 后模型检查器开始计算，自动触发 action。很快就报错 `FAILED: Model checker failed. Invariant: NotSolved`，说明找到了一个解

打开生成的 `graph.svg` 可以看到整个搜索空间，中间底部的红色状态就是违反安全性约束的状态，即解



![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc92f6bc3-a3c3-4c0c-abd4-834767ae200e%2Fimage.png?table=block&id=3eb88756-3979-801a-9527-dcfe58c01add&cache=v2&width=1400)

`error-graph.svg` 可以显示只到该状态的路径

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F67542f21-37f3-4c80-b443-1a1ba17469bf%2Fimage.png?table=block&id=3eb88756-3979-80b0-a1d6-e27ef6a6da82&cache=v2&width=288)

单独的 explorer 里可以看到最终的状态和时序图，并进行逐步模拟

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc01a2f01-999e-4255-a611-130576dd19d6%2Fimage.png?table=block&id=3eb88756-3979-80bd-9133-d2ed5bd37017&cache=v2&width=384)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F8ec66d8b-daf8-46ef-ad0a-4a7f73055690%2Fimage.png?table=block&id=3eb88756-3979-80bc-a0d8-edea7d0206cc&cache=v2&width=1400)



### 对称约化

模型状态空间的大小通常随问题规模指数级膨胀，导致模型检查器运行耗时过久。一个方法是对称约化（Symmetry Reduction），在汉诺塔问题里，一开始定义的解是将圆盘移动到第三个柱子，但很显然我们并不关心其他柱子的排列，圆盘最终移动到第二个柱子和第三个柱子都是等价的

使用 `symmetric` 声明一个 role 是对称的，可以和其他实例等价互换

```diff
- role Rod:
+ symmetric role Rod:
```

修改初始化部分，`RODS` 从 `list` 替换成 `bag`，`bag` 是 multiset，能够忽略元素顺序。并显式定义 `source`，因为检查结果时需要判断圆盘不能在起始柱子上:

```diff
action Init:
-    RODS = []
-    for _ in range(NUM_RODS):
-        RODS.append(Rod())
-    RODS[0].disks = [3,2,1]
+    RODS = bag()
+    source = Rod()
+    source.disks = [3, 2, 1]
+    RODS.add(source)
+    for _ in range(NUM_RODS-1):
+        RODS.add(Rod())
```

最后修改安全性约束，圆盘可以位于起始柱子之外的任意柱子

```diff
always assertion NotSolved:
-    return RODS[-1].disks != [3,2,1]
+    return all([rod == source or rod.disks != [3, 2, 1] for rod in RODS])
```



最后运行再看搜索的状态空间，相比一开始小了不少

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F3c620bbb-dbde-438a-acd8-39b4743c6a77%2Fimage.png?table=block&id=3eb88756-3979-8026-8e42-fae50285b1f8&cache=v2&width=1400)

一个典型例子是，在初始状态中，从第 1 个柱子移动圆盘到第 2 个或第 3 个柱子到达的状态被视为等价的，压缩成同一个状态了

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F153118b6-6205-4764-8529-e2f261c50ddc%2Fimage.png?table=block&id=3eb88756-3979-802f-b1ee-d37613c67866&cache=v2&width=432)



## Distributed Lock Protocol

进一步考虑更接近现实系统的问题，假设存在一个分布式锁协议：

1.  存在多个对等节点（Host）
2.  Host 保存两个本地状态：
    1.  `holds`：表示自己是否认为持有锁，
    2.  `epoch`：用于 fencing
3.  Host 可以通过 Grant 将锁转移给另一个 Host
    -   发送方在消息中携带一个大于本地 `epoch` 的新 `epoch`
    -   接收方判断如果 Grant 中的 `epoch` 大于本地 `epoch`，则接受该锁并更新本地 `epoch`，否则忽略
    -   发送方将本地 `holds` 置为 false
4.  初始状态为 Host 0 有 `holds=true`, `epoch=1`。其他 Host 均为 `holds=false`, `epoch=0`

环境中通信是不可靠的，乱序、延迟、丢失、重复都会出现。证明最多只有一个 Host 认为自己持有锁（`holds=true`）

PS：该协议来自于[密歇根大学的 Specification and Verification of Distributed Protocols 课程](https://glados-michigan.github.io/verification-class/fall2024/)



首先对不可靠的通信进行建模，可以通过这样的方式来模拟：

```python
action Send:
    target = oneof HOSTS if target != self
    MSG[self][target].append(self.epoch+1)
    epoch = oneof MSGS[self][target]
    target.receive_grant(epoch)
```

`MSGS` 用于存储所有发送过的消息集合，在发送时通过 `oneof` 随机选择一个消息发送，模拟乱序和重复。关于丢失，之前提到 FizzBee 是存在隐式故障注入的，非 `atmoic` 的 action 会自动进行故障注入，action 的每一行间都可能 crash。延迟则等价于消息丢失后重发



剩下的部分就简单了，role 完整定义如下：

```python
symmetric role Host:
    action Init:
        self.holds = False
        self.epoch = 0

    atomic action Grant:
        require self.holds == True
        self.holds = False
        target = oneof HOSTS if target != self
        MSGS[self][target].add(self.epoch+1)

    action Send:
        require len(MSGS[self]) > 0
        target = oneof HOSTS if target != self
        epoch = oneof MSGS[self][target]
        target.receive_grant(epoch)

    atomic func receive_grant(new_epoch):
        if new_epoch > self.epoch:
            self.holds = True
            self.epoch = new_epoch
```

这里将 Grant 和 Send 拆开，Send 表示消息投递过程，因为需要故障注入所以必须是非 `atmoic` 的。其他流程可以视为节点本地的状态转换，不产生中间状态，使用 `atomic` 修饰，这也能优化模型检查器执行性能



将「最多只有一个 Host 认为自己持有锁」作为安全性约束：

```python
always assertion MutualExclusion:
    return len([
        host
        for host in HOSTS
        if host.holds
    ]) <= 1
```

不难发现这里还有另一个性质，锁持有者必然拥有最大的 `epoch`。也加入约束里

```python
always assertion HolderHasMaxEpoch:
    for holder in HOSTS:
        if holder.holds:
            for host in HOSTS:
                if host.epoch > holder.epoch:
                    return False
    return True
```



通常会在文件头添加 `options.max_actions` 来对 action 在一条分支上的执行次数做出限制，因为这个场景中模型显然是可以无限执行的。`deadlock_detection` 则用于关闭死锁检测，模型无法进行状态转移后，会被认为已经死锁

```yaml
deadlock_detection: false
options:
  max_actions: 20
```

注意 `max_actions` 太低也可能导致无法覆盖某些重要路径从而验证失真。实际上该问题原本是要做任意数量 Host 下的归纳证明，但 FizzBee 只能对有限状态空间下做模型验证，还无法进行参数化定理证明



运行检查器最后能看到结果通过：

```plain
...
Valid Nodes: 50695 Unique states: 27652
IsLive: true
Time taken to check liveness: 2.670567709s
PASSED: Model checker completed successfully
```

留意到这里有活性（liveness）检测，但这个协议显然无法保证活性，只要在 Grant 时消息丢失，就不会有任何 Host 能获得锁了。通过 `always eventually` 补上活性约束，这表示最终总是会存在某个节点持有锁

```python
always eventually assertion HolderExists:
    return any([
        host.holds
        for host in HOSTS
    ])
```

再次运行，检查器很快就报错了，符合预期。case 是 Host 0 向 Host 1 进行 Grant 后消息丢失

```plain
FAILED: Liveness check failed
Invariant: HolderExists
------
Init
--
state: {"HOSTS":["role Host#0","role Host#1","role Host#2"],"initial_holder":"role Host#0"}
Host#0: fields(epoch = 1, holds = True, msgs = {1: {}, 2: {}})
Host#1: fields(epoch = 0, holds = False, msgs = {0: {}, 2: {}})
Host#2: fields(epoch = 0, holds = False, msgs = {0: {}, 1: {}})
------
Host#0.Grant
--
state: {"HOSTS":["role Host#0","role Host#1","role Host#2"],"initial_holder":"role Host#0"}
Host#0: fields(epoch = 1, holds = False, msgs = {1: {}, 2: {}})
Host#1: fields(epoch = 0, holds = False, msgs = {0: {}, 2: {}})
Host#2: fields(epoch = 0, holds = False, msgs = {0: {}, 1: {}})
------
Any:target=role Host#1 (params(ID = 1),fields(epoch = 0, holds = False, msgs = {0: {}, 2: {}}))
--
state: {"HOSTS":["role Host#0","role Host#1","role Host#2"],"initial_holder":"role Host#0"}
Host#0: fields(epoch = 1, holds = False, msgs = {1: {2}, 2: {}})
Host#1: fields(epoch = 0, holds = False, msgs = {0: {}, 2: {}})
Host#2: fields(epoch = 0, holds = False, msgs = {0: {}, 1: {}})
------
stutter
--
state: {"HOSTS":["role Host#0","role Host#1","role Host#2"],"initial_holder":"role Host#0"}
Host#0: fields(epoch = 1, holds = False, msgs = {1: {2}, 2: {}})
Host#1: fields(epoch = 0, holds = False, msgs = {0: {}, 2: {}})
Host#2: fields(epoch = 0, holds = False, msgs = {0: {}, 1: {}})
------
```



### 再次对称约化

前面的建模方式虽然模拟了协议过程，但最大的问题是 `self.epoch+1` 导致模型的状态空间无限，不得不通过 `max_actions` 限制模型检查器的步数。这非常不优雅，因为你无法证明错误位置不在第 `max_actions+1` 次执行上

好在我们可以再次利用对称约化，将无限的状态空间转成有限的。注意到 `epoch` 的作用只是用于比较，只关心相对大小关系而不关心绝对值，即存在序数对称性（Ordinal symmetry），利用这一点进行约化

将尚未添加活性约束的版本改造成：

```diff
...

+ EPOCHS = symmetry.ordinal(name="epoch", limit=2*NUM_HOSTS+1)

...

symmetric role Host:
    action Init:
        self.holds = False
-        self.epoch = 0
+        self.epoch = EPOCHS.min()

    atomic action Grant:
        require self.holds == True
        self.holds = False
        target = oneof HOSTS if target != self
-        MSGS[self][target].add(self.epoch+1)
+        MSGS[self][target].add(EPOCHS.fresh())

...

action Init:
...
-    initial_holder.epoch = 1
+    initial_holder.epoch = EPOCHS.fresh()
...   
```

使用 `symmetry.ordinal` 定义一个拥有序数对称性的值域。`limit` 表示其中共存的值数量，因此需要覆盖 Host 本地保存的 `epoch`，以及仍然存在于消息中的 `epoch`

`fresh()` 用于返回一个新的最大值，这里看起来和 `epoch+1` 有一丝语义不一致，`epoch+1` 得到的结果只是比本地值更大，而 `fresh()` 则是全局最大，这在系统里暗示能精确知道其他所有节点的值，这在分布式系统里是不可能的。但别忘了前面提到锁持有者必然有最大的 `epoch`，所以两者还是等价的



删除 `max_actions` 的步数限制后运行：

```diff
...
Valid Nodes: 4077 Unique states: 2224
IsLive: true
Time taken to check liveness: 375.883417ms
PASSED: Model checker completed successfully
```

状态数从 `max_actions: 20` 时的 27652 下降到 892。成功将其转化成了一个有限状态空间的问题，能够真正穷举所有可能性实现证明了



## 最后

FizzBee 是个有趣的项目，文档还有不少其他协议的建模例子，包括 [2PC](https://fizzbee.io/design/examples/two_phase_commit_actors/) 和 [Raft](https://fizzbee.io/design/examples/raft-algorithm-reasoning-spec/) 等。不过看这个项目最近关注度和活跃度都不是很高，希望之后还能继续维护
