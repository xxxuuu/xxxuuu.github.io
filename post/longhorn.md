---
title: "Longhorn 浅析"
description: "Longhorn 是一个 Go 实现的 Cloud Native Storage，比较好奇作为一个提供块存储的分布式存储系统，使用 Go 实现，会面临哪些挑战，性能方面要又要如何优化"
date: "2024-08-08"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc3967b7e-bde2-4b5b-b5f6-97de21642f16%2Flonghorn.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4667LQC4L5H%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140426Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQD8iTLMur0Wv0IUlBstw9rafry3V40RPF8kv40jC%252B%252BYdAIgLPF%252BQoQc%252F2Sw%252FzfLR%252FwiKrVWoZTJnBo5MuMDn3xR3M8qiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDFHSMwt7FQs91C688SrcAxrLqm5T7VWDwRRDRFiTfNE7Iq3%252FMzzLS1VvGMqBhGsAKlJsGEENQ7N%252BTQSQyKl59Kix2dBFSqcAGb3%252F4%252BQTgdTvu2F4b2XYEeOugFAM7k5qWRlEpuDlmeb%252F7v5b3zQGcZ8Flle41s73qVe8DOlG9UQY%252FGaV7TuP54yxcWeHM31gBsQFB8CbsRIB20XH4bBjxltyIUStUJXhsZk7DX8foRbg6obHDAXmFGSm54rlMdUwvCEFMnXP1P2XhL84Qyp2rB7BrulhckNvhDUgrLB7Bscps0F78SzuaFcdRAH8kLAIM8S7oQz8xSX3rNfxZLQ834TJYgjWkoucxN8bFUD%252BojlSbttmMZRkd7AfVKfU9K4Ykk36QdBXfWGT8%252BfNMhZvKUqtSndSgNvYdaSkm%252Fp%252BAc6hmygo3SkwR3Pw3Nb4BBAM6TFciO7I09iRGZWYq16%252FGi63nV4buW5cLgh4qaw20i3Ak8T2aSCG0KUXxPWJ4niuHEkbxDg%252Bs4D3nPcU1xj2whNoTMR96YYQ639Ujif3jpqZSqt7aOKLh0mQola0GobI7PEvg%252B9s5B85dsWVDVwtOylveDIU7umCOt0y5by%252FiU977WE6jt%252BvKSb48BIBcHK320mxZbmjBaTLC1MYMIenxNUGOqUBhgPm%252FRXmT%252BWiRG5voQjhxA9IZYx6hejy0jB6muAzbBuUUvCpsE7btqzUQ%252BmbZVRALs%252FDhHdA%252BNXHFQE1meV7oY3be3A%252BzVwQS1Nk0bKtxF5zU3nKISPBUmOaEWsc0EICFEx7j%252BGlcGu8Z%252FYFebmpjLjEVqZTFeLTMWmaQyPSUdpTdvHZoJLZEzSuF9BJi8%252FIAJfpquzDkWrQjkmc3hXznxk5tvVO%26X-Amz-Signature%3Dfa3922922765c8a5439b9b7a71a4b07da789b5afe6cbdb08cb40ad89b4e090d0%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=bde25ba8-2381-4da6-bb5e-5787ace45def"
tags:
  - "存储"
  - "分布式系统"
canonical: "https://xxxuuu.me/post/longhorn"
---

Longhorn 是一个 Go 实现的 Cloud Native Storage，比较好奇作为一个提供块存储的分布式存储系统，使用 Go 实现，会面临哪些挑战，性能方面要又要如何优化



从宏观视角来看，Longhorn 的数据流如下， Engine 是 volume 的 controller，每个 volume 都会有一个 engine 实例，replica 是卷的一个副本实例，负责具体的落盘，显然 Engine 就是数据面的核心

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F74bdb399-f643-4c60-af08-0435670cf958%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140438Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D7332cf2b54732dcc2f580c4b195cdced75b1f2f23feb7b5d0461bf9b45df8d2f%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=f09b7b63-717c-43f5-8e2d-00daafae5408&cache=v2&width=1400)

Longhorn 是控制面则是基于 K8s 的，所有资源都以 K8s CRD 提供，通过 Operator 管控，称为 Manager



# V1 Engine

## Replica

Engine 有 V1 和 V2 两个版本，先从 V1 Engine 开始分析，自底向上看，最下面的是 replica。replica server 在启动时就会创建/打开对应的 replica，然后启动两个 grpc server，分别处理控制流和数据流



replica 在节点上对应一组 sparse file，代码中这个结构称为 `diffDisk`，每个 file 有点类似于 LSM-Tree 中的 layer/level，这里称为 snapshot（除了最新一层叫 head/live data）：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F09606cc3-8f19-4e2f-9a02-c9c0ace747f9%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140438Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3Daa0d6428bf9abed1f1274159f29b58c41078c2b1a585b2ef58ecf4a11f61805d%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=c0ea8054-fb66-4660-9340-c9e8e46a1185&cache=v2&width=1400)

每个 `diffDisk` 的元数据存在一个 `volume.meta` 文件中，还会有一个 `revision.counter` 文件记录写入的版本号。每一层 file 划分为多个 4K 大小的 sector，这是写入的最小单元，因为都是 sparse file，所以 Longhorn 的卷自然支持精简配置。file 之间从新到旧连接起来，索引表 `location` 则存储 sector 位于哪一个 file 中



读写流程

-   写入时先自增 revision，元数据中标为为 dirty，这里 revision 会落盘，但元数据不会。然后在 `diffDisk` 只会写入最新的一层，即 live data 或 head，是原地写入的，同时更新索引。前面提到 sector 是写入最小单元，如果写入不够一个 sector，就会先读出原数据，修改后再写
-   读取时从索引中找到 sector 对应第几层的 file，如果找到就直接去读。否则从新到旧的 file 查找，对于每一个 file 使用 FIEMAP ioctl 查询指定范围内是否存在 extent，是则说明 sector 位于这个 file 中，更新索引后读取



快照&扩容流程

-   快照：快照很简单，只是创建一个新的 head。删除就是将其内容覆盖到上一层 snapshot 中
-   扩容：创建一个新的 head，相当于打了个快照，head 的大小被 truncate 为扩容后的大小，同时还需要修改元数据。由于 sector 变多了，`diffDisk` 内的 `location` 索引表也要扩容



一开始还以为 `diffDisk` 会是类似 RocksDB 这种 LSM-Tree based 的存储引擎，但完全不是一回事。它没有存储引擎必须的各种功能，可以说只是一个能支持 snapshot 的数据格式

首先接口语义上，`diffDisk` 是为块存储设计的，并不是 key-value 的，或者说 key 就是 offset；也没有删除接口，只有读和写。不过这也问题不大，块存储本身也没有“删除”的概念，真要添加删除接口也可以通过写入墓碑标记实现

`diffDisk` 中单个文件的数据布局和元数据维护是依赖文件系统的 extent 功能实现的，没有定义自己的格式。所以这套实现对文件系统有要求，需要支持 extent 功能，优点是文件很“干净“，这里如果没有 snapshot，实际上就是对单个文件的直接读写。但反之可以说没有任何优化，性能需要打个问号

同时它没有 WAL，无法保证崩溃一致性。这种情况需要 rebuild，更不用提快照（revision）读和事务之类的功能了。rebuild 这些操作都依赖上层控制面触发，后续会提到



## Controller

Controller 负责整个 volume 视角的读写，它被调度在和最终 client 的 Pod 相同的节点上，从 frontend 中接受读写请求，往后连接到一个或多个 replica 上，将读写转发给这些 replica

为了避免和 K8s 中的 Controller 混淆，后面都直接称这个 Controller 为 Engine

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd7d422a8-aa34-4ff3-b059-b898eb14bf56%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140438Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3Db9687786490f4cbb7803f9e8212fd83c6158da0d02385f5c4cf9db927372c63c%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=6080c1ce-0625-443b-a0dc-fc07904694e3&cache=v2&width=1400)



Engine 启动时会监听一个 UDS（`/var/run/longhorn-{volume-name}.sock`），同时创建 frontend，frontend 实际上就是一个 iSCSI Target，通过[定制的 tgtd](https://github.com/rancher/tgt) 创建，这个定制 tgtd 做的工作不多，主要是能支持将 iSCSI 流量包装成 Longhorn 自己的一个简单协议转发到前面的 UDS 中

协议结构如下：

```go
type Message struct {
	MagicVersion uint16
	Seq          uint32
	Type         uint32
	Offset       int64
	Size         uint32
	Data         []byte
}

const (
	TypeRead = iota
	TypeWrite
	TypeResponse
	TypeError
	TypeEOF
	TypeClose
	TypePing
	TypeUnmap
)

const (
	MagicVersion = uint16(0x1b01) // LongHorn01
)
```

有了 iSCSI Target 后，还需要启动 iSCSI Initator 连接这个 Target，这步的目的是需要创建出一个块设备，然后通过 mknod 指定相同的主次设备号再创建出 `/dev/longhorn/{vol_name}`。这就是 client 最终直接操作的设备，对它的 I/O 会一路到 Initator → Target → UDS 上。到此 frontend 就算创建完成



Engine 之后为 volume 的每一个 replica 创建对应的 backend(replicator)，并维持心跳。会从前面监听的 UDS 中解析协议并转发给 replica

具体读写上 Engine 通过一个读写锁控制并发，read 只要任一一个 replica 成功即可，用的 round-robin 的策略做 balance。write 和 unmap 等操作是并发执行的，要求全部成功。IOPS 之类的监控和统计也在这个层级实现

最后 Engine 会再启动一个 grpc server，处理控制流，例如卷扩容、快照等命令，也是通过 backend(replicator) 转发到 replica 上执行的。当然，这里调用的是处理控制流的 grpc server



这里有一个优化，如果 volume 只有一个 replica（单副本）且设置了 struct local 模式。Manager 会将 replica 调度到和 Engine 同一个节点上。Engine 在创建 backend 时就会通过 UDS 连接而不是 TCP 连接。这种本地化的策略能够有效提升 IOPS 和改善延迟，不过这里约束了只能用单副本，限制比较大

虽然 Engine 自身是单点，但是它运行在和 client 相同的节点上，因此如果节点故障，一般 client 也会同时不可用，是个不错的策略



# Manager

一开始提到，Longhorn 的控制面是作为 K8s Operator 实现的，称为 Manager。Longhorn 里所有元数据，包括 Engine 和 Replica 都以 CRD 呈现。

这套方案的优点是很多东西都能依赖 K8s 的能力提供和管理，还能很好地融入生态。但同样很多元数据操作的链路都要通过 K8s，感觉还是会比较慢，也限制了规模和能力



## rebuild & add replica

如果 Engine 到某个 replica 心跳失败或读写或控制流命令错误，或发现 replica 的 revision 不是最新的，这个 replica 的 mode 就被设置为 ERR 不再读写

Manager 中的 monitor 会定时请求 Engine 中处理控制流的 grpc server 获取其所有的 replica 信息，更新到 Engine CR 的 status 中。因此当在 Manager 中的 Engine Controller 对该 Engin CR 进行 reconcile 时就能检测到 replica 处于 ERR mode 或不存在，调用 Engine 触发 rebuild



V1 Engine 的 rebuild 最终执行了 AddReplica Task，所以 rebuild 实际上流程和新增 replica 一致

-   Engine 在创建新 replica 之前，会先对其他 replica 打一个快照，然后创建一个 WO（仅写入）模式的新 replica，因此它马上就可以接收写入
-   然后从已有的 replica 中将 `diffDisk` 的元数据和剩下 snapshot 给 sync 过去。在 sync 完成后，通知 Engine 重新检验合法性，此时 replica 正式可用，设置回 RW 模式，启动对新 replica 的心跳

这里在打完快照后，新 replica 的写入就全都在 head/live data 上了，写入是安全的。snapshot 的 sync 在后台异步进行，利用了 `diffDisk` 的特性和快照实现了在线 rebuild

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F4984c535-3b59-4ae9-b363-c56f764adf27%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140438Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3Dcc480f2e52a2e0736193ebd045be4d929af11bccb1bd845a8b3715d880bd23b2%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=aa4a4965-7412-479a-b045-9d4061d971fe&cache=v2&width=1400)



# File storage

Longhorn 提供的 CSI 不支持 Block PVC 的 RWX 挂载，因为块层无法感知更高层（文件系统）的写入模式和内容，多个 client 写入就会把挂载的文件系统元数据写坏。为了支持 RWX 的 PVC，Longhorn 额外通过 Share Manager 组件提供了文件存储。这里有意思的是，它不叫 Filesystem Manager 而是叫 Share Manager，可以看出是完全以 K8s 视角考虑的



当创建 RWX 的 volume （Longhorn 的 CR，非 PVC）时，Manager 中 volume controller 会创建对应的 share manager CR。share manager controller 再创建 share manager pod 并修改 volume 让其实际挂载在这个 share manager pod 的节点上

controller 检测到 pod 启动之后，就会给其发起 RPC 请求将 `/dev/longhorn/{vol_name}` 块设备格式化为指定文件系统挂载到 `/export/{vol_name}` 中

share manager 内运行了一个 nfs ganesha，作为 NFS server。最后 share manager 更新 nfs ganesha 配置，将 `/export/{vol_name}` 导出

share manager 和 volume 的 status 在 controller reconcile 中被更新，设置 NFS 连接信息，现在 CSI 就可以获取到 NFS 连接配置，完成最终的用户 Pod 挂载流程

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F634f0ba3-651c-4cb3-ade9-b46c64d446bb%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140438Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D7abb5e55326e684bba8d01deb3c7d8c8223868bc0026e79919e625ec64ba1a58%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=30cca0e4-3eeb-4644-83e6-a121dc1ec3a0&cache=v2&width=1400)



这里 NFS server 是一个单点的 gateway。为了故障恢复，Longhorn 修改 nfs ganesha 添加了一个新的 recovery backend 类型 longhorn，这个定制的 recovery backend 的作用是将 nfs ganesha 的内部状态信息存储到 K8s ConfigMap 中

当发生故障，新的 share manager pod 被创建出来后，nfs ganesha 就能从 ConfigMap 中恢复状态，nfs client 可以配置一定宽限期，此时再重试请求就能成功，恢复运行



实际上 NFS server 可以配置 active/active（多活）和 active/passive（主备） 模式。这样恢复速度能比等待重建快得多，可以做到高可用，但目前看起来在这套架构上并不好实现

首先这里 NFS server 本身就是跑在 iSCSI 块设备上的，无法处理多 client 写入，这就回到一开始的情况了，因此无法做到 active/active。而 Engine 则限制了必须和 Pod 在同一节点上，目前不支持存在一个备用的 Engine 连接同样的 Replica，自然也无法做到 active/passive



# V2 Engine

V2 Engine 使用了 SPDK，基本是复用了 SPDK 自带的功能，Go 只是调用来创建，不会再直接处理 I/O，性能应该能得到很大提高。V2 Engine 目前还是 preview feature，一些功能支持的不完善，例如扩容



在 V2 Engine 上，总体设计也类似于 V1 Engine，Engine 连接多个 Replica。Replica 就是一个 SPDK 的 lvol bdev（逻辑卷），还包括一个 NVMf Target 将 bdev 暴露出去。剩下的例如精简配置、快照等功能都是 SPDK 自身已经支持的，直接通过 JSON-RPC 调用即可

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Facdac30c-0f7c-4d5d-a678-43c4dfb4897b%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140439Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D94067505f71f09da229c213f8b9ba04d78e2aa6430948eeec32e01a88d5af391%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=44824160-de3d-43d5-a6c9-915fdffdaf24&cache=v2&width=1400)

Replica 已经暴露了 NVMf bdev，Engine 同样通过 SPDK 连接到每个 Replica 的 NVMf bdev，再组成 RAID1 bdev，这样又利用了 SPDK 直接实现了多副本，最后暴露出 NVMf Target 给 client 连接

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fdcf8bbf2-409a-4d6c-bff0-bf9dc67fdcc1%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140439Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3De3d8aa0773ed4c132f93da6321971e168680e6fb4915fe8d3c0f381709ef3e09%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=6e079fd5-54fa-4c0f-8fd9-9c090bea781e&cache=v2&width=1400)



由于并不插手 I/O 流程，这里的容错处理稍微被动些。健康检查不再是心跳，而是定期（3s）获取 replica 上的 SPDK bdev 列表，在这个过程中更新一些统计数据。当 bdev 不存在或信息不一致时，就会设置为 ERR mode 让其 rebuild

V2 Engine 中 rebuild 和 add replica 流程和 V1 Engine 大体类似：

1.  首先打快照，然后让新的 replica 直接通过 NVMf 连接源 replica 的 bdev，作为 external snapshot 创建新的 lvol bdev
2.  回到 V2 Engine，现在新 replica 的 lvol bdev 已经存在了，可以连接并添加到 RAID1 bdev 中。虽然这时也给新 replica 设置了 WO mode，但 Engine 已经不在 I/O 流程中了 管不着，SPDK 仍然可能从新的 bdev 中读，SPDK 能正确处理，但会有一定性能下降
3.  虽然新 replica 的 bdev 中已经有了完整数据（RAID1 bdev 会自动处理），但它上面并没有源 replica 上那些历史快照链，还需要一个恢复快照链的过程。这里会再创建一个新的 rebuilding lvol，使用 shallow copy 将源 replica 的快照一层层 copy 过去，每 copy 完一层就给 rebuilding lvol 打一次快照。这样从头给 rebuilding lvol 构建历史快照链
4.  最后再将第 1 步中的新 lvol 的 parent 从 external snapshot 改为 rebuilding lvol



V2 Engine 的模式让我想起了 Kafka，Kafka 虽然是 Java 实现，但实际上 Java 本身没有做太多 key path 上的数据处理，而是 offload 到 kernel 去做，避免了 Java 的性能劣势。从这个角度来说，Kafka 的数据面更像一个细粒度的对 kernel 的控制面。Longhorn 的 V2 Engine 也是如此，基本就是对 SPDK 的控制面



# Performance

看一下性能，benchmark 可以看到，V1 Engine 的性能比较差，也在预期之内。不过这里测试用的 SSD 比较一般，完全没发挥出 SPDK 的性能，但到了那种程度网络也是瓶颈了，Longhorn 目前还不支持 RDMA

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F79cf5471-dca4-4a90-a6ee-9ec25beb9771%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140439Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D6b5aa223ed0b58d200f9179cd9ae167cdb433ebdb7679c3f4d6381c87c3e19d5%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=7c840412-5919-4a47-bf3b-2417b4e8b9a8&cache=v2&width=1400)



![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F22ca52d1-17b5-4860-aa1b-4da95b25cc58%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140439Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D8970e8dff53d5c3bbdc25181556740cb0a959762e91f9209add1fcccc94e6a60%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=7c1c4ce9-4e19-43d7-86b5-6207c665bbf9&cache=v2&width=1400)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe9c48585-311b-4ce5-a5c7-3c73dabcbc57%2FUntitled.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466RWNBT6BG%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140439Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQCkNx2QqEl919cYIf47oqHWl8zOYWUSVvdg2ir1OfdKCAIgJFrAprCPEeFkoaXzYkGcNv2Lw%252F8vRRW8%252B%252B8z4jwMhzwqiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDNtzLjWB%252F2fw0%252BbzxCrcA9nuCve2F5fgloME4ZgeCSH%252BwpiqYGprH6qL1kshCRqSt%252B78mp0iNc6EGnLpx30bkNT7XPzXdSCS7%252FO2iCtxAKkEc%252BALVaX0mgElzUqeKs3l%252Fj4fegv66qAY9llEL6AkIQt172PJvn9fJFVMCBDysN4YkImNWNAAg63apjHMawtb5mdTjDxuSRq3KWvGgrJEJngtc9rlTmXC%252FwdqiuIiqpYIe7oQViQnPd47ZX%252BQkKjWj%252FIZ41aMhmuAjfQE2PoYNlV3YYx5Ojqw0J2xB6TXhBj9UbI6%252FE2te4m%252FeDZ5uqpJPL8mvg4QU%252BdHy%252FaJq7ksI0%252Buxyi4eI%252F3Y1seAhk2mG%252B1NabkSiJb8o0OnFG5ue6SngSaNq78tAZs3UPqRXVOeZSeukvrX9GsrD6Re0pq8qxXQK848VygbGhOFmbAATDf5ylVgkFRIUEyINfM1aI3Eth%252FQrLT%252FndHiZkBWueg5ivUCLFx6X7ifeD6xQsAo5JUZhX7yz%252BubWcuouu1oMqAzMn%252Bxd54BbLpK00KM1kOeKke89CY37My72qUf7KdcwAq%252Bu7u8CgPQmLwq1fBn0ZNR3MoCMh5bwHy4TEE75wKav547YAiBfZtgAoyPESu6ERO9hVOcrl6qrQEBVBgMK%252BpxNUGOqUBCr7MQrX2rw3wEnK3j2N5nZdCAb6eerh7igN4vWEIhyBYcmYmqKv%252BTjWNRw1uOA%252F1fakJ84H2vPHzOuiA4ZEskd3n2RTi7QiOQUF0d4YYUV5tqFYPmxg%252FtJXS7VA8fKJEVXRrjqW7gKNYJCM9fDPjkxt1W4QbcLamrvmblGMUfYhkxdMdUDaK900nma7wgIzQuIbLp9DlfQs5PQjMb0psXkRQYg5o%26X-Amz-Signature%3D1f118054c49c8cd20eab9b7d7bb5780340fd1dc827dcc8d025f1ba8ee828644c%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=0ecfb0ba-a047-4a58-ac81-55cb200e0303&cache=v2&width=1400)



# Summary

总的来说，Longhorn 架构简洁，基于简单朴素的想法构建，又很好地复用了已有的成熟组件，无论是基于 K8s 的控制面，还是 V1 Engine 中的 sparse file，tgtd，nfs ganesha，V2 Engine 的 SPDK，都是这种想法的体现。使用起来也很友好

缺点是一旦有舒适区内无法满足的需求，就会比较麻烦。例如现在已经修改了 tgtd 和 nfs ganesha，但这种零碎的修改又很难维护，特别是 SPDK 不是简单包装一下就可以产品化的，这在未来可能会是一个挑战。另外，存算融合也可能会导致负载互相影响，进一步降低性能，控制面的调度收敛速度估计也受限于 K8s，万卷规模时各种 CR 可能就数十万个了，而 etcd 还是单 Raft Group 的，瓶颈明显



后续可以考虑的优化点不少，首先存储层就不支持 chunk/block 之类的 partition，这直接限制了单个卷能提供的容量，而且没有细粒度的 partition，容错和调度都会不够灵活。现在 rebuild 都是全量的，不仅影响速度，在大卷时这样的流量对集群也有压力。最后是一些业务功能，例如 QoS 等比较刚需的还不支持

Longhorn 的性能、扩展性和容错可以说都是很差的，但却仍然有着不少的应用，这不禁让我想起同事说过的一句话：「大部分客户和场景根本不在乎性能，只关注成本、易用性和稳定性」

值得一提的是 Longhorn 的文档写的很不错，大部分 feature 都有详细提案文档和需求来源追溯，这点非常好，还是很适合作为入门学习的分布式存储项目





Ref：

-   [Longhorn | Architecture and Concepts](https://longhorn.io/docs/1.6.2/concepts/)
-   [Architecture Overview For Developers](https://github.com/longhorn/longhorn/wiki/Architecture-Overview-For-Developers)
-   [longhorn-engine 源码分析 - Peter Yang's Blog](https://peteryj.github.io/2020/10/11/longhorn-engine-code-analysis/)
-   [20221123-local-volume.md](https://github.com/longhorn/longhorn/blob/master/enhancements/20221123-local-volume.md)
-   [Longhorn 的正确使用姿势：如何处理增量 replica 与其中的 snapshot/backup](https://mp.weixin.qq.com/s/9eFYJ5OFRrShaKJezxV6Bg)
-   [Longhorn | ReadWriteMany (RWX) Volume](https://longhorn.io/docs/1.6.2/nodes-and-volumes/volumes/rwx-volumes/)
-   [20201220-rwx-volume-support.md](https://github.com/longhorn/longhorn/blob/master/enhancements/20201220-rwx-volume-support.md)
-   [20220727-dedicated-recovery-backend-for-rwx-volume-nfs-server.md](https://github.com/longhorn/longhorn/blob/d5e8a44104f5e03c310870b47da7c8ab55f671b3/enhancements/20220727-dedicated-recovery-backend-for-rwx-volume-nfs-server.md)
-   [20230619-spdk-engine.md](https://github.com/longhorn/longhorn/blob/master/enhancements/20230619-spdk-engine.md)
-   [SPDK: Logical Volumes](https://spdk.io/doc/logical_volumes.html)
-   [SPDK: NVMe over Fabrics Target](https://spdk.io/doc/nvmf.html)
-   [SPDK: Block Device User Guide](https://spdk.io/doc/bdev.html)
-   [v2 volume replica online rebuilding](https://github.com/longhorn/longhorn/issues/7199)
-   [20231030-spdk-raid-delta-copy.md](https://github.com/longhorn/longhorn/blob/b58a7a3849e12fa4674723c1ce0dfe708fd8423a/enhancements/20231030-spdk-raid-delta-copy.md)
-   [Longhorn | Performance](https://longhorn.io/docs/1.6.2/v2-data-engine/performance/)
