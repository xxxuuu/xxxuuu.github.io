---
title: "浅谈协程"
description: "最近经常被各种人问到一些关于协程的事情，例如 xx 语言的 xx 是不是协程，xx 语言和 xx 语言的协程有什么区别，我不得不一次次 share 出我的文章，索性直接发到 blog 上吧"
date: "2024-11-22"
tags:
  - "操作系统"
canonical: "https://xxxuuu.me/post/coroutine"
---

最近经常被各种人问到一些关于协程的事情，例如 xx 语言的 xx 是不是协程，xx 语言和 xx 语言的协程有什么区别，我不得不一次次 share 出我的文章，索性直接发到 blog 上吧



首先，协程是什么？一开始应该抛开一切具体语言的实现去理解协程，给出一个明确定义，但协程的定义实在太多，并且扩展出了各种不同形态，这里我们简单定义**协程就是一个「可以暂停和恢复的函数」**



## 达夫设备

了解了协程的定义，就是实现问题了

来看一个 fib 协程

```c++
generator<int> fib() {
    int a = 1, b = 1;
    yield a;
    yield b;
    while(true) {
        int c = a + b;
        yield c;
        a = b;
        b = c;
    }
}
```

对 fib 进行调用，会返回斐波那契数列 1，1，2，3，5，8…

在 `yield` 时，协程被暂停，再次调用，协程被恢复



现在我们要实现类似的效果，核心无非两点，如何暂停和如何恢复

一种简单的协程实现是达夫设备，它是一个状态机，状态机上的状态对应每个 yield 的位置

首先通过 static 变量存储状态（也可以通过一个外部的协程结构体来在任意地方存储），接着，yield 时直接 return 返回控制权，调用时通过 switch + goto 跳转回之前的位置，也就是上次 yield 后的位置，这就恢复了状态：

```c++
int fib() {
    static int state = 0;
    static int a = 1;
    static int b = 1;
    static int c = 0;

    switch (state) {
        case 0:
            state = 1;
            goto s0;
        case 1:
            state = 2;
            goto s1;
        case 2:
            state = 3;
            goto s2;
        case 3:
            goto s3;
    }

s0:
    return a;
s1:
    return b;
s2:
    while(true) {
        c = a + b;
        return c;
        s3:
        a = b;
        b = c;
    }
}
```



## 扩展

有了基本的协程后，就可以谈谈其它语言中的 generator、async / await、goroutine / virtual thread 等实现了



对于 generator 和 async / await 模式，实际上和我们上面的实现是类似的，都是一个状态机。但它们通过编译器来生成了这堆繁琐的部分，作为语言的一个语法来提供，可以说是真正能用的协程。例如这样一段 Rust 的 generator 代码

```rust
#![feature(generators, generator_trait)]
use std::ops::Generator;

use std::pin::Pin;

fn main() {
    let mut gen = ||{
        yield 1;
        yield 2;
        yield 3;
        return 4;
    };

    let mut pin = Pin::new(&mut gen);
    for _ in 0..4 {
        println!("{:?}", pin.as_mut().resume(()));
        // Yielded(1)
        // Yielded(2)
        // Yielded(3)
        // Complete(4)
    }
}
```

编译器会生成类似这样的实现，和我们前面的达夫设备基本基本没区别：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F3a9e11cf-1dd2-4987-b330-8e9d67ea3555%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4664NHFJLGT%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075601Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQCg9WxnALZfhkU66k8wAcuGs2fen8CzfEWbvDwSxvoIpwIhAKi7EBHOhIfdE%252F53icclAxcug6kyhkic%252Bnb0nOYCIyVDKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1Igyel6Bwe8HXNTNvtL0q3AN8KXvR9WQGcL%252F2hh7%252FROMz95hXdFKeZ137nzeYo2M6J3vJRlBzu5aWpHa3t%252FxtWr0oRN%252FOxkRNLynRGSTN9q769JhqB2sZm0FfsWxs6y8IxLOqkBkmzfReYyq9zMG%252FhvpYJQxa5UAzfU4%252FYJYQ6CF7P5Y3B1poddFPNRWrswhART3EXgJFYilQu0OyWsBvYOq41eAKB3qWVATo5Wc1ILFlVGKJezxn4Rc8lz3puv%252FEzH7cAyGCMSK8d%252FInL1mOUBEFZlQxw93CEd41Q4T6Jx8oY2KrFI9dzhisNS9mbvTLRAS7FNZZbYAtm8X6LIpYSBx73hHdW5HCQ8xjyTNSG5VqglB2cfcif3nweSHRpMsD0SubXjQPbytqY2lK3Qv7kacPhDTG20GDWLdwv%252FycuCFiE9%252BtI1B7mPj6mRXp0USCKnEZu9BmLCkRabFN0q4cpWCmD1HVo30LihY%252Bikt27vAkV5lARCsP4HF%252FESo3544iFBswIfjKRS3mypbnQhsGCq8yTnSQXIQsaq6DnsTIsby%252BsQ9arBpFrc9oIDZuXgDwjYDCm8BHU6zdmBFO6iDQDD2agUNqBhGnFb0ePbr43QgXZQwpmY6sofSd%252BrK89LI9QKzpmDkzEOf8CbykEjDRrYnVBjqkAadv3YjI%252BDVH1jFx9BvjcASw8LElLyt5GpsEASKjDejXB4D7XfD7skUqgTjNitWfiQqq%252Fo3A911Ub6419Bz6JG7%252FlUNn%252FVv8Ls2pGq8MX9IsAzYtk3FFOWmSOkVDyXTFt37y2NYIedXkTEO7%252F6j%252F31d%252BB2E%252BH9id37l1WRnPZI1tKU11pUDTmtUQ6iqAxKC%252Fcn4FIx4MtiD5scw%252Fe06CMcdHIIV2%26X-Amz-Signature%3D53aa2d0382510d2481839b07523529e4359db923b2dd46df603d22acc80f61f7%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=14688756-3979-801b-8e1e-cf72d1848856)





剩下的一些，就基本属于是对协程的「扩展」了

首先就是所谓的调度器，前面 generator 的模式是没有调度的，或者说，是用户手动控制调度，自己决定何时运行哪个协程，而且这里调度一个协程，就是执行它这个函数。

而 async / await 模式就会有调度器，例如一个函数在 await 另一个 async 函数，此时如果该函数并没有执行完成，await 这里就需要等待，控制流会被切换出去（类似 generator 模式的 yield），调度器会进行调度

在设计更复杂的情况下，调度器的工作会多很多，例如如果不是采用 return 和直接 call 来转移所有权，那就可能需要通过直接跳转的方式（插入汇编或 `setjmp`/`longjmp` 等）来进行协程的所有权转移。以及可能有更复杂的调度策略决定运行哪一个协程

南京大学操作系统课程的其中一个实验就是实现这个程度的协程

[

![](https://jyywiki.cn/OS/img/vscode.svg)

M2: 协程库 (libco)

jyywiki.cn



](https://jyywiki.cn/OS/2024/labs/M2.md)



接着是一些协程设计上的问题。前面我们转移所有权的时候，yield 是定向地转移回所有权到 caller 上，因此可以用 return 实现。但更多场景是 yield 时协程 A 希望暂停自己的同时定向恢复协程 B 的运行，但又不希望 A 直接 call B（如果 B 也 call A，就会造成无限递归）。

一种实现是基于调度器的，称为非对称协程，A 返回到调度器，要求调度器 call B。这会带来一些性能损失，且不太能保证实时性

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F0f71dddd-810b-4881-81bf-75296977bd15%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4664NHFJLGT%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075601Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQCg9WxnALZfhkU66k8wAcuGs2fen8CzfEWbvDwSxvoIpwIhAKi7EBHOhIfdE%252F53icclAxcug6kyhkic%252Bnb0nOYCIyVDKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1Igyel6Bwe8HXNTNvtL0q3AN8KXvR9WQGcL%252F2hh7%252FROMz95hXdFKeZ137nzeYo2M6J3vJRlBzu5aWpHa3t%252FxtWr0oRN%252FOxkRNLynRGSTN9q769JhqB2sZm0FfsWxs6y8IxLOqkBkmzfReYyq9zMG%252FhvpYJQxa5UAzfU4%252FYJYQ6CF7P5Y3B1poddFPNRWrswhART3EXgJFYilQu0OyWsBvYOq41eAKB3qWVATo5Wc1ILFlVGKJezxn4Rc8lz3puv%252FEzH7cAyGCMSK8d%252FInL1mOUBEFZlQxw93CEd41Q4T6Jx8oY2KrFI9dzhisNS9mbvTLRAS7FNZZbYAtm8X6LIpYSBx73hHdW5HCQ8xjyTNSG5VqglB2cfcif3nweSHRpMsD0SubXjQPbytqY2lK3Qv7kacPhDTG20GDWLdwv%252FycuCFiE9%252BtI1B7mPj6mRXp0USCKnEZu9BmLCkRabFN0q4cpWCmD1HVo30LihY%252Bikt27vAkV5lARCsP4HF%252FESo3544iFBswIfjKRS3mypbnQhsGCq8yTnSQXIQsaq6DnsTIsby%252BsQ9arBpFrc9oIDZuXgDwjYDCm8BHU6zdmBFO6iDQDD2agUNqBhGnFb0ePbr43QgXZQwpmY6sofSd%252BrK89LI9QKzpmDkzEOf8CbykEjDRrYnVBjqkAadv3YjI%252BDVH1jFx9BvjcASw8LElLyt5GpsEASKjDejXB4D7XfD7skUqgTjNitWfiQqq%252Fo3A911Ub6419Bz6JG7%252FlUNn%252FVv8Ls2pGq8MX9IsAzYtk3FFOWmSOkVDyXTFt37y2NYIedXkTEO7%252F6j%252F31d%252BB2E%252BH9id37l1WRnPZI1tKU11pUDTmtUQ6iqAxKC%252Fcn4FIx4MtiD5scw%252Fe06CMcdHIIV2%26X-Amz-Signature%3D4f3ca90a981f58d3da27ab5bec27f63b21f0b1d9727e2076b15022cc19f32e5d%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=14688756-3979-800d-8df6-f3fb9ba47926)

另一类是对称协程，需要一些特殊的指令，让 A 能够直接切换到 B，且 B 返回后直接回到了调度器，这个过程对调度器是不知情的，这种设计架空了调度器，实现上更加复杂，但性能更好更加灵活

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Ff34759e5-39ea-43d1-a126-b96a589bb37b%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4664NHFJLGT%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075601Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQCg9WxnALZfhkU66k8wAcuGs2fen8CzfEWbvDwSxvoIpwIhAKi7EBHOhIfdE%252F53icclAxcug6kyhkic%252Bnb0nOYCIyVDKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1Igyel6Bwe8HXNTNvtL0q3AN8KXvR9WQGcL%252F2hh7%252FROMz95hXdFKeZ137nzeYo2M6J3vJRlBzu5aWpHa3t%252FxtWr0oRN%252FOxkRNLynRGSTN9q769JhqB2sZm0FfsWxs6y8IxLOqkBkmzfReYyq9zMG%252FhvpYJQxa5UAzfU4%252FYJYQ6CF7P5Y3B1poddFPNRWrswhART3EXgJFYilQu0OyWsBvYOq41eAKB3qWVATo5Wc1ILFlVGKJezxn4Rc8lz3puv%252FEzH7cAyGCMSK8d%252FInL1mOUBEFZlQxw93CEd41Q4T6Jx8oY2KrFI9dzhisNS9mbvTLRAS7FNZZbYAtm8X6LIpYSBx73hHdW5HCQ8xjyTNSG5VqglB2cfcif3nweSHRpMsD0SubXjQPbytqY2lK3Qv7kacPhDTG20GDWLdwv%252FycuCFiE9%252BtI1B7mPj6mRXp0USCKnEZu9BmLCkRabFN0q4cpWCmD1HVo30LihY%252Bikt27vAkV5lARCsP4HF%252FESo3544iFBswIfjKRS3mypbnQhsGCq8yTnSQXIQsaq6DnsTIsby%252BsQ9arBpFrc9oIDZuXgDwjYDCm8BHU6zdmBFO6iDQDD2agUNqBhGnFb0ePbr43QgXZQwpmY6sofSd%252BrK89LI9QKzpmDkzEOf8CbykEjDRrYnVBjqkAadv3YjI%252BDVH1jFx9BvjcASw8LElLyt5GpsEASKjDejXB4D7XfD7skUqgTjNitWfiQqq%252Fo3A911Ub6419Bz6JG7%252FlUNn%252FVv8Ls2pGq8MX9IsAzYtk3FFOWmSOkVDyXTFt37y2NYIedXkTEO7%252F6j%252F31d%252BB2E%252BH9id37l1WRnPZI1tKU11pUDTmtUQ6iqAxKC%252Fcn4FIx4MtiD5scw%252Fe06CMcdHIIV2%26X-Amz-Signature%3D0dbb19418dd0f528fea80b660ce54234fd63ca80f0eaffbf7a1fee78fe0017a9%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=14688756-3979-809a-af5f-ee8cc4612737)



设计上另外一个重要的区别是协程的栈帧，也就是有栈协程和无栈协程。前面实现的协程是无栈协程，它们两个的区别从概念上讲，只有是否保存完整栈帧。

从实现角度来看，无栈线程的「状态」只有局部变量，转移所有权的位置等，对于该协程来说都是固定的，所以每个无栈协程的帧通常是一个定制的结构体（当然编译器帮你实现了），这个结构体就直接代表了整个无栈协程的所有状态，例如前面 `fib` 的例子，它的这个结构体可能就是这样的

```c++
struct fib_state {
    int a;
    int b;
    int c;
    int state;
}
```

而有栈协程对于帧的保存，无论是哪个协程，都是直接申请一大块内存，将其作为函数的调用栈来使用，一切状态都保存在内部。从这个角度来讲，有栈协程更接近普通函数

```c++
struct co {
    byte stack[STACK_SIZE];
}
```



在使用上的一个重要区别是，有栈协程可以在任意处挂起，包括嵌套函数。而无栈协程不可以，因为它的帧结构只保存了它自己特定的那几个的状态，所以无法恢复到嵌套函数内部。这使得有栈协程在使用上和普通函数几乎没有区别，就像线程一样

实现上的差异这也体现出无栈协程更加紧凑，开销更小，因为它只保存了必要的状态。而有栈协程需要保存的状态更多，而且通常是有些浪费的（当然也可以让这个栈更小，但要考虑动态扩展的问题）



现在对于各种语言的协程实现就很清晰了，generator 和 async / await 就是编译器层面上实现的无栈协程，以语法糖的方式来提供。而 goroutine / virtual thread 等更类似线程，这是因为他们是有栈协程，还实现了抢占式的调度器来控制协程的执行，当然这里对于这种抢占式设计是不是协程也有不少争议，因为看起来他们从根本上就违背了协程的「协作式」这一想法



## 性能

对于无栈协程，性能上的优势是明显的，首先它保存的状态是非常轻量的，只保存了必须的状态。其次，无栈协程的场景通常是「协作式」的，也就是 A 运行一会，然后轮到 B 运行

如果通过线程来做这样的操作，大部分时间是浪费在无意义的上下文切换和互斥开销当中了，而无栈协程主动切换控制权，使其每次切换都是有意义的



而对于带抢占式调度器的有栈协程，和线程那么像，或者说它就是一种用户线程，那究竟开销少在哪里？

首先，进程和线程的调度需要到内核态做上下文切换，会有以下开销：

1.  切换页表全局目录
2.  切换内核态堆栈
3.  切换硬件上下文（进程恢复前，必须装入寄存器的数据统称为硬件上下文）
4.  刷新TLB
5.  内核调度器的执行

其中特别是跨 CPU 导致的 Cache 失效问题，会对性能有明显影响。CPU 之间也可以看作是一种分布式系统，在高性能场景中，跨 CPU 之间的交互就像跨节点的网络通信一样，相对于纯本地运算要慢得多，是要尽力避免的



协程调度也需要进行上下文切换，开销主要少在几个方面：

1.  协程栈通常只有几 KB，比数 M 的线程栈要小得多（无栈协程连这部分也不需要，就只是一个普通的函数调用）
2.  协程的上下文切换没有跨进程，也就不需要修改额外的内核数据结构（页表等），也不会造成 Cache 失效
3.  协程调度在用户态，而线程调度在内核态，每次调度都会有额外的上下文切换（到内核态）。协程避免了大量线程频繁的内核态上下文切换，能充分利用分给一个线程的时间片



## 局限

协程的轻量和用户态调度带来很高的性能，那么代价是什么？

首先无栈协程的功能上有局限，例如无法在嵌套函数中挂起，使得它的编程模型还是和普通函数有些不同，也无法实现一些效果，像在大部分语言中 async / await 就会带来传染性

其次对于有栈协程/用户线程，正是因为它运行在用户态，当涉及需要内核支援的部分时就很被动，例如面对阻塞式 I/O 时，无法察觉导致整个内核线程上的所有协程都被阻塞，或者需要一些比较高级的 CPU 亲和性调度时也难以实现

以及如果当调度不是抢占式时，协程如果不让出执行权或者因为一些异常导致执行权没有正常让出，就会一直占用在那里，导致其他协程无法运行。当然 Go 都解决了上面这两个问题，但设计上更加复杂了



## Ref

[

使用 C 语言实现协程

一种基于达夫设备的思想实现的协程。

mthli.xyz



](https://mthli.xyz/coroutines-in-c/)

[

bilibili.com

bilibili.com



](https://www.bilibili.com/video/BV1dv4y127YT/)

[

zhuanlan.zhihu.com

zhuanlan.zhihu.com



](https://zhuanlan.zhihu.com/p/330606651)

[

zhihu.com

zhihu.com



](https://www.zhihu.com/question/50185085/answer/1342613525)

[

zhuanlan.zhihu.com

zhuanlan.zhihu.com



](https://zhuanlan.zhihu.com/p/80037638)
