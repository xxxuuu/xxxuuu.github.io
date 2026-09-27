---
title: "MemoryDB: Redis + Remote Log"
description: "MemoryDB 是 Amazon 的一个 Redis 兼容的 KV 数据库，论文发表在 SIGMOD 2024 上"
date: "2024-11-17"
tags:
  - "分布式系统"
  - "数据库"
  - "论文阅读"
canonical: "https://xxxuuu.me/post/memorydb"
---

MemoryDB 是 Amazon 的一个 Redis 兼容的 KV 数据库，论文发表在 SIGMOD 2024 上

由于 Redis 是内存数据库，持久性保证比较弱，因此在使用 Redis 作为主存储的低延迟需求场景，大部分人会构建一套复杂的架构来同步或备份 Redis 的数据，Redis 自己也提供了复制和集群的功能，然而这其中的容错处理无法真正保证一致性和持久性。MemoryDB 诞生就是为了解决这个问题，提供一个**能保证持久性的高可用强一致 Redis，并且仍然保持内存级性能**



# 架构

首先回顾下 Redis 自身的持久化和一致性挑战：

1.  Redis 通过副本提供高可用，但这个过程是异步的，当主节点故障，副节点被提升为主节点而复制未完成时，就会永久丢失数据
2.  Redis 包含 RDB 和 AOF 两种持久化方法，分别是快照和事务日志，对于 AOF 可以配置成每次写入都执行 `fsync()` 以牺牲可用性为代价提供持久化。但多节点场景 AOF 不能提供任何保证，主节点故障时同样没有办法确保选举出的副本具有最新数据，最坏情况下这个副本可能没有任何数据，导致数据完全丢失
3.  Redis 提供了 `WAIT` 命令，通过该命令，客户端能阻塞等待数据同步复制直到完成。但 `WAIT` 只对当前连接有效，不是全局的。对于其他客户端来说仍然无法保证观察到的数据一致性。同样，故障时也没法做任何保证

简单来说，**Redis 故障转移会导致数据丢失**



MemoryDB 直接基于 Redis 构建，但并没有进行侵入性修改。这里通过加入一个分布式事务日志服务将两层实现解耦，Redis 只相当于这套架构底下的执行引擎

Redis 主节点自身的复制流会被拦截，重定向到事务日志中。在同步写入日志成功后对客户端返回，所有其他副本都只是重放日志

![MemoryDB 架构（话说这图真糊啊](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc20e8ae2-0be9-402e-a134-7c5ce4a0fa29%2Fimage.png?table=block&id=12d88756-3979-8038-bd8a-faad3d98bd5e&cache=v2&width=384)
*MemoryDB 架构（话说这图真糊啊*



# 持久性

事务日志服务是 Multi-AZ 的，能提供持久化的存储，对主节点的操作会同步写入到事务日志中，其他副本就像普通的 Redis 复制过程一样读取事务日志

可以看出这里事务日志是系统的核心，提供了完美的保证，但论文没有具体说明它是如何构建的，应该又是 Amazon 内部的黑盒服务

部分分布式数据库允许使用 Kafka 作为 Remote WAL，所以如果要做一个 MemoryDB 的开源实现，Kafka 应该可以承担这个事务日志服务的角色，但还是会有很多额外工作量



# 一致性

MemoryDB 这里的日志是一种 WBL（Write-behind logging），选择 WBL 而不是 WAL 的原因是它天然和 Redis 的复制模型保持一致，例如 SPOP 之类的随机操作也能保证相同的结果



但这样会带来的问题是写入日志前故障会导致不一致，所以这里需要事务日志 ACK 了才能向客户端返回。MemoryDB 通过添加一层 client blocking 层作为 tracker 实现这一点，考虑到 MemoryDB 避免修改 Redis 的前提下，我猜应该类似这样的实现

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fbfc3d68f-ea82-430d-99cb-248f2d66a4bc%2F%25E6%259C%25AA%25E5%2591%25BD%25E5%2590%258D%25E7%25BB%2598%25E5%259B%25BE.drawio.png?table=block&id=14188756-3979-804a-bb79-e2f6312ba5b5&cache=v2&width=288)

这里的好处同样是解耦了 Redis，即使事务日志写入未确认，仍然可以让 Redis 继续处理接下来的请求

但对于主节点的读操作，仍然需要等待其所依赖的写入被持久化，因此在 tracker 需要去 trace 每个尚未被写入日志的 key。只对主节点读写可以提供线性一致性，也允许直接从副本读，这时提供的是顺序一致性，跨多个副本的读取则是最终一致的



# 可用性

通过前面的手段，已经能保证主节点正常工作时的持久性和一致性，接下来需要再考虑下分布式系统中最重要的容错处理，主要是以下三个问题：

1.  故障检测：副本如何知道主节点故障
2.  选举方式：哪些副本会被提升为主节点
3.  故障恢复：临时故障的节点如何恢复



MemoryDB 完美利用事务日志实现了以上三点。事务日志中除了正常数据的复制流，还会包括一些控制日志

故障检测的方法就是典型的心跳，但这里心跳是作为一条日志，主节点定期写入心跳/租约日志，如果副本未能在租约期限内观测到这类日志，就认为主节点宕机，触发选举

> 这里感觉会有些时钟问题



其次是具体选主方式，选主时所有副本都只会和日志服务交互，不会互相通信，因此这里并不是采用 quorum 之类的投票方式，而同样是采用写入日志的方法

每个日志都会有一个唯一 ID，且 append 新日志时，必须指定前序日志 ID。因此多个副本竞争选主时，只有第一个竞选日志是有效的，这也确保了能竞选的副本必然拥有最新数据。新主上台后会通过 gossip 协议通知其他节点，这部分是采用 Redis Cluster 自己的实现



最后，当故障的主节点恢复时，由于租约过期，它会自行下台重新作为副本工作。除了利用心跳日志实现的故障检测，MemoryDB 通过带外监控服务的心跳检测和内部 Redis Cluster 的 gossip 结合来获得一个集群视图，管控面会在其认为故障的节点上重启 Redis 进程或启动新副本轮替该节点

MemoryDB 做了很多优化去减少 MTTR（Mean time to recovery）。在运行时，Redis 自身的持久化/快照（RDB）机制也在工作，快照被上传到 S3 中，新副本启动或恢复时会通过 S3 获得快照快速赶上进度然后开始回放事务日志

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F9f382b69-dd91-4ea1-909c-793eeaef7f63%2Fimage.png?table=block&id=14088756-3979-80e3-9143-ffcc1806f24d&cache=v2&width=336)

Redis 的快照是通过 Linux 的 fork 写时复制特性来实现的，虽然整体开销已经很小，但也不可避免地带来一些性能抖动，包括瞬时的内存占用

MemoryDB 的优化相当于把写时复制从进程扩展到集群层面，快照时会启动一个 off-box 临时集群，临时集群和副本恢复一样，先恢复数据到最新状态，再进行快照。虽然看起来有点重，成本很高，但优点是能完全避免快照导致用户集群产生抖动以及这期间的可用性降低两个问题

> 关于这一点，还可以看看别家的解决方案，例如阿里云直接修改了内核把 fork 时开销最多的的页表复制过程放到子进程中：[Async-fork: Mitigating Query Latency Spikes Incurred by the Fork-based Snapshot Mechanism from the OS Level](https://www.vldb.org/pvldb/vol16/p1033-chen.pdf)



# 性能

最后是例行环节 evaluation



只读(a)和只写(b)负载：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F85832d91-1442-4d30-a09f-b8357d87adbc%2Fimage.png?table=block&id=14188756-3979-8022-a5d3-dc5667a7f2d2&cache=v2&width=528)

写请求由于有对事务日志的同步写入，性能基本是 Redis 的 1/3 到 1/2 左右，符合预期。但读性能没有理由 MemoryDB 能比 Redis 还快啊？感觉有些猫腻，论文里说是因为 MemoryDB 通过优化过的 I/O 多路复用聚合了客户端链接，但我对此保留疑问



只读(a)、只写(b)和混合读写(c)的时延表现，基本符合预期：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F2b826c0e-8de6-44a1-9ad2-ac24b15a0c0b%2Fimage.png?table=block&id=14188756-3979-8016-8705-e764ae36bcf0&cache=v2&width=1400)



接下来是快照，负载是 2000w 个 500 bytes 的 key，节点配置 2c16G。快照同时 100 个 client 执行 GET，20 个 client 执行 SET

Redis 在快照期间的请求的延迟(a)和吞吐量(b)影响，以及内存占用情况：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F2b3b487b-c4c7-430f-80cc-d0c1ab6f5df5%2Fimage.png?table=block&id=14188756-3979-802a-8de9-f5c33426d156&cache=v2&width=1400)

MemoryDB 在快照期间的延迟(a)和吞吐量(b)：



![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F07c212c9-11a1-40a0-a226-8a42735f85fd%2Fimage.png?table=block&id=14188756-3979-801e-a64c-d8ba1480ba0c&cache=v2&width=1400)

也符合预期，MemoryDB 非常稳定，不过看起来显然也田忌赛马了，没有评估这启动一个临时集群的成本开销，整个快照过程也慢不少



# 总结

总结一下几点：

1.  Redis 仅仅作为执行引擎，解耦实现
2.  通过事务日志（transaction log）同步写保证持久性
3.  tracker 追踪未完成持久化的 key，提供线性一致性
4.  围绕 log 实现租约和选主
5.  快照卸载到 off-box 集群上执行，避免抖动



总体来说，是很巧妙的想法和实现，仅仅围绕 log 就实现了这一切。而且从兼容 Redis 这一核心目的角度来看，通过 log 的解耦，能做到极低的侵入性，也就意味着更高的兼容性和可维护性，是非常好的工程实践。大多数开源 fork 魔改到最后，gap 越来越大，再要保持兼容的话维护成本就会很高



另一方面也引发了我关于 log 的更多思考，大多数数据系统都会有 WAL 或其他各种 log，这种基于 log 复制的 idea 在共识算法中也很常见。MemoryDB 展示了一个如何通过这些 log 扩展系统的完美例子，再回过头来看其他系统、设计和解决方案，不禁会想是不是也能在 log 上迸发出无限可能



之后如果有时间，可能打算去复刻一个 MemoryDB 的实现



# Ref

-   [Amazon MemoryDB: A Fast and Durable Memory-First Cloud Database](https://assets.amazon.science/e0/1b/ba6c28034babbc1b18f54aa8102e/amazon-memorydb-a-fast-and-durable-memory-first-cloud-database.pdf)
-   [溯本追源 – Amazon MemoryDB SIGMOD 2024 论文解读 | 亚马逊AWS官方博客](https://aws.amazon.com/cn/blogs/china/amazon-memorydb-a-brief-introduction-to-the-sigmod-2024-paper/)
-   [从一到无穷大 #27 从Amazon MemoryDB视角看稳定binlog带来的无限可能性](https://blog.xiyoulinux.com/blog/104106524)
