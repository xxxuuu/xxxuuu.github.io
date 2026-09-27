---
title: "PVE 迁移翻车自救"
date: "2024-10-13"
tags:
  - "折腾"
  - "PVE"
canonical: "https://xxxuuu.me/post/pve-migration-rescue"
---

这两天刚购入了一台天钡 wrtpro 作为新 Homelab 和 NAS。到手后也安装了 PVE，打算组一个 PVE Cluster，将部分业务迁移到新机器上



但 PVE 这个 Cluster 功能非常不产品化，如果当前有任何 LXC 或 VM 正在运行，就不能加入进 Cluster 中

官方论坛给出了一个方案，可以临时移走 `/etc/pve/lxc` 和 `/etc/pve/qemu-server` 下的配置文件，这样 PVE 就认为当前节点上不存在 LXC 和 VM 了，待加入 Cluster 后再恢复配置文件：

-   [https://forum.proxmox.com/threads/cluster-join-failed-this-host-already-contains-virtual-guests.55965/](https://forum.proxmox.com/threads/cluster-join-failed-this-host-already-contains-virtual-guests.55965/)



于是我就将配置文件都 rename 了一下，成功加入了 Cluster。而在 rename 回来的时候发现！！！配置文件所在的目录都被清空了！！！

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F8b4119ea-411b-4ba0-b99c-316594699454%2Fimage.png?table=block&id=11d88756-3979-8059-85a3-da3005fb060a&cache=v2&width=1400)



两眼一黑，所有 LXC 和 VM 都丢了，真正 all in bomb。但冷静下来后看了下，还好虚拟磁盘都在，应该还能从这里恢复数据

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F69f9e5d7-8a1c-43f4-a164-d51513f6f376%2Fb436ab88-ef8c-40bb-b7b6-6dddd9f388db.png?table=block&id=11d88756-3979-80b0-be8a-c47535b1e8c4&cache=v2&width=1400)



丢失的 LXC 和 VM 配置已经找不回来，只能凭着记忆重写一份。或者创建新的再指定磁盘：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F5fe823a2-2b41-4cd5-b5ae-4dd56e50072b%2Fimage.png?table=block&id=11e88756-3979-80e2-9f76-e5d2fe161c48&cache=v2&width=1400)

有了配置文件后，LXC 也都显示在了界面上，逐个启动确认正常或再次调整配置

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F2c3f56ed-831b-4034-b57a-43cae187c509%2Fimage.png?table=block&id=11e88756-3979-803b-8e7e-f994c7bac5f4&cache=v2&width=384)

现在 Cluster 已经有了，就可以直接在节点之间一键迁移 LXC 和 VM。不过这个 Cluster 比较弱智的另一点是，要求两端的存储在「名字」上是一样的，而不是提供目标节点存储选项，所以不一样的话还得先迁移一下磁盘所在的存储或想办法改个名

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe397af75-d684-4ee2-9c54-348a35a4ec18%2Fimage.png?table=block&id=11e88756-3979-8070-a6d9-db93445bc299&cache=v2&width=336)

然后就可以直接迁移到另一个节点上

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F7653fd5f-fde6-4cb8-b80e-0f298bd3660a%2Fimage.png?table=block&id=11e88756-3979-80e2-be42-e5187c90d119&cache=v2&width=528)

等待所有 LXC 和 VM 都迁移完成后，再次检查业务是否正常

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F4e878163-5a96-4b3e-b3d3-bbfaa359ca33%2Fimage.png?table=block&id=11e88756-3979-803a-af96-f8f5f6113e2b&cache=v2&width=1400)



总结一下，只要磁盘还在，数据就还能保住，只要恢复 LXC 和 VM 本身的配置文件即可，或者直接重新创建新的 LXC 和 VM，将磁盘挂载进去也行

从这件事也可以看出，PVE 在一些企业级一点的功能上还远不够产品化，自己操作上也不够谨慎，应该考虑其它的备份目录和方式



PS：最后，PVE 这个 Cluster 设计是没有 master 节点的，看起来只是单纯的 quorum 操作完成同步（查了下是基于 corosync 实现的），每个节点的所有 LXC 和 VM 配置都会通过 pmxcfs 同步到其他节点上，所以这也可能是加入集群后文件被清空的原因（配置文件夹在初次同步后被覆盖了）

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F8cbba38d-ab4a-46c3-ae8f-cba00ed81f4c%2Fimage.png?table=block&id=11e88756-3979-807d-8229-e210e145b0cb&cache=v2&width=1400)
