---
title: "MIT6.824 Lab1 MapReduce"
date: "2022-02-12"
tags:
  - "分布式系统"
canonical: "https://xxxuuu.me/post/mit6824-lab1-mapreduce"
---

Lab 地址：[6.824 Lab 1: MapReduce](http://nil.csail.mit.edu/6.824/2020/labs/lab-mr.html)

论文：[MapReduce: Simplified Data Processing on Large Clusters](http://static.googleusercontent.com/media/research.google.com/zh-CN//archive/mapreduce-osdi04.pdf)

一个中文翻译：[MapReduce：在大型集群上简化数据处理](https://zhuanlan.zhihu.com/p/122571315)



MIT6.824 的第一节课要做的 Lab 就是大名鼎鼎的 Google 分布式系统三驾马车之一的 MapReduce（另外两个是 GFS 和 BigTable），课程需要我们阅读 MapReduce 的论文后实现一个简化版的 MapReduce Framework



## 概览

首先应该先看论文，再 `clone` 项目，看看涉及 Lab1 部分的结构，弄清楚要基于什么去完成实验

从用户的角度来看，应该看我们将要实现的东西能给 Client 提供怎样的抽象。首先 `/mrapps` 中的就是使用 MapReduce 库的 Clients，例如 Getting started 中的 `/mrapps/wc.go` 是进行词频统计的，MapReduce 库需要用户实现 Map 和 Reduce 两个函数：

```go
func Map(filename string, contents string) []mr.KeyValue {}
func Reduce(key string, values []string) string {}
```

它们的语义和论文中的一致，不同的是，这里在 `Map` 中没有论文中的 `Emit` 操作，而是要求用户返回一个 key-value 列表，列表的每一项就相当于一个 `Emit` 的 key-value 对

最后将 Client 通过 `go build -buildmode=plugin xxx.go` 编译为动态链接库，启动一个 MapReduce Job 时和输入文件一起作为参数传入



实验提供了一个简单的顺序单机 MapReduce 实现在 `mrsequential.go` 内，可以看下它的实现，有助于理解执行过程。其首先加载了被编译为动态链接库的用户代码：

```go
func loadPlugin(filename string) (func(string, string) []mr.KeyValue, func(string, []string) string) {
	p, err := plugin.Open(filename)
	if err != nil {
		log.Fatalf("cannot load plugin %v", filename)
	}
	xmapf, err := p.Lookup("Map")
	if err != nil {
		log.Fatalf("cannot find Map in %v", filename)
	}
	mapf := xmapf.(func(string, string) []mr.KeyValue)
	xreducef, err := p.Lookup("Reduce")
	if err != nil {
		log.Fatalf("cannot find Reduce in %v", filename)
	}
	reducef := xreducef.(func(string, []string) string)

	return mapf, reducef
}
```

然后加载输入文件传递给用户代码的 `Map` 执行，将执行的中间结果存储起来

```go
intermediate := []mr.KeyValue{}
for _, filename := range os.Args[2:] {
	file, err := os.Open(filename)
	if err != nil {
		log.Fatalf("cannot open %v", filename)
	}
	content, err := ioutil.ReadAll(file)
	if err != nil {
		log.Fatalf("cannot read %v", filename)
	}
	file.Close()
	kva := mapf(filename, string(content))
	intermediate = append(intermediate, kva...)
}
```

`Map` 执行完后对中间结果排序

```go
sort.Sort(ByKey(intermediate))
```

最后调用 `Reduce` 并写入结果文件

```go
i := 0
for i < len(intermediate) {
	j := i + 1
	for j < len(intermediate) && intermediate[j].Key == intermediate[i].Key {
		j++
	}
	values := []string{}
	for k := i; k < j; k++ {
		values = append(values, intermediate[k].Value)
	}
	output := reducef(intermediate[i].Key, values)

	// this is the correct format for each line of Reduce output.
	fmt.Fprintf(ofile, "%v %v\n", intermediate[i].Key, output)

	i = j
}
```

总体流程基本对应论文的图 1 的各个阶段，只不过是单机顺序实现，没有调度和网络部分

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F7a021825-09e3-46e4-9457-4d2b1d15cc2d%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YL4JXYVU%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140445Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMX%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDICPNKaHEUosapmExajRPuZvTBXXI6CHI7wZAjHGFbhAIhAKVM2poHE1jFgD2MYsIm3PWESDO73mUvhtCNSEIjT32yKogECI3%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwuddU1AfocjK3cIGQq3ANGxagTIvm5PTSB88gCn2mk1axzEn99dRMPEYuQ918pytrteE0p1sk5%252BlIF3Jx5yGIlv%252BrH7Bx4STtSb3DQxt2RpbCmLxeRycc6%252FhAzB6OTZO6Ezm%252FRY0F1e1%252FsCx1ETDUIoTz9wUGQFaHLH6dTa%252Fg2%252BMj1AkVH7FlflxjNwa7tzOanIJ3SH0wZx3APDyWNRjtaK1oG%252Fw9XqHawY3jeZUrpoG%252FjYJaBDdH8ykL%252BxCMD3j9ouVpy4tMPKB5C1Y7otgDBFvj42bHHsv3mfYl0Pzc2o1UgpMTh6OcryRsfdurCN90iL6U39SjR%252BiHXslL4ybfIirr1v4YdneCEjv37BqLVJk%252BJdGL%252F8yuPXoM8VScgK1bxEGHsgl2vCWC7i4zYPS4Xo2YQRmmqgwiTnVLlbxpr2lYGoAz%252FO7FJYX9tyWUjo2B%252FSvqTp5FP9GlfBbtpQAR60BIGiLYJbst8wVeJZFOZr8So6obhzrKNyzalZvJXxxOBkEhBvlnBvHKiJ%252FwCjxDavUAmULQ%252BiHMh4vwHdLbG%252BcWug3BKWJiKpDCUe%252BJc%252FXjA6Y0cfA1V8anvaoJJOnHowtaf0GYlInXGBzw38pQzTYBC1Shd1nIytY9PaeXwsT6rKAGzQcx3raOzqTDhwsTVBjqkAdbHWmKVnXaQ0o78IN6Zhc9O2hNhW%252BCIsecxmkQkcZEBDvuCktrYLncgCOjyVY88s2r%252B0SfFfavYYy4vFoO5sHBxEqT5ddPBQZ9bgBbjj9peJA8nrdiK8NR7okMnSfVjkrIWMc7ia0P0swpuEdL3AXXX%252FUtf4oSS%252BOWUHf4o%252BETFWdKlXmKDh89JHrIHLaQ5wzpR9HKVYfna8AXXpoxezE15q%252Bwm%26X-Amz-Signature%3Dd3ea7d35ea6fb46ff8a55925ea8e445f5e87a000f9dbc295ffcc892f349a0f95%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=2565347d-bb73-4d2c-99c1-d70328ce40a7&cache=v2&width=1400)



然后我们需要实现自己的 MapReduce 库在 `mr/master.go`，`mr/worker.go`，`mr/rpc.go` 三个文件中，里面已经有一些定义好的方法。要实现一些细节和要注意的点包括：

1.  一个 Master，一个或多个 Worker，通过 RPC 通信。在开始一个 MapReduce Job 时，通常先启动 Master，然后启动一个或多个 Worker（通过 `main/mrmaster.go` 和 `main/mrworker.go`）
2.  容错机制，包括 Worker、Master 宕机的处理

    Master 的宕机可以和论文一样，交给客户端重试，不同之处是论文中持久化了 checkpoint 使得 Master 在宕机恢复后可以恢复任务进度，但 Lab 中没有要求我们实现；对于 Worker，如果执行任务超时，则 Master 将认为它宕机或执行缓慢，此时重新分配任务到另一个 Worker

    另一方面，应该确保宕机时不会出现文件部分写入的情况，一个方法是在文件写入后重命名（大部分操作系统的文件系统实现中，重命名是原子操作）

3.  同论文一样，`Map` 的输出（中间结果）也应该写入到文件中，然后划分成多个 bucket，这保证相同 key 都在同一文件中，能在同一 Worker 里被打包到 `Reduce` 执行，这个分区数量可以通过启动 Master 时的参数指定
4.  每个 `Reduce` 的结果输出到单独的文件上
5.  Master 应该实现 `Done` 以明确地告知客户端 MapReduce 是否执行完毕
6.  结束后应该正确地回收每个 Worker 进程



参考论文第 3 节，捋一下我们的流程：

1.  首先启动 Master，然后启动一个或多个 Worker，Worker 启动时向 Master 获取任务
2.  Master 为 Worker 分配任务后，要监视其是否完成或超时，超时后将任务分配给其他 Worker。任务一开始只应该分配 `Map` ，所有 `Map` 执行完成后才分配 `Reduce`
3.  当 Worker 完成一个任务后，继续获取任务
4.  `Map` 中，Master 需要传递给 Worker 输入文件的位置，Worker 执行 `Map` 完后写入中间结果到本地并进行分区，然后返回位置给 Master
5.  Master 需要等待 `Map` 都执行完毕才分配 `Reduce`，为 Worker 分配 `Reduce` 时要传递同一分区的中间结果文件的位置，Worker 读取文件并进行排序以将相同的 key 排到一起，然后将相同的 key 对应的 value 集合传入 `Reduce` 函数中
6.  所有任务执行完后，Master 告知客户端以结束对 MapReduce 的调用



## 数据结构

逻辑都清楚后就可以开始实现了，Master 作为最重要的节点，其存储了大多数必要的数据，如论文 3.2 节所示：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F6f81b6ca-ec49-42b7-b22b-b6671ced1a54%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YL4JXYVU%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140445Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMX%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDICPNKaHEUosapmExajRPuZvTBXXI6CHI7wZAjHGFbhAIhAKVM2poHE1jFgD2MYsIm3PWESDO73mUvhtCNSEIjT32yKogECI3%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwuddU1AfocjK3cIGQq3ANGxagTIvm5PTSB88gCn2mk1axzEn99dRMPEYuQ918pytrteE0p1sk5%252BlIF3Jx5yGIlv%252BrH7Bx4STtSb3DQxt2RpbCmLxeRycc6%252FhAzB6OTZO6Ezm%252FRY0F1e1%252FsCx1ETDUIoTz9wUGQFaHLH6dTa%252Fg2%252BMj1AkVH7FlflxjNwa7tzOanIJ3SH0wZx3APDyWNRjtaK1oG%252Fw9XqHawY3jeZUrpoG%252FjYJaBDdH8ykL%252BxCMD3j9ouVpy4tMPKB5C1Y7otgDBFvj42bHHsv3mfYl0Pzc2o1UgpMTh6OcryRsfdurCN90iL6U39SjR%252BiHXslL4ybfIirr1v4YdneCEjv37BqLVJk%252BJdGL%252F8yuPXoM8VScgK1bxEGHsgl2vCWC7i4zYPS4Xo2YQRmmqgwiTnVLlbxpr2lYGoAz%252FO7FJYX9tyWUjo2B%252FSvqTp5FP9GlfBbtpQAR60BIGiLYJbst8wVeJZFOZr8So6obhzrKNyzalZvJXxxOBkEhBvlnBvHKiJ%252FwCjxDavUAmULQ%252BiHMh4vwHdLbG%252BcWug3BKWJiKpDCUe%252BJc%252FXjA6Y0cfA1V8anvaoJJOnHowtaf0GYlInXGBzw38pQzTYBC1Shd1nIytY9PaeXwsT6rKAGzQcx3raOzqTDhwsTVBjqkAdbHWmKVnXaQ0o78IN6Zhc9O2hNhW%252BCIsecxmkQkcZEBDvuCktrYLncgCOjyVY88s2r%252B0SfFfavYYy4vFoO5sHBxEqT5ddPBQZ9bgBbjj9peJA8nrdiK8NR7okMnSfVjkrIWMc7ia0P0swpuEdL3AXXX%252FUtf4oSS%252BOWUHf4o%252BETFWdKlXmKDh89JHrIHLaQ5wzpR9HKVYfna8AXXpoxezE15q%252Bwm%26X-Amz-Signature%3Dd9facbb1d3f3f9e941d15df8dca4ecc4f2387c8a61ca4efec692604a96e89919%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=21c028d7-9092-41b9-9f1a-2c11f56c5076&cache=v2&width=1400)

大致分为：

1.  `Map` 和 `Reduce` 任务的状态
2.  Worker 节点信息
3.  输入和中间文件的位置

这里我们可以不需要存储 Worker 节点信息，因为这里是 Worker 向 Master 拉任务，而不是 Master 推任务给 Worker，Master 可以不用知道 Worker 的具体情况。只存储任务状态和文件位置即可，Master 的结构大致如下：

```go
// taskState 任务状态
type taskState int

const (
	// IDLE 空闲
	IDLE taskState = iota
	// IN_PROGRESS 运行中
	IN_PROGRESS
	// COMPLETED 完成
	COMPLETED
)

type Master struct {
	// 每个任务的输入文件列表
	files map[TaskType][][]string
	// 任务状态
	tasks map[TaskType]map[int]taskState
	// 空闲任务
	idleTasks map[TaskType]map[int]struct{}
	// 完成的任务数量
	cnt map[TaskType]int
	// reduce分区数
	nReduce int
	// 修改任务状态的互斥锁
	lock sync.Mutex
	// 响应客户端是否完成
	finish chan struct{}
}
```

`TaskType` 要在 RPC 中传输，定义在 `mr/rpc.go` 中，多了一个 `None` 用以表示当前无任务可分配的情况：

```go
type TaskType int

const (
	None TaskType = iota
	Map
	Reduce
)
```

客户端（`main/mrmaster.go`）会调用 `MakeMaster` 初始化 Master 并启动 Master 的 RPC 服务器，初始化时把输入文件列表添加到 `Map` 任务中并标记为空闲：

```go
func MakeMaster(files []string, nReduce int) *Master {
	t1 := map[TaskType]map[int]taskState{
		Map:    {},
		Reduce: {},
	}
	t2 := map[TaskType]map[int]struct{}{
		Map:    {},
		Reduce: {},
	}

	f := map[TaskType][][]string{
		Map:    {},
		Reduce: make([][]string, nReduce),
	}
	for i := range files {
		t1[Map][i] = IDLE
		t2[Map][i] = struct{}{}
		f[Map] = append(f[Map], []string{files[i]})
	}

	m := Master{
		f,
		t1,
		t2,
		make(map[TaskType]int),
		nReduce,
		sync.Mutex{},
		make(chan struct{}),
	}

	m.server()
	return &m
}
```



Master 中应该给 Worker 提供三种 RPC 接口：

-   心跳接口，供 Worker 判断 Master 是否活着
-   获取任务接口，Worker 从这个接口获取新任务以执行
-   通知任务完成接口，Worker 完成任务后通过该接口通知 Master

RPC 这里用的是 Go 内置的 `net/rpc`，一些 RPC 过程中的数据类型定义如下：

```go
type EmptyArgs struct{}

type Task struct {
	ID       int
	NReduce  int
	TaskType TaskType
	Files    []string
}

type FinishNotify struct {
	Err       error
	Task      Task
	Filenames []string
}
```

`net/rpc` 使用的 gob 来序列化，它不支持传递空值，所以定义一个 `EmptyArgs` 空结构体来表示，空结构体不占用实际内存，在 Master 中的空闲任务队列中也使用了这个方法

`Task` 是 Master 返回任务给 Worker 时传递的类型，包括任务 ID，Reduce 分区数，任务类型（Map 或 Reduce）和输入文件列表 `FinishNotify` 是 Worker 完成任务时向 Master 通知传递的类型，包括错误信息，完成的任务内容本身，输出的文件列表



## Master 实现

然后是 Master 的三个 RPC 接口实现：

心跳接口实际上不需要返回任何数据，RPC 调用底层会知道是否调用成功，这就够了

```go
func (m *Master) Ping(args EmptyArgs, reply *EmptyArgs) error {
    return nil
}
```

获取任务接口，因为需要并发修改任务状态，得加锁。然后确定待分配的任务类型，`Map` 全部执行完后才执行 `Reduce`，从空闲队列中取出后，返回即可。最后新建了个 goroutine 来检查任务情况，如果 10 秒内未执行完毕，可以认为 Worker 宕机或执行缓慢，重置任务进度等待下次分配

```go
func (m *Master) PullTask(args EmptyArgs, reply *Task) error {
    m.lock.Lock()
    defer m.lock.Unlock()

    taskType := Map
    // map全部完成才分配reduce
    if len(m.tasks[Map]) == m.cnt[Map] {
        taskType = Reduce
    }

    // 无空闲任务
    if len(m.idleTasks[taskType]) == 0 {
        reply.TaskType = None
        return nil
    }

    // 从空闲区里选一个 分配任务
    var idx int
    for k := range m.idleTasks[taskType] {
        idx = k
        break
    }
    reply.TaskType = taskType
    reply.Files = m.files[taskType][idx]
    reply.ID = idx
    reply.NReduce = m.nReduce

    delete(m.idleTasks[taskType], idx)
    m.tasks[taskType][idx] = IN_PROGRESS

    // 分配后检查任务状态
    go func() {
        time.Sleep(time.Second * 10)
        m.lock.Lock()
        if m.tasks[taskType][idx] == IN_PROGRESS {
            m.tasks[taskType][idx] = IDLE
            m.idleTasks[taskType][idx] = struct{}{}
        }
        m.lock.Unlock()
    }()

    return nil
}
```

最后一个通知任务完成接口，如果成功完成，就进行记录，同时如果完成的任务是 `Map` 的话，要将其输出的中间结果作为 `Reduce` 任务添加进任务队列里。最后检查是否所有任务都已完成

```go
func (m *Master) FinishTask(data FinishNotify, reply *EmptyArgs) error {
    m.lock.Lock()
    defer m.lock.Unlock()
    id := data.Task.ID

    // 已经完成 忽略
    if data.Task.TaskType == None || m.tasks[data.Task.TaskType][id] == COMPLETED {
        return nil
    }

    // 发生错误 重置任务状态 等待下次调度
    if data.Err != nil {
        log.Printf("%v\n", data.Err)
        m.tasks[data.Task.TaskType][id] = IDLE
        m.idleTasks[data.Task.TaskType][id] = struct{}{}
        return nil
    }

    // 记录完成
    m.tasks[data.Task.TaskType][id] = COMPLETED
    m.cnt[data.Task.TaskType]++

    // Map 结果加到待执行 Reduce 里，按分区划分
    if data.Task.TaskType == Map {
        for i := range data.Filenames {
            m.files[Reduce][i] = append(m.files[Reduce][i], data.Filenames[i])
            m.tasks[Reduce][i] = IDLE
            m.idleTasks[Reduce][i] = struct{}{}
        }
    }

    // 全部完成 Done() 可以返回了
    if len(m.tasks[Map]) == m.cnt[Map] &&
        len(m.tasks[Reduce]) == m.cnt[Reduce] {
        log.Println("MapReduce 结束")
        m.finish <- struct{}{}
    }

    return nil
}
```

最后完成这里有个 `finish` ，它的作用是通知 `Done` 可以返回给客户端任务已完成

```go
func (m *Master) Done() bool {
    <-m.finish
    return true
}
```



## Worker 实现

Master 的实现基本完成，接下来是 Worker，Worker 信息的定义如下，存储 `Map` 函数，`Reduce` 函数，是否可以退出和接收的任务队列：

```go
type WorkerInfo struct {
	mapf    func(string, string) []KeyValue
	reducef func(string, []string) string
	exit    chan struct{}
	tasks   chan Task
}
```

客户端（`main/mrworker.go`）会调用 `Worker()` 来启动 Worker，在其中进行我们的初始化

-   首先新建一个 goroutine 在后台对 Master 进行心跳检测，设定中当 Master 10s 内未响应时，Worker 可以认为 Master 已经关闭，自身便可以关闭。Worker 退出的另一个设计思路是可以添加一个 `TaskType` 表示「请关闭」，Worker 接收到该任务后就可以自行关闭
-   然后是一个循环，不断从 Master 处获取任务并执行，当收到退出信号时就退出

```go
func Worker(mapf func(string, string) []KeyValue,
	reducef func(string, []string) string) {

	w := WorkerInfo{
		mapf,
		reducef,
		make(chan struct{}),
		make(chan Task, 1),
	}

	// Master 10秒没响应就认为它已经关闭， Worker可以退出
	go func() {
		before := time.Now().UnixNano()
		TIMEOUT := time.Second.Nanoseconds() * 10
		for {
			if w.healthCheck() {
				before = time.Now().UnixNano()
			} else if time.Now().UnixNano()-before >= TIMEOUT {
				log.Println("Master 无响应，可以退出")
				w.exit <- struct{}{}
				return
			}
			time.Sleep(time.Second)
		}
	}()

	// 超时退出或等待分配新任务
	for {
		select {
		case <-w.exit:
			close(w.tasks)
			close(w.exit)
			return
		case t := <-w.tasks:
			w.execTask(t)
		default:
			if ok, t := w.pullTask(); !ok {
				time.Sleep(time.Second)
			} else {
				w.tasks <- t
			}
		}
	}
}
```

其中 `healthCheck` 和 `pullTask` 实现如下，`call` 是 Lab 本身已经实现好的对 RPC 调用的封装：

```go
// 健康检查
func (w *WorkerInfo) healthCheck() bool {
	return call("Master.Ping", EmptyArgs{}, &EmptyArgs{})
}

// 从Master处获取任务
func (w *WorkerInfo) pullTask() (bool, Task) {
	t := Task{}
	ok := call("Master.PullTask", EmptyArgs{}, &t)
	if !ok || t.TaskType == None {
		return false, Task{}
	}
	return true, t
}
```

当接收到任务时，就调用 `execTask` 来执行任务，它根据任务类型调用 `execMap` 或 `execReduce` 来执行，最后处理执行结果，通知回 Master

```go
func (w *WorkerInfo) execTask(t Task) {
	var notifyData FinishNotify
	notifyData.Task = t
	defer func() {
		err := recover()
		if err != nil {
			notifyData.Err = fmt.Errorf("%v", err)
		}

		// 向 Master 报告执行完毕
		call("Master.FinishTask", notifyData, &EmptyArgs{})
	}()

	log.Printf("执行任务 %v\n", t)

	var fun func(task Task) ([]string, error)
	if t.TaskType == Map {
		fun = w.execMap
	} else if t.TaskType == Reduce {
		fun = w.execReduce
	} else {
		return
	}

	if outfile, err := fun(t); err != nil {
		notifyData.Err = err
	} else {
		notifyData.Filenames = outfile
	}
}
```

`execMap` 内首先循环读入每个文件，将它们的内容传递给用户的 `Map` 函数执行，结果追加到 key-value 列表中，然后创建指定分区数量（`NReduce`）的临时文件，通过 `ihash` 来确定每个 key 映射到哪个分区中，序列化数据写入到该分区的临时文件上。最后通过原子重命名来保证不会出现文件的部分写入

```go
func (w *WorkerInfo) execMap(t Task) ([]string, error) {
	kva := []KeyValue{}
	for i := range t.Files {
		file, _ := os.Open(t.Files[i])
		defer file.Close()
		content, _ := ioutil.ReadAll(file)

		tmpKva := w.mapf(t.Files[i], string(content))
		kva = append(kva, tmpKva...)
	}

	// 根据 key 分别写入不同文件
	tmpfiles := make([]*os.File, t.NReduce)

	for i := range tmpfiles {
		tmpfiles[i], _ = ioutil.TempFile("", "*.tmp")
		defer tmpfiles[i].Close()
	}
	tmpData := make([][]KeyValue, t.NReduce)
	for i := range kva {
		idx := ihash(kva[i].Key) % t.NReduce
		tmpData[idx] = append(tmpData[idx], kva[i])
	}
	for i := range tmpData {
		buf := &bytes.Buffer{}
		enc := gob.NewEncoder(buf)
		if err := enc.Encode(&tmpData[i]); err != nil {
			os.Remove(tmpfiles[i].Name())
			return []string{}, errors.New("cannot serialize")
		}
		tmpfiles[i].Write(buf.Bytes())
	}

	// 通过写入到临时文件 再重命名来保证原子性
	// 格式 mr-X-Y X是Map任务号 Y是Reduce任务号 即ihash(X)
	res := make([]string, 0, t.NReduce)
	for i := range tmpfiles {
		name := fmt.Sprintf("./mr-%d-%d", t.ID, i)
		os.Rename(tmpfiles[i].Name(), name)
		res = append(res, name)
	}
	return res, nil
}

func ihash(key string) int {
	h := fnv.New32a()
	h.Write([]byte(key))
	return int(h.Sum32() & 0x7fffffff)
}
```

`execReduce` 类似，读入文件，反序列化加载到 key-value 列表中，然后排序以让相同 key 排在一起，文件大到不足以放入内存时应该采用外部排序，不过 Lab 中可以假定不存在这种情况。然后对于相同的 key，将其 value 的集合打包调用用户的 `Reduce` 函数。结果也是一样写入临时文件再原子重命名

```go
func (w *WorkerInfo) execReduce(t Task) ([]string, error) {
	kva := []KeyValue{}
	for i := range t.Files {
		file, _ := os.Open(t.Files[i])
		defer file.Close()
		content, _ := ioutil.ReadAll(file)

		dec := gob.NewDecoder(bytes.NewBuffer(content))
		var tmpKva []KeyValue
		dec.Decode(&tmpKva)
		kva = append(kva, tmpKva...)
	}

	// 排序key 打包调用reduce
	sort.Slice(kva, func(i, j int) bool {
		return kva[i].Key < kva[j].Key
	})

	ofile, _ := ioutil.TempFile("", "*.tmp")
	defer ofile.Close()
	for i := 0; i < len(kva); {
		j := i + 1
		for j < len(kva) && kva[j].Key == kva[i].Key {
			j++
		}
		values := []string{}
		for k := i; k < j; k++ {
			values = append(values, kva[k].Value)
		}
		output := w.reducef(kva[i].Key, values)

		fmt.Fprintf(ofile, "%v %v\n", kva[i].Key, output)

		i = j
	}
	oname := fmt.Sprintf("mr-out-%d", t.ID)
	os.Rename(ofile.Name(), oname)
	return []string{oname}, nil
}
```



## 测试

Worker 也搞定，最后调用 `main/test-mr.sh` 进行测试，其会运行五个测试

1.  wc-test：词频统计应用测试
2.  indexer-test：索引构建应用测试
3.  map-parallelism-test： `Map` 并行测试
4.  reduce-parallelism-test： `Reduce` 并行测试
5.  crash-test： 宕机测试

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fb91d7944-eb3d-4261-873c-eae0b7276027%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YL4JXYVU%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140445Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMX%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDICPNKaHEUosapmExajRPuZvTBXXI6CHI7wZAjHGFbhAIhAKVM2poHE1jFgD2MYsIm3PWESDO73mUvhtCNSEIjT32yKogECI3%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwuddU1AfocjK3cIGQq3ANGxagTIvm5PTSB88gCn2mk1axzEn99dRMPEYuQ918pytrteE0p1sk5%252BlIF3Jx5yGIlv%252BrH7Bx4STtSb3DQxt2RpbCmLxeRycc6%252FhAzB6OTZO6Ezm%252FRY0F1e1%252FsCx1ETDUIoTz9wUGQFaHLH6dTa%252Fg2%252BMj1AkVH7FlflxjNwa7tzOanIJ3SH0wZx3APDyWNRjtaK1oG%252Fw9XqHawY3jeZUrpoG%252FjYJaBDdH8ykL%252BxCMD3j9ouVpy4tMPKB5C1Y7otgDBFvj42bHHsv3mfYl0Pzc2o1UgpMTh6OcryRsfdurCN90iL6U39SjR%252BiHXslL4ybfIirr1v4YdneCEjv37BqLVJk%252BJdGL%252F8yuPXoM8VScgK1bxEGHsgl2vCWC7i4zYPS4Xo2YQRmmqgwiTnVLlbxpr2lYGoAz%252FO7FJYX9tyWUjo2B%252FSvqTp5FP9GlfBbtpQAR60BIGiLYJbst8wVeJZFOZr8So6obhzrKNyzalZvJXxxOBkEhBvlnBvHKiJ%252FwCjxDavUAmULQ%252BiHMh4vwHdLbG%252BcWug3BKWJiKpDCUe%252BJc%252FXjA6Y0cfA1V8anvaoJJOnHowtaf0GYlInXGBzw38pQzTYBC1Shd1nIytY9PaeXwsT6rKAGzQcx3raOzqTDhwsTVBjqkAdbHWmKVnXaQ0o78IN6Zhc9O2hNhW%252BCIsecxmkQkcZEBDvuCktrYLncgCOjyVY88s2r%252B0SfFfavYYy4vFoO5sHBxEqT5ddPBQZ9bgBbjj9peJA8nrdiK8NR7okMnSfVjkrIWMc7ia0P0swpuEdL3AXXX%252FUtf4oSS%252BOWUHf4o%252BETFWdKlXmKDh89JHrIHLaQ5wzpR9HKVYfna8AXXpoxezE15q%252Bwm%26X-Amz-Signature%3Dbd8d4c658c41da1c5c69a955c4ff9f19d5d7b1d666c3177cb01de3d35fb2586b%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=dd4af0b6-1713-4f84-b825-682c57676392&cache=v2&width=1400)

bingo
