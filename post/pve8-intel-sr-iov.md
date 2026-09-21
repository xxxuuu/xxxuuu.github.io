---
title: "PVE8 上启用 12 代 Intel CPU 核显 SR-IOV"
description: "拯救我的 Galgame 和追番体验～"
date: "2023-08-06"
tags:
  - "折腾"
  - "PVE"
canonical: "https://xxxuuu.me/post/pve8-intel-sr-iov"
---

## 背景

前段时间买了台 MiniPC 装 PVE 作为 Homelab，打算作为媒体服务器 + NAS + 学习使用 ~（虽然最后主要是用来装 Windows 虚拟机玩 Galgame）~

机子的 U 是 12 代的 i3-N305，买的时候 PVE8 还没发布，装的是 PVE7，5.x 的内核，对 12 代 U 还没有很完善的支持，核显无法使用。这就导致在 Jellyfin 看番只能软解，以及玩 Galgame 时压力都在 CPU 上，全程 CPU 100%，体验说不上好

最近发现 PVE8 发布了，升级到了 6.2 的内核，于是赶紧折腾一下。升级过程网上很多文章，这里略，无非就是配置下镜像源然后 `apt update & apt dist-upgrade`



## 开启核显 SR-IOV

SR-IOV 是一种硬件虚拟化技术，简单来说，能将物理 PCIe 设备虚拟成多个虚拟设备，在网卡上被广泛使用。Intel Core CPU 在 11 代后支持了该技术用于 GPU 虚拟化，替换了过去的 GVT-g（[Intel 产品 GPU 虚拟化技术列表](https://www.intel.cn/content/www/cn/zh/support/articles/000093216/graphics.html)）



开启 SR-IOV 主要用到这个驱动程序：[i915-sriov-dkms](https://github.com/strongtz/i915-sriov-dkms)，能够创建最多 7 个 VF（可以简单理解为 vGPU）

按着文档里「PVE Host Installation Steps (Tested Kernel 6.1 and 6.2)」这步做即可。在 `update-grub` 和 `update-initramfs -u` 后多执行一句 `pve-efiboot-tool refresh`

但我这里遇到一个问题，重启后查看 `dmesg | grep i915` 有这样两条日志

```plain
i915: unknown parameter 'max_vfs' ignored
....
i915 0000:00:02.0: driver does not support SR-IOV configuration via sysfs
```

看了[这个 issue](https://github.com/strongtz/i915-sriov-dkms/issues/53) 后，尝试重装。删除了原来的 dkms 模块，修改 `dkms.conf` 里的 `PACKAGE_NAME` 为 6.2（和内核版本匹配），然后 install 时加上 `--force` 重新走遍安装流程

这回正常了，上面两条日志没有了，也显示成功启用 VF，`lspci | grep VGA` 能看到多出来 7 个 GPU 设备，可以将其挂载到 LXC 或虚拟机中（00.02.0 那个物理 GPU / PF 不应该被使用）

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fef8f7700-94bc-4e65-9461-9aa83c017b85%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YZ2EFPGF%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140442Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDIrZVcj7CXcWAMjP7RzjnT3obaWbCZ0%252BcCZKvRyHo44wIhAIYle8ojpyqiG6HjhkJO72ZMYiEZvNfWOftn6j%252F44iWcKogECIz%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwoE56JnVf0ir%252FOydkq3ANJ02wscRCllA%252BRFZxyzs8NuhF1bGWhpV2clf2gvSAYoC4vCQ84ceKzaAEZEaZR9Stuf3lC6LA0lcqORyYZJzJ4n0DkUZxL7W9td12Mm7iRKUqWXAHC%252FShJxzdtmgQ4aZohuLWlNxsE4M5RsvFLplFPBD5GYkkna9KBdsuiuxIvn%252BpcTN1hPB8jxJofFC9gCjQMPHIEehybokTW9ZyHR2GN7SHBgh0j%252BXXxNU06BaEMaddRZs81hAxKkwFFlWU7flc0ykcD1y3PiGaMSBBAPHGv0h8BCactADNKg%252FIfRjK1XDfRlri2p%252BF3LD0XYBfWKK%252BW7UjmiO6uTg4Q1DVZgPfZzcIhLukeI3EuV87eZyYO03LTfcRgQ89Z9xAZqNA1RATDlOQUMvuGZ2DYKY%252FqaCeNuZ%252FNwdX4awjZNU5WSftkPujWBjdJLXOc8M4Ghq9tofMvDkLHz3HOKXhpb9x%252FgnuCtezP6gedE5bAKW982qGljLPSMkrThwTfEY%252Bg1dCJbBqyhnqTL2zpYpCaGCqVxV4FeqUSOEPrcesU1yGMN%252BEefFKWpols8haP%252Ft2hwernpCVl%252FgGabvBq2VdvwOkB7JeYphGmTn8UzZCbN5mts68nodvK6W6LSXGJUwawEzDlpsTVBjqkAXso6pVIXPx%252F%252FbIcc3qiXTMPpfh3slR%252BFwkLz0jgGO7M%252By3xpWHbQN7ZbdqXALNLvWxGesgG3QNZDTxf8KtNByBbrkRXyiN6hcbdbSWxAPLbVEUiELdK1Pcnn3jTvKaBEQU267gG2x8tSaRwu4H41m%252B1KmYMR5CZ%252Bq%252BnjjDkKO7n4rQ%252BBmUzA3JjhZRbjphhvt4C5XQJAKc3f%252FUUJmoHz71hLx5R%26X-Amz-Signature%3D05db710b82579f25819baaf12d3dac0e49cd8b24294a7077ef9aca0317f31dba%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=222e432e-f4b3-4def-aefc-4853949c86e2&cache=v2&width=1400)



## Windows 虚拟机挂载

Windows 虚拟机要先配置好远程桌面，能连的上。虚拟机配置里「显示」选「无」（选「无」后就无法 VNC 连接了，所以要先配好远程桌面）

添加 PCI 设备，选择 vGPU，勾上主 GPU

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc2111f8c-f7f2-44ec-a8d6-24986d00dc11%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YZ2EFPGF%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140442Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDIrZVcj7CXcWAMjP7RzjnT3obaWbCZ0%252BcCZKvRyHo44wIhAIYle8ojpyqiG6HjhkJO72ZMYiEZvNfWOftn6j%252F44iWcKogECIz%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwoE56JnVf0ir%252FOydkq3ANJ02wscRCllA%252BRFZxyzs8NuhF1bGWhpV2clf2gvSAYoC4vCQ84ceKzaAEZEaZR9Stuf3lC6LA0lcqORyYZJzJ4n0DkUZxL7W9td12Mm7iRKUqWXAHC%252FShJxzdtmgQ4aZohuLWlNxsE4M5RsvFLplFPBD5GYkkna9KBdsuiuxIvn%252BpcTN1hPB8jxJofFC9gCjQMPHIEehybokTW9ZyHR2GN7SHBgh0j%252BXXxNU06BaEMaddRZs81hAxKkwFFlWU7flc0ykcD1y3PiGaMSBBAPHGv0h8BCactADNKg%252FIfRjK1XDfRlri2p%252BF3LD0XYBfWKK%252BW7UjmiO6uTg4Q1DVZgPfZzcIhLukeI3EuV87eZyYO03LTfcRgQ89Z9xAZqNA1RATDlOQUMvuGZ2DYKY%252FqaCeNuZ%252FNwdX4awjZNU5WSftkPujWBjdJLXOc8M4Ghq9tofMvDkLHz3HOKXhpb9x%252FgnuCtezP6gedE5bAKW982qGljLPSMkrThwTfEY%252Bg1dCJbBqyhnqTL2zpYpCaGCqVxV4FeqUSOEPrcesU1yGMN%252BEefFKWpols8haP%252Ft2hwernpCVl%252FgGabvBq2VdvwOkB7JeYphGmTn8UzZCbN5mts68nodvK6W6LSXGJUwawEzDlpsTVBjqkAXso6pVIXPx%252F%252FbIcc3qiXTMPpfh3slR%252BFwkLz0jgGO7M%252By3xpWHbQN7ZbdqXALNLvWxGesgG3QNZDTxf8KtNByBbrkRXyiN6hcbdbSWxAPLbVEUiELdK1Pcnn3jTvKaBEQU267gG2x8tSaRwu4H41m%252B1KmYMR5CZ%252Bq%252BnjjDkKO7n4rQ%252BBmUzA3JjhZRbjphhvt4C5XQJAKc3f%252FUUJmoHz71hLx5R%26X-Amz-Signature%3D1c5f51f22e3bcb0beb4745267171d684a6af701291559488aba3eef94f95f794%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=05d3d35b-fdf8-4000-aa33-ba760fe27dbf&cache=v2&width=1400)

进入 Windows [安装驱动](https://www.intel.cn/content/www/cn/zh/support/intel-driver-support-assistant.html)，Bingo

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fb0cbf85d-dd3b-459e-9453-341b2ad1468c%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YZ2EFPGF%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140442Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDIrZVcj7CXcWAMjP7RzjnT3obaWbCZ0%252BcCZKvRyHo44wIhAIYle8ojpyqiG6HjhkJO72ZMYiEZvNfWOftn6j%252F44iWcKogECIz%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwoE56JnVf0ir%252FOydkq3ANJ02wscRCllA%252BRFZxyzs8NuhF1bGWhpV2clf2gvSAYoC4vCQ84ceKzaAEZEaZR9Stuf3lC6LA0lcqORyYZJzJ4n0DkUZxL7W9td12Mm7iRKUqWXAHC%252FShJxzdtmgQ4aZohuLWlNxsE4M5RsvFLplFPBD5GYkkna9KBdsuiuxIvn%252BpcTN1hPB8jxJofFC9gCjQMPHIEehybokTW9ZyHR2GN7SHBgh0j%252BXXxNU06BaEMaddRZs81hAxKkwFFlWU7flc0ykcD1y3PiGaMSBBAPHGv0h8BCactADNKg%252FIfRjK1XDfRlri2p%252BF3LD0XYBfWKK%252BW7UjmiO6uTg4Q1DVZgPfZzcIhLukeI3EuV87eZyYO03LTfcRgQ89Z9xAZqNA1RATDlOQUMvuGZ2DYKY%252FqaCeNuZ%252FNwdX4awjZNU5WSftkPujWBjdJLXOc8M4Ghq9tofMvDkLHz3HOKXhpb9x%252FgnuCtezP6gedE5bAKW982qGljLPSMkrThwTfEY%252Bg1dCJbBqyhnqTL2zpYpCaGCqVxV4FeqUSOEPrcesU1yGMN%252BEefFKWpols8haP%252Ft2hwernpCVl%252FgGabvBq2VdvwOkB7JeYphGmTn8UzZCbN5mts68nodvK6W6LSXGJUwawEzDlpsTVBjqkAXso6pVIXPx%252F%252FbIcc3qiXTMPpfh3slR%252BFwkLz0jgGO7M%252By3xpWHbQN7ZbdqXALNLvWxGesgG3QNZDTxf8KtNByBbrkRXyiN6hcbdbSWxAPLbVEUiELdK1Pcnn3jTvKaBEQU267gG2x8tSaRwu4H41m%252B1KmYMR5CZ%252Bq%252BnjjDkKO7n4rQ%252BBmUzA3JjhZRbjphhvt4C5XQJAKc3f%252FUUJmoHz71hLx5R%26X-Amz-Signature%3D409e7cdd82e0967510e710838432277589992b8ac166a49fce4580f98e95cd84%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=df182d37-8bf3-43ae-a97c-c276aee8f9bd&cache=v2&width=1400)



## LXC 容器挂载

新建 LXC 容器要选择「嵌套」+「特权」（去掉无特权容器的 ✅）

挂载设备到 LXC 容器里，在 PVE 里找下对应设备驱动，选一个未使用的 vGPU 记下第 5 、 6 列的 video id 和 render id（不要选了 0 的物理 GPU / PF），我这里选择 card2 和 renderD130

```plain
total 0
drwxr-xr-x 2 root root        320 Aug  6 00:38 by-path
crw-rw---- 1 root video  226,   0 Aug  6 00:30 card0
crw-rw---- 1 root video  226,   2 Aug  6 00:30 card2
crw-rw---- 1 root video  226,   3 Aug  6 00:30 card3
crw-rw---- 1 root video  226,   4 Aug  6 00:30 card4
crw-rw---- 1 root video  226,   5 Aug  6 00:30 card5
crw-rw---- 1 root video  226,   6 Aug  6 00:30 card6
crw-rw---- 1 root video  226,   7 Aug  6 00:30 card7
crw-rw---- 1 root render 226, 128 Aug  6 00:30 renderD128
crw-rw---- 1 root render 226, 130 Aug  6 00:30 renderD130
crw-rw---- 1 root render 226, 131 Aug  6 00:30 renderD131
crw-rw---- 1 root render 226, 132 Aug  6 00:30 renderD132
crw-rw---- 1 root render 226, 133 Aug  6 00:30 renderD133
crw-rw---- 1 root render 226, 134 Aug  6 00:30 renderD134
crw-rw---- 1 root render 226, 135 Aug  6 00:30 renderD135
```

关闭 LXC 容器，然后修改对应 LXC 容器配置文件

```bash
$ vim /etc/pve/lxc/<LXC_ID>.conf
```

添加以下内容把设备挂载到 LXC 内（分别填入 video id 和 render id，以及映射对应 card 和 render）

```plain
lxc.cgroup2.devices.allow: c 226:2 rwm
lxc.cgroup2.devices.allow: c 226:130 rwm
lxc.mount.entry: /dev/dri/card2 dev/dri/card0 none bind,optional,create=file
lxc.mount.entry: /dev/dri/renderD130 dev/dri/renderD128 none bind,optional,create=file
```

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F979bcf6a-86df-4926-8e08-00e6d10155df%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YZ2EFPGF%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140442Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDIrZVcj7CXcWAMjP7RzjnT3obaWbCZ0%252BcCZKvRyHo44wIhAIYle8ojpyqiG6HjhkJO72ZMYiEZvNfWOftn6j%252F44iWcKogECIz%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwoE56JnVf0ir%252FOydkq3ANJ02wscRCllA%252BRFZxyzs8NuhF1bGWhpV2clf2gvSAYoC4vCQ84ceKzaAEZEaZR9Stuf3lC6LA0lcqORyYZJzJ4n0DkUZxL7W9td12Mm7iRKUqWXAHC%252FShJxzdtmgQ4aZohuLWlNxsE4M5RsvFLplFPBD5GYkkna9KBdsuiuxIvn%252BpcTN1hPB8jxJofFC9gCjQMPHIEehybokTW9ZyHR2GN7SHBgh0j%252BXXxNU06BaEMaddRZs81hAxKkwFFlWU7flc0ykcD1y3PiGaMSBBAPHGv0h8BCactADNKg%252FIfRjK1XDfRlri2p%252BF3LD0XYBfWKK%252BW7UjmiO6uTg4Q1DVZgPfZzcIhLukeI3EuV87eZyYO03LTfcRgQ89Z9xAZqNA1RATDlOQUMvuGZ2DYKY%252FqaCeNuZ%252FNwdX4awjZNU5WSftkPujWBjdJLXOc8M4Ghq9tofMvDkLHz3HOKXhpb9x%252FgnuCtezP6gedE5bAKW982qGljLPSMkrThwTfEY%252Bg1dCJbBqyhnqTL2zpYpCaGCqVxV4FeqUSOEPrcesU1yGMN%252BEefFKWpols8haP%252Ft2hwernpCVl%252FgGabvBq2VdvwOkB7JeYphGmTn8UzZCbN5mts68nodvK6W6LSXGJUwawEzDlpsTVBjqkAXso6pVIXPx%252F%252FbIcc3qiXTMPpfh3slR%252BFwkLz0jgGO7M%252By3xpWHbQN7ZbdqXALNLvWxGesgG3QNZDTxf8KtNByBbrkRXyiN6hcbdbSWxAPLbVEUiELdK1Pcnn3jTvKaBEQU267gG2x8tSaRwu4H41m%252B1KmYMR5CZ%252Bq%252BnjjDkKO7n4rQ%252BBmUzA3JjhZRbjphhvt4C5XQJAKc3f%252FUUJmoHz71hLx5R%26X-Amz-Signature%3D51999bb3c3eb45a8e21c7adc19f2eb2496832e5d2cb8c3633a53df7fb01a451c%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=e5316e98-dd72-4a9e-aead-b26ff4fe384f&cache=v2&width=1400)



进入 LXC 容器安装驱动

```bash
$ apt update && apt install intel-media-va-driver-non-free vainfo
```

如果 LXC 内也使用了容器，例如我在 LXC 内装了 Docker 部署 Jellyfin，则容器内也要有驱动，并把设备挂载进去

```bash
$ docker run ... \
    ... \
    --device /dev/dri:/dev/dri \
    ...
```



然后 Jellyfin 容器内就可以找到对应设备，启用硬件加速即可

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fce80eb44-ab6d-4a2f-9c67-ea783ce5b77d%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466YZ2EFPGF%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140442Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQDIrZVcj7CXcWAMjP7RzjnT3obaWbCZ0%252BcCZKvRyHo44wIhAIYle8ojpyqiG6HjhkJO72ZMYiEZvNfWOftn6j%252F44iWcKogECIz%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgwoE56JnVf0ir%252FOydkq3ANJ02wscRCllA%252BRFZxyzs8NuhF1bGWhpV2clf2gvSAYoC4vCQ84ceKzaAEZEaZR9Stuf3lC6LA0lcqORyYZJzJ4n0DkUZxL7W9td12Mm7iRKUqWXAHC%252FShJxzdtmgQ4aZohuLWlNxsE4M5RsvFLplFPBD5GYkkna9KBdsuiuxIvn%252BpcTN1hPB8jxJofFC9gCjQMPHIEehybokTW9ZyHR2GN7SHBgh0j%252BXXxNU06BaEMaddRZs81hAxKkwFFlWU7flc0ykcD1y3PiGaMSBBAPHGv0h8BCactADNKg%252FIfRjK1XDfRlri2p%252BF3LD0XYBfWKK%252BW7UjmiO6uTg4Q1DVZgPfZzcIhLukeI3EuV87eZyYO03LTfcRgQ89Z9xAZqNA1RATDlOQUMvuGZ2DYKY%252FqaCeNuZ%252FNwdX4awjZNU5WSftkPujWBjdJLXOc8M4Ghq9tofMvDkLHz3HOKXhpb9x%252FgnuCtezP6gedE5bAKW982qGljLPSMkrThwTfEY%252Bg1dCJbBqyhnqTL2zpYpCaGCqVxV4FeqUSOEPrcesU1yGMN%252BEefFKWpols8haP%252Ft2hwernpCVl%252FgGabvBq2VdvwOkB7JeYphGmTn8UzZCbN5mts68nodvK6W6LSXGJUwawEzDlpsTVBjqkAXso6pVIXPx%252F%252FbIcc3qiXTMPpfh3slR%252BFwkLz0jgGO7M%252By3xpWHbQN7ZbdqXALNLvWxGesgG3QNZDTxf8KtNByBbrkRXyiN6hcbdbSWxAPLbVEUiELdK1Pcnn3jTvKaBEQU267gG2x8tSaRwu4H41m%252B1KmYMR5CZ%252Bq%252BnjjDkKO7n4rQ%252BBmUzA3JjhZRbjphhvt4C5XQJAKc3f%252FUUJmoHz71hLx5R%26X-Amz-Signature%3D35d48b3c9ef9518f40ad020f495908d4ba3f0cb2ae9ba55e43d047e0c9a80e0b%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=b62e5235-a437-4f54-875f-20e563dbc664&cache=v2&width=1400)



## 总结

核心就两步：

1.  在 host（PVE）上安装驱动模块，开启 SR-IOV
2.  配置虚拟机 or LXC 挂载 vGPU，并在里面安装驱动



有了 GPU 后体验好了很多，无论是 Windows 玩 Galgame 还是 Jellyfin 追番硬解，CPU 压力基本不超 5%，十分流畅，释放了本就不强的 CPU 算力。而且相比独占的直通物理 GPU，SR-IOV 虚拟出来的多个 vGPU 能分给多台虚拟机使用，打造完美 Homelab



## 更新

2024/09/25 更新

我将 PVE 版本升级到了 8.2.7，内核版本为 6.8.12。升级后因为内核版本变更，原来的修改就会失效，这里更新一下如何处理



首先需要卸载掉旧的模块

```bash
$ dkms status
i915-sriov-dkms/6.2, 6.2.16-6-pve, x86_64: installed

$ dkms remove i915-sriov-dkms/6.2 --all
Module i915-sriov-dkms-6.2 for kernel 6.2.16-6-pve (x86_64).
Before uninstall, this module version was ACTIVE on this kernel.

i915.ko:
 - Uninstallation
   - Deleting from: /lib/modules/6.2.16-6-pve/updates/dkms/
 - Original module
   - No original module was found for this module on this kernel.
   - Use the dkms install command to reinstall any previous module version.
depmod...
Deleting module i915-sriov-dkms-6.2 completely from the DKMS tree.
```

然后重新走一遍[仓库](https://github.com/strongtz/i915-sriov-dkms)中安装驱动流程，这里同样按照对应内核版本的指南（PVE Host Installation Steps (Tested Kernel 6.5 and 6.8)）操作即可

操作的时候注意替换相关命令为自己的内核版本，免得出现问题。例如 `apt install proxmox-headers-6.8.8-2-pve proxmox-kernel-6.8.8-2-pve` 我这里改成 `apt install proxmox-headers-6.8.12-2-pve proxmox-kernel-6.8.12-2-pve`

之前已经修改过 GRUB 等配置，因此重新安装完驱动（`dkms install ...`）后就可以直接重启系统生效，LXC 和 VM 也不必重新配置
