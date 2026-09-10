---
title: "应该在 DBMS 中使用 MMAP 吗？"
date: "2024-10-27"
tags:
  - "论文阅读"
  - "数据库"
canonical: "https://xxxuuu.me/post/db-mmap"
---

# Buffer Pool 和 MMAP

对于（基于磁盘的）数据库来说，缓存（cache + buffer）管理是很重要的，因为次级存储速度很慢，必须设计一个缓存机制才能让数据库高效地进行读写



传统的方法是数据库实现一个缓冲池（Buffer Pool），像 CMU 15-445 这样的数据库课程，通常第一个 Lab 就是实现一个 Buffer Pool 作为页面和缓存管理的组件

另一个方法是将一切交给操作系统，也就是使用 `mmap()` 系统调用，mmap 将文件映射到内存地址空间上，程序透明地对内存进行访问，由内核负责管理页面的加载和刷写

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F0bb67f4b-fc66-4c7f-8b45-af39e6585204%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466TBALETP7%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075600Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIDMv4W06qgndxUna5IElxW%252FQS28X4vNWJAFgQnfMTqevAiANCmMJSJ91yahq4aiUAA0zRmIKfyz8Msbxvgy%252B32xfrSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMIaujlTbKpr5%252BC7zcKtwD540pcw3pgZXM3Coed2r%252FUiXcMFLKa4pBYT3w8geVxmRQfa92T78t1C7dkVrnzBBL%252FZWy%252BxfwHtGYshx8qFO5i1FPGvM125%252FIRv8iVJY%252BD4M1cqDYkXN9WZ46b%252FaKgaJNZz7ADfpgb%252FwBq78KJza5ZY0xUwynaVrqBgIL0%252FzRUEN%252FXzqLHZV%252Fx7kAkJtzbyegCYSJU%252BWHATjoARQ8NQ7iFj9Kgp4BmTtBeOoDteexhRXZcaJlSiXZtnfp3e1b3N680K1lrRwfkIsYIdth82xSjpq7oi9MHZeuiqSbkNUA83AJH7NowVE%252FHD9y4q0RgRxYYu3yR0eMTTWtaO02mtKEYgm9vuYmUZ6aidwWcsunfa2wXaqhUr770ON3V0ExP7Noiqch1Oj4kKcALQ5F%252B5%252FfI7SIeUiCcsncfwS0WUMgPw1zMOk9GfuCN1M8QTpCDDZCSRaSSY58Mau98x37qDuSsTTbKxgo8ljH7NCyY3E2fFwRcrD6KYm8IY%252Fjv%252BGciR54QBQcz4T7Bp5Kvs5R5Pk1yDZUmvCOJqdgn2TlPL%252B4LXTSkVO6VoLiMmATih8f8rsakz1kNeyIbOKbVLtSZNpMbLzorkgXKMCCZgdcNWRt9YEVZQ2UePZDhljMZF8woa2J1QY6pgGZDesL%252BVb6OeABJgDXSeCrYP21Y0GKLK0oyEUeFqETps3eRodjN4BhowHbeOKRxZUxv1bKalP8T4kEYvm3aMnHY6i0UioQeP%252F%252B%252FOW3%252F5oN%252BV5V3kpuUzcxAgC7ybiAE%252BVMgBpB9GvXFgyL1GPGiekXIBw7%252F7YdqgOkI79XgZSdPGVwCTHwPlC%252BTbyJLIiaecOsvR46d4RPHEqr4NdpbFWK2Ad8TGNp%26X-Amz-Signature%3D6419a0565ce068304bc87dc696271712cc0739d4af9df150fefd31351dc37b22%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=e633f5c6-aac9-4be2-be6c-e7d79fca0959)

使用 mmap 能大大简化开发，并且能避免 `read`/`write` 等系统调用和缓冲区拷贝的开销，理论上有更高的性能。因此不少数据库或存储系统也使用了 mmap，但也有一些不同的观点



# 反方：不应该使用 MMAP

反方出自 CIDR 2022 上一篇比较短的 paper：*[Are You Sure You Want to Use MMAP in Your Database Management System?](https://db.cs.cmu.edu/papers/2022/cidr2022-p13-crotty.pdf)* 作者之一是 Andy Pavlo，刷过 CMU 15-445 的同学肯定不陌生



PS：页眉有惊喜

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe6a32e12-65cc-426e-881b-8c2a4eb6b942%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466TBALETP7%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075600Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIDMv4W06qgndxUna5IElxW%252FQS28X4vNWJAFgQnfMTqevAiANCmMJSJ91yahq4aiUAA0zRmIKfyz8Msbxvgy%252B32xfrSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMIaujlTbKpr5%252BC7zcKtwD540pcw3pgZXM3Coed2r%252FUiXcMFLKa4pBYT3w8geVxmRQfa92T78t1C7dkVrnzBBL%252FZWy%252BxfwHtGYshx8qFO5i1FPGvM125%252FIRv8iVJY%252BD4M1cqDYkXN9WZ46b%252FaKgaJNZz7ADfpgb%252FwBq78KJza5ZY0xUwynaVrqBgIL0%252FzRUEN%252FXzqLHZV%252Fx7kAkJtzbyegCYSJU%252BWHATjoARQ8NQ7iFj9Kgp4BmTtBeOoDteexhRXZcaJlSiXZtnfp3e1b3N680K1lrRwfkIsYIdth82xSjpq7oi9MHZeuiqSbkNUA83AJH7NowVE%252FHD9y4q0RgRxYYu3yR0eMTTWtaO02mtKEYgm9vuYmUZ6aidwWcsunfa2wXaqhUr770ON3V0ExP7Noiqch1Oj4kKcALQ5F%252B5%252FfI7SIeUiCcsncfwS0WUMgPw1zMOk9GfuCN1M8QTpCDDZCSRaSSY58Mau98x37qDuSsTTbKxgo8ljH7NCyY3E2fFwRcrD6KYm8IY%252Fjv%252BGciR54QBQcz4T7Bp5Kvs5R5Pk1yDZUmvCOJqdgn2TlPL%252B4LXTSkVO6VoLiMmATih8f8rsakz1kNeyIbOKbVLtSZNpMbLzorkgXKMCCZgdcNWRt9YEVZQ2UePZDhljMZF8woa2J1QY6pgGZDesL%252BVb6OeABJgDXSeCrYP21Y0GKLK0oyEUeFqETps3eRodjN4BhowHbeOKRxZUxv1bKalP8T4kEYvm3aMnHY6i0UioQeP%252F%252B%252FOW3%252F5oN%252BV5V3kpuUzcxAgC7ybiAE%252BVMgBpB9GvXFgyL1GPGiekXIBw7%252F7YdqgOkI79XgZSdPGVwCTHwPlC%252BTbyJLIiaecOsvR46d4RPHEqr4NdpbFWK2Ad8TGNp%26X-Amz-Signature%3D7c9acb4f5d2eed0e5795a3e027af08d78021ef6b7c73dd14e1a7e786ba677522%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=12988756-3979-80d3-9666-e98f30e6c92f)



文章的主要观点是在 DBMS 内不应该使用 mmap，论文提出，mmap 存在一些阴暗面（dark side）会带来棘手的问题，而为了解决这些问题，在工程上带来的复杂性，会使得 mmap 本身的收益（简单和性能）都被抵消



论文具体讨论了 mmap 的以下几宗罪

## 事务安全

mmap 对程序来说是透明的，何时将脏页刷到磁盘上取决于操作系统。虽然通过 `msync` 可以强制刷盘，但没有办法能够阻止刷盘（这相当于强制数据库是 steal policy 的），也无法在静默刷盘时得到通知



为此数据库就需要一些复杂的协议来保证事务安全，论文总结了三种处理方法，都是写时复制的（Copy-on-Write，COW）想法：

1.  内核写时复制

    通过 `MAP_PRIVATE` flag 创建 mmap，映射出来的地址空间就是写时复制的，不会作用到底层的文件。通过这个方法，可以创建一个私有的副本工作区用来修改数据，最后在私有工作区更新的数据并写入 WAL，再传播修改回主工作区

    这里要确保已提交事务的更新必须在其他冲突事务运行之前就传播到主工作区上，需要一些额外的数据结构去追踪脏页

    另外因为是 COW 的，私有工作区会随着写入逐渐增长，最终可能会在内存中存在两个完整的数据库副本，可以通过 `mremap` 定期收缩私有工作区的大小避免无限扩张，但同样有上面的问题，需要确保脏页传播到主工作区上，并在此期间阻止并发更新

    MongoDB 的 MMAPv1 引擎使用了这种方法

2.  用户态写时复制

    第二种方法类似，但是在用户态进行。待更新页面从 mmap 区域手动复制到另一块单独维护的缓冲区上进行更新并写入 WAL，然后再复制回 mmap 区域

    SQLite，RavenDB 使用了类似的方法

3.  影子分页

    影子分页类似一种 swapping pointer 的做法，通过 mmap 映射两份出副本，其中一个是主副本。当要修改时将页面复制到影子副本上进行更新，`msync` 刷盘后 swap pointer 将影子副本变为主副本，原主副本变为新的影子副本

    LMDB 使用了这种方法，但只允许单个写者进行更新




## I/O 停顿

很多 DBMS 都使用了异步 I/O（例如 libaio 或 io\_uring），例如对 B+ Tree 的叶子节点扫描可以通过异步 I/O 访问以避免非连续页面的阻塞读取导致的延迟。但 mmap 是不支持异步的

此外，操作系统可能会随时会将页面驱逐，再次访问就会导致缺页中断，会有明显的性能抖动。DBMS 无法知道页面是否真正在内存中，虽然可以使用 `mlock` 将页面 pin 在内存中，但这又需要实现一些额外的页面管理工作

或者通过 `madvise` 来告知操作系统应用的访问模式以尽量避免接下来访问的页面被驱逐，但这只是一种 “advise” 而不是强力的控制，并且也只提供了简单的 `MADV_SEQUENTIAL`、`MADV_RANDOM` 和 `MADV_WILLNEED` 等几个 flag，无法精细管理



也许还可以创建额外的线程去做预取以避免阻塞主线程，但这额外的复杂性完全违背了使用 mmap 的初衷



## 错误处理

DBMS 的一个核心职责是确保数据的完整性，大多数 DBMS 都会在各种级别的数据上维护 checksum，例如 SQL Server 在页面级别上维护了 checksum，从磁盘上读取数据时就会进行校验



但使用 mmap 的话难以实现，原因还是 DBMS 无法知道页面到底在哪里，没有一个明确的边界隔离内存和磁盘访问。操作系统可能在任意时刻将页面驱逐，下次访问再透明地重新从磁盘读取，因此必须每次进行页面访问都重新校验才能确保安全，但显然很多时候这种校验是不必要的

另外从语言角度考虑，如果使用了非内存安全的语言，有可能在不经意间破坏了 mmap 映射区域的内存数据，而这些错误的数据又会被静默地写入磁盘，永久损坏。如果是 Buffer Pool 实现，则可以在刷盘时显式检查



mmap 这种透明性的「优点」也会导致在代码里更难进行 I/O 错误处理。Buffer Pool 实现中 I/O 交互只局限于它自身，可以很轻易地包装对 I/O 错误的处理。但 mmap 中任意时刻的内存访问都可能导致 I/O 错误，给异常处理流带来很大的不便



## 性能问题

最后，mmap 真的性能更好吗？



传统观点认为 mmap 性能好的点在于避免了 `read`/`write` 的系统调用，以及避免内核和用户态缓冲区来回拷贝的开销（这也降低了内存使用）。从这些点来看，随着 NVMe SSD 的提升，理论上 mmap 和传统 I/O 方法的差距还会进一步扩大



但论文指出，内核的页面驱逐机制成为主要瓶颈，该机制无法扩展到更多的线程和更大带宽的存储设备上。除非没有内核级别的重大重写，这个问题无法解决。具体来说有下面三个瓶颈：

1.  页表竞争：内核需要同步页面，在大量更新的时候会有显著竞争开销
2.  单线程页面驱逐：内核使用单线程进行页面驱逐，扩展性受限
3.  TLB shootdown：驱逐页面时，内核还要清理每个核心上的 TLB 项，这里多核设备的核间中断会有高昂的开销，需要数千个周期


OLTP 比较常见的随机读负载实验中，mmap 如果使用 `MADV_RANDOM` 的 hint，在一开始还能达到 fio 的基线性能，但马上就会 I/O 跌 0 将近 5 秒，最终恢复到基线性能的一半。右图可以看到此时正好是 Page cache 被填满，开始驱逐页面

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fca6f2a55-8f94-4ce6-a6ff-9816dc9898ef%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466TBALETP7%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075601Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIDMv4W06qgndxUna5IElxW%252FQS28X4vNWJAFgQnfMTqevAiANCmMJSJ91yahq4aiUAA0zRmIKfyz8Msbxvgy%252B32xfrSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMIaujlTbKpr5%252BC7zcKtwD540pcw3pgZXM3Coed2r%252FUiXcMFLKa4pBYT3w8geVxmRQfa92T78t1C7dkVrnzBBL%252FZWy%252BxfwHtGYshx8qFO5i1FPGvM125%252FIRv8iVJY%252BD4M1cqDYkXN9WZ46b%252FaKgaJNZz7ADfpgb%252FwBq78KJza5ZY0xUwynaVrqBgIL0%252FzRUEN%252FXzqLHZV%252Fx7kAkJtzbyegCYSJU%252BWHATjoARQ8NQ7iFj9Kgp4BmTtBeOoDteexhRXZcaJlSiXZtnfp3e1b3N680K1lrRwfkIsYIdth82xSjpq7oi9MHZeuiqSbkNUA83AJH7NowVE%252FHD9y4q0RgRxYYu3yR0eMTTWtaO02mtKEYgm9vuYmUZ6aidwWcsunfa2wXaqhUr770ON3V0ExP7Noiqch1Oj4kKcALQ5F%252B5%252FfI7SIeUiCcsncfwS0WUMgPw1zMOk9GfuCN1M8QTpCDDZCSRaSSY58Mau98x37qDuSsTTbKxgo8ljH7NCyY3E2fFwRcrD6KYm8IY%252Fjv%252BGciR54QBQcz4T7Bp5Kvs5R5Pk1yDZUmvCOJqdgn2TlPL%252B4LXTSkVO6VoLiMmATih8f8rsakz1kNeyIbOKbVLtSZNpMbLzorkgXKMCCZgdcNWRt9YEVZQ2UePZDhljMZF8woa2J1QY6pgGZDesL%252BVb6OeABJgDXSeCrYP21Y0GKLK0oyEUeFqETps3eRodjN4BhowHbeOKRxZUxv1bKalP8T4kEYvm3aMnHY6i0UioQeP%252F%252B%252FOW3%252F5oN%252BV5V3kpuUzcxAgC7ybiAE%252BVMgBpB9GvXFgyL1GPGiekXIBw7%252F7YdqgOkI79XgZSdPGVwCTHwPlC%252BTbyJLIiaecOsvR46d4RPHEqr4NdpbFWK2Ad8TGNp%26X-Amz-Signature%3Dee511ec330bf0ae200151e1d30df2b5cde4bbd3fc3ccc1436db10c39aa7d8a4a%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=12b88756-3979-80af-9b95-e0d8d5496145)

对于 OLAP 场景的顺序读负载试验，`MADV_SEQUENTIAL` hint 的 mmap 在一开始还能维持较高的性能，但同样在 20 秒左右 Page cache 被打满，性能严重下降。而在同时使用 10 块 SSD 的场景，mmap 性能和只有 1 块 SSD 时几乎完全一样，说明 mmap 性能无法随着硬件线性提升

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F4bffeaa1-bcba-4bbc-baf3-2a9c49313af1%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466TBALETP7%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075601Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIDMv4W06qgndxUna5IElxW%252FQS28X4vNWJAFgQnfMTqevAiANCmMJSJ91yahq4aiUAA0zRmIKfyz8Msbxvgy%252B32xfrSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMIaujlTbKpr5%252BC7zcKtwD540pcw3pgZXM3Coed2r%252FUiXcMFLKa4pBYT3w8geVxmRQfa92T78t1C7dkVrnzBBL%252FZWy%252BxfwHtGYshx8qFO5i1FPGvM125%252FIRv8iVJY%252BD4M1cqDYkXN9WZ46b%252FaKgaJNZz7ADfpgb%252FwBq78KJza5ZY0xUwynaVrqBgIL0%252FzRUEN%252FXzqLHZV%252Fx7kAkJtzbyegCYSJU%252BWHATjoARQ8NQ7iFj9Kgp4BmTtBeOoDteexhRXZcaJlSiXZtnfp3e1b3N680K1lrRwfkIsYIdth82xSjpq7oi9MHZeuiqSbkNUA83AJH7NowVE%252FHD9y4q0RgRxYYu3yR0eMTTWtaO02mtKEYgm9vuYmUZ6aidwWcsunfa2wXaqhUr770ON3V0ExP7Noiqch1Oj4kKcALQ5F%252B5%252FfI7SIeUiCcsncfwS0WUMgPw1zMOk9GfuCN1M8QTpCDDZCSRaSSY58Mau98x37qDuSsTTbKxgo8ljH7NCyY3E2fFwRcrD6KYm8IY%252Fjv%252BGciR54QBQcz4T7Bp5Kvs5R5Pk1yDZUmvCOJqdgn2TlPL%252B4LXTSkVO6VoLiMmATih8f8rsakz1kNeyIbOKbVLtSZNpMbLzorkgXKMCCZgdcNWRt9YEVZQ2UePZDhljMZF8woa2J1QY6pgGZDesL%252BVb6OeABJgDXSeCrYP21Y0GKLK0oyEUeFqETps3eRodjN4BhowHbeOKRxZUxv1bKalP8T4kEYvm3aMnHY6i0UioQeP%252F%252B%252FOW3%252F5oN%252BV5V3kpuUzcxAgC7ybiAE%252BVMgBpB9GvXFgyL1GPGiekXIBw7%252F7YdqgOkI79XgZSdPGVwCTHwPlC%252BTbyJLIiaecOsvR46d4RPHEqr4NdpbFWK2Ad8TGNp%26X-Amz-Signature%3D0d2e9add0cb768309aa243e1380ee8e51944d8f96ffc6c37e7066688c4a459f7%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=12b88756-3979-8082-830a-dc6913a96ed5)



不过在我看来这个 benchmark 应该得加上 Buffer Pool 的数据，只和 fio 来比较显然是不公平的，fio 读写方式和真实数据库的负载不同，Buffer Pool 肯定也远达不到 fio 压测的基线性能



# 正方：使用 MMAP 完全没问题

RavenDB 的 CEO, Oren Eini 发表了一篇文章回复：*[Re: Are You Sure You Want to Use MMAP in Your Database Management System?](https://ayende.com/blog/196161-C/re-are-you-sure-you-want-to-use-mmap-in-your-database-management-system)*

RavenDB 的 Voron 存储引擎使用 mmap 构建，他们还出了一本[关于如何构建存储引擎的书](https://github.com/ayende/libgavran)，其内部也使用了 mmap



文章首先指出了 Buffer Pool 要做的事情并不少，而且也对实现有一定要求，如果不是高度优化的实现，不会有好的性能，而在 mmap 这些都能由操作系统来保障



接下来，文章对四个问题进行了逐一反驳

## 事务安全

mmap 确实无法知道数据何时落盘，但作者认为这本质上与使用 Buffer Pool 时没有区别，在 Buffer Pool 中也同样需要考虑页面的驱逐和各种管理

文中还提到 RavenDB 使用写时复制的主要目的也是为了方便实现 MVCC，更容易处理并发事务。并且单写者模型在 DBMS 中并不罕见



## I/O 停顿

作者承认关于缺页导致的 I/O 抖动是使用 mmap 必须要处理的最重要的问题，但实际情况并没有想象中那么严重。RavenDB 中通过在专用线程上调用 `madvise(WILL_NEED)`，他认为这和异步 I/O 的方式没什么不同



## 错误处理

校验和的问题，即使在 Buffer Pool 中也会存在，因为数据可能从 cache 中读取，但实际上在磁盘中损坏；RavenDB 只会进行一次校验和检查，不需要每次都检查，两者没什么差别

对于 I/O 错误，作者认为在数据库中处理该类错误的唯一答案是 crash 掉整个数据库然后从头恢复运行，因此在这里不需要什么额外工作



## 性能问题

对于 mmap 的三个性能瓶颈:

1.  页表竞争：是一个[已修复的内核 bug](https://ravendb.net/articles/production-postmortem-the-guinness-record-for-page-faults-high-cpu)，现在无需操心
2.  单线程页面驱逐：RavenDB 从未遇到过，脏页是少数，页面驱逐的压力并不大
3.  TLB shootdown：触发这个问题需要极快的 I/O 加上远超内存大小的工作集

作者认为论文中的基准测试假设了不使用 mmap（也就是使用 Buffer Pool）的情况下没有其他成本，这是不现实的，例如使用 Buffer Pool，也同样需要考虑这些页面驱逐的问题，只不过现在是由 Buffer Pool 来负责。这个观点我是赞同的，前文的基准测试确实没有体现出 Buffer Pool 的对比



# 总结

两篇文章看下来，个人感觉 Oren Eini 反驳的文章中内容稍显空洞，没有什么特别有力的证据或数据支撑，例如异步 I/O 性能那块没有给出具体数据，在我个人的经验中异步 I/O 还是能带来很大的提升的，除非这里的数据集很小，能大部分都缓存命中

但这篇文章也可以作为一个不同角度的参考，有些地方还是值得思考的，比如关于错误处理，另一个相似的问题是，对于底层软件，内存分配失败的情况下应该如何处理？mmap 无法像手动实现 Buffer Pool 一样限制缓存容量，可能更需要考虑这个问题

另外还可以参考下 codedump 老师的这篇 blog：

-   [周刊（第11期）：mmap适用于存储引擎吗？ - codedump的网络日志](https://www.codedump.info/post/20220327-weekly-11/)



回到 mmap 上，使用 mmap 确实需要考虑比想象中更多的问题，但随着内核发展，某些痛点也逐渐被解决了，例如现在内核支持了原子 `msync` 调用，如果它失败了，就会禁用内核的透明页驱逐功能，这样就不需要再操心一些使用 mmap 带来的事务安全问题了

但总的来说我认为是否使用 mmap 是一个 trade-off，如果你希望系统更加简单，有更低的开发成本，那就使用 mmap，把一切都交给内核；但反之这也可能会让内核实现成为整个系统的瓶颈，因为内核是 general-purpose 的实现，而不是针对数据库的 special-purpose 的实现。当内核会成为你的瓶颈，或需要更多细粒度的控制，为此需要进行大量改造的话，还不如从头就开始自己实现
