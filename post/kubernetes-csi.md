---
title: "Kubernetes CSI"
date: "2023-06-17"
tags:
  - "Cloud Native"
  - "Kubernetes"
canonical: "https://xxxuuu.me/post/kubernetes-csi"
---

## 基本概念

K8s 的存储插件用于对接容器平台和底层存储资源，例如挂载 Volume 时可以配置的 nfs 或 gitRepo 等；第三方平台，如 AWS、Google Cloud 也都会提供存储插件用于接入它们的存储服务

存储插件分为 In-Tree 和 Out-of-Tree 两类：

1.  In-Tree 的存储插件是包含在 K8s 内部的，因此构建、编译、交付都与 Kuberentes 本身绑定，前面的 nfs 和 gitRepo 都是 In-Tree 的插件
2.  Out-of-Tree 插件则是独立的，可以单独部署。Out-of-Tree 插件主要分为 FlexVolume 和 CSI（Container Storage Interface）两类方式，其中前者在 1.23 版本已经废弃

从 1.17 版本开始，K8s 开始测试 CSI Migration，用于将 In-Tree 内的存储插件迁移到 Out-of-Tree 的 CSI 上，并[在 1.25 中正式发布](https://kubernetes.io/blog/2022/09/26/storage-in-tree-to-csi-migration-status-update-1.25/)该功能

因此，存储插件的开发目前基本只剩下 CSI 一种选择，其不仅仅局限于 K8s，更是目前容器存储的工业标准



## CSI 架构 & 规范

CSI Driver 在 K8s 中的架构如下所示

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F9870eb1b-5de9-4225-93d4-65ec37e9d58f%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4666ZWN6NCJ%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIFqLkdR5T3ltecBFodn3ve9cVqzNLPBkga5rF41d5Jp4AiBwUWBuFhXwdxS%252FF6K%252Blupm4zKbFIAMbr6FAXGXDiKZzCqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMkSdYwDHIttfoPovTKtwDY1fk0ylvxuMiZGYTKDhCMSXy4XkyK83yg3bs32drGC41Iujm2f9eFHkpwE0SRVcPD4RCr8s6TbXv9HAusBfdX4LW8gvt3t8g4HWyK4yhAP317LVnrC5dBqSNrggNhExvYN%252BMusnoSWAcQM50ewg8sYzv1%252FyLCRXU4FVgmntUiycyoyTYOKjIopqEToy3TfKmCXCaGbWkZ1ofyhCty0yo4Dncy0grMSjFndhnv8toE0fbFITg4uXWLYPWa3wqZpZL9JUryrI5SfOWLbCy00q%252FN19QL6aFb3SAtShOCN2zTYhF8af9tmF%252FbppUjvijoyyCF1%252FHvWdUM966TKVlpPPRy%252BzXxdMPkb4mfoUQpzGeG%252FepyyuaRPuj4aWDakFPIypUQyVcmHWRaNCP3HRAW%252FMx3x0jfQ0TwQmR60GY3zKgVMF1IP7sduGVrIBcjaV%252BA%252BmniTvNvWfbES2TNnBDPHrC1m7BTPPEwwPrfApGJFef7oTSRAByUhrZyjs3WFBJy7FkC6X4ePWGFLtDZVExRrlrrvlTDC411uJNe9%252F5EeOaL%252BBNLN6Pd%252FICzEOFbkBe13%252FYMNxAEuI8PMEpf9JYmk%252BbXsuP0HDL19ZfwNHBRSFxiKU4zkztlD1yRmTwVwgw4quJ1QY6pgEwQbKurnEWqLVyYAHoqBswphTgmu3%252BWSRedyqSzr0TOc%252BvEyOqcnY%252BLV48R0iNEkRMZ3qyIT0G5B0Yq1ECfYZxArizY832mYU13RunCyRZpdTvLOLAKlw1oHD%252Bt63o%252FPvBfPi39%252BW0SM3LlfRrB0E0tBNkRBfp0pxHeWTLRtUWzLoXt2yRyghEql00BzWtWLIdHNm%252FcsnPdJWDc%252BfZ%252FYmwHdwdw7c0%26X-Amz-Signature%3Da9de446d105d7b64d2f3cf3d200f768f32a8e479ec542811b0a908d11344b0a1%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=bc79c47f-fd6d-4e33-bdc1-d1f333710019)

CSI Driver 会作为 Pod 运行在 K8s 中，通过监听资源（PVC、PV 等）事件触发对底层存储资源的操作，还有一些操作是 kubelet 通过 UDS（Unix Domain Socket）调用 CSI Driver 进行

监听资源变更这部分都是通用逻辑，实现重复度比较高，因此 Kubernetes Team 提供了一系列 Sidecar 来完成（上图粉色部分），以简化开发，同时解耦与 K8s API 的交互实现：[CSI Sidecar Containers](https://kubernetes-csi.github.io/docs/sidecar-containers.html)



那么我们要实现的 CSI Driver 最后可以分为三个 gRPC 服务（上图绿色部分）：

1.  Identity Service：用于暴露插件本身的信息和进行健康检查
2.  Controller Service：操作底层存储资源，对存储卷进行管理
3.  Node Service：执行和宿主机相关的操作，例如 mount 等



CSI 规范文档中有几个比较重要的点：

1.  首先，CSI 接口**必须保证幂等性**。虽然 K8s 保证在在给定时间内对每个卷「正在进行」的调用不超过一个，但当发生 failover 时，这个保证可能就会失效，导致诸如重复创建同一个卷的情况发生，因此 CSI 侧必须实现幂等性，以防止存储卷泄露
2.  规范返回值，CSI 的 gRPC 接口**必须返回标准错误码**，以便 K8s 正确响应，这部分在[标准文档](https://github.com/container-storage-interface/spec/blob/master/spec.md)的 Error Scheme 部分可以看到



最后部署时一般分为 Node Plugin 和 Controller Plugin 进行部署：

1.  前者需要实现 Identity Service 和 Node Service，以 DaemonSet 方式运行在每个节点上
2.  后者需要实现 Identity Service 和 Controller Service，可以在任何地方运行，通常是个 Deployment 或 StatefulSet



一个卷的生命周期如下所示

```plain
   CreateVolume +------------+ DeleteVolume
 +------------->|  CREATED   +--------------+
 |              +---+----^---+              |
 |       Controller |    | Controller       v
+++         Publish |    | Unpublish       +++
|X|          Volume |    | Volume          | |
+-+             +---v----+---+             +-+
                | NODE_READY |
                +---+----^---+
               Node |    | Node
              Stage |    | Unstage
             Volume |    | Volume
                +---v----+---+
                |  VOL_READY |
                +---+----^---+
               Node |    | Node
            Publish |    | Unpublish
             Volume |    | Volume
                +---v----+---+
                | PUBLISHED  |
                +------------+
```

例如，当创建一个使用 PVC 的 Pod 时：

1.  Volume Controller 监听到 PVC 创建，但其只负责 In-Tree 模式的管理，跳过执行
2.  Sidecar 监听到 PVC 创建，**调用 CSI Controller Service 的** `**CreateVolume**`，CSI Driver 这时会创建底层存储资源。之后卷处于 CREATED 状态，PV 被创建，并绑定到 PVC 上
3.  Volume Controller 创建 VolumeAttachment 资源，表示需要将 PV 挂载到宿主机上
4.  Sidecar 监听到 VolumeAttachment 创建，**调用 CSI Controller Service 的** `**ControllerPublishVolume**`。CSI Driver 这时一般会将底层存储资源与目标节点关联起来，之后卷处于 NODE\_READY 状态，对于 Node 可见
5.  kubelet 感知到卷的存在，执行 MountDevice 操作，**调用 CSI Node Service 的** `**NodeStageVolume**`。CSI Driver 此时会初始化卷，例如进行分区和格式化、创建文件系统等，之后卷处于 VOL\_READY 状态
6.  最后 kubelet 执行 Setup 操作，**调用 CSI Node Service 的** `**NodePublishVolume**`。CSI Driver 将卷挂载到容器（kubelet 指定的 Volume 目录）内，卷进入 PUBLISHED 状态，可以正常使用



## 部署

前面提到，CSI Driver 是以 Pod 运行在 K8s 内的，因此本质上就是拉 Pod 运行即可。但 CSI 部署时也分为 Controller Plugin 和 Node Plugin，且可能涉及相关存储底层配置，要升级时也比较麻烦。因此一般会通过 Helm 进行部署：

[Chart Development Guide](https://helm.sh/zh/docs/topics/charts/)



## 测试

kubernetes-csi/csi-test 仓库下提供了一些测试工具

[kubernetes-csi/csi-test: CSI test frameworks](https://github.com/kubernetes-csi/csi-test)



首先 csi-test 里的 `pkg/sanity` 包可以帮助进行单元测试，其还提供了一个 CLI 程序 csi-sanity 可以用于检测 API 是否符合规范，但其没法很好的进行 API 和 E2E（End-to-End，端到端） 测试



API 测试要手动进行也是可以的，CSI Driver 只是提供几个 gRPC 接口，所以接口测试时使用 grpcurl 等 gRPC 调试工具即可，但 csc（Container Storage Client）等工具也提供了更便利的包装：

-   [gocsi/csc at master · rexray/gocsi](https://github.com/rexray/gocsi/tree/master/csc)
-   [cloud-provider-openstack/docs/cinder-csi-plugin/csc-tool.md at master · kubernetes/cloud-provider-openstack](https://github.com/kubernetes/cloud-provider-openstack/blob/master/docs/cinder-csi-plugin/csc-tool.md#list-volumes)



E2E 测试可以通过 kubectl 手动进行，官方也提供了一些套件用于进行自动化的 E2E 测试：

[kubernetes/test/e2e/storage/external at master · kubernetes/kubernetes](https://github.com/kubernetes/kubernetes/tree/master/test/e2e/storage/external)

E2E 测试这部分，之后有空打算单独写一篇文章讲一下



## 相关资料

-   [Kubernetes CSI Developer Documentation](https://kubernetes-csi.github.io/docs/introduction.html)
-   [Container Storage Interface Proposal](https://github.com/kubernetes/design-proposals-archive/blob/main/storage/container-storage-interface.md)
-   [Container Storage Interface Specification](https://github.com/container-storage-interface/spec/blob/master/spec.md)
-   [基于 CSI 的 Kubernetes 存储插件开发实践 ｜ QingCloud](https://zhuanlan.zhihu.com/p/51757577)
-   [CSI 驱动开发指南 ｜云原生社区（中国）](https://cloudnative.to/blog/develop-a-csi-driver/)
