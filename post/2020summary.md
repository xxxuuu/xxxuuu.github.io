---
title: "蒟蒻的 2020 年度总结"
description: "转眼三年已经过去，我也迎来了毕业"
date: "2021-01-10"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F1dc80ee3-5c1d-4af8-a284-d7896174816a%2Ficpc%25E5%258D%2597%25E4%25BA%25AC.png?table=block&id=37c4cfd9-62a3-41bb-9989-f9df38c45d04"
tags:
  - "碎碎念"
canonical: "https://xxxuuu.me/post/2020summary"
---

## 0x00 算法&竞赛

虽然去年说不打 ACM 了，但上半年的时候在胡神的洗脑+区域赛牌子诱惑下，还是又回来继续~训练~划水准备冲区域赛牌子了，今年由于疫情，区域赛也基本都改成了线上举办。虽然少了点味道，但对我们来说也方便了些，毕竟不用再操心路费之类的问题



前两场打的是 CCPC 威海和 ICPC 上海，具体就不说了，我自闭五小时，全程基本 0 贡献，在题目翻译上还背了点锅。原本的铜牌目标也没达到，还以为我的 ACM 生涯会就此铁牌收场。没想到 ICPC 南京给我了个大大的惊喜，一开始我们手速够快过掉了三题，我也想出了第四道数学签到题。最后四题收场感觉铜牌稳了，结果罚时少居然拿了个银尾，远超出预期，也算退役无憾了

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F626b6a30-2353-4a88-961a-3fa2bb8c28df%2Fimage.png?table=block&id=78c83331-d198-4873-9a27-af1b83b084d1&cache=v2&width=1400)

而且这个银牌也是 ICPC 里带专第一个拿到的银牌，还记得大一开学前胡神忽悠我打 ACM 时，我就说希望能创造历史，现在看来也算是创造了历史吧。



PS：今年的总结这么晚发主要就是为了等南航那边发正式的获奖证书下来，结果它们一直咕咕咕，估计开学前都不会发了，所以就只能等后面发了再贴上来了

2021-02-22：证书终于发下来啦

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F956baae2-726a-4e0d-b6b3-35aec8cf1282%2Fimage.png?table=block&id=75e74ddb-d425-4622-aaed-27ef61f714ce&cache=v2&width=1400)

今年还参加了些别的比赛，蓝桥天梯技能大赛之类的，不过在 ACM 面前就没啥好提的了

之后计划插完本后挑战一些更工程向的竞赛，比如阿里云的云&中间件大赛之类的，不过也得等把操作系统和分布式计算学完后再说了

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F75917316-a32b-4c12-9b9d-10a4f0995ad6%2Fimage.png?table=block&id=7f1e2eee-4186-45fc-9f3f-a04250e1a99d&cache=v2&width=1400)



## 0x01 技术与工程

记得去年的时候说尝试构建自己的开发工作流，现在也算初步成型了，包括一套 DevOps、质量控制、运维的体系。这些「软件工程」的掌控力和一些架构设计的算不上经验的经验之谈基本就是今年最主要的进步了，hold 住一个小技术团队也完全没问题了



很早之前就想写个 OJ，但一直给我咕咕咕，前两个月趁着课程设计写了下，核心工作其实就在评测机这里，我实现的比较简单，就是 C++ 写了一个 sandbox 通过 fork 子进程 + setrlimit 限制资源来跑评测，再把这个 sandbox 丢在 Docker 里跑，虽然每次评测创建和销毁容器都会多一些时间开销，不过用 Docker 就能少做很多环境和安全的工作。这个 OJ 等有空再完善下应该就会开源出来（咕咕咕警告⚠️）

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe395ed45-2344-44f9-9291-dff6187e70f0%2Fimage.png?table=block&id=92e80cbb-ac01-42c2-a7f5-7d7143aeb15f&cache=v2&width=1400)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F0a74ce14-911f-407b-b329-dc5b0ba6f7f9%2Fimage.png?table=block&id=66af5c83-053a-430d-99d5-b12d9546ef15&cache=v2&width=1400)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fdc954763-dea6-436c-8256-cf62dca3130f%2Fimage.png?table=block&id=51b3f809-4484-41cb-ad64-e81b86b5251e&cache=v2&width=1400)

大一开学前 ~（怎么我大一开学前戏这么多）~ 还想着毕业后能拿 7-8k 就不错了，现在觉得 13k 以下勿扰。不过感觉离大厂还是有些差距，这也是插本的原因之一吧，给自己两年时间打磨一下，专心学习。到那个时候再去大厂应该问题不大了。我也说过想去大厂是因为想解决更复杂的问题，而不只是拿更高的薪水（但能给应届生 3、40w 的年薪还是很有诱惑力的



## 0x02 理论基础

之前说希望能写自己的操作系统和编译器，不过因为种种原因进展一直比想象中要慢。所以就刚好趁着毕业设计来推进下



具体的话打算设计一门简单的编程语言，因为之前学习了函数范式，很感兴趣；所以这门语言应该还是要支持函数式编程的。名字已经想好了，就叫鸟语 Birdlang（逃

然后去实现这门语言的编译器前端，因为操作系统这块学习还不够深入，后端实现上可能会有困难。考虑到事关毕业所以只有前端了（太菜了我）。后端就直接基于 JVM，为什么不是 LLVM？因为 JVM 最熟悉。不过 JVM 毕竟还是以 OOP 设计的，实现函数式语言的话可能会在语法制导翻译和字节码生成这里遇到一些挑战（JVM+FP，有 Scala 内味了



去年立的毕业前写 OS 的 flag 看来是难以完成了，等插完本后有时间了就要马上把欠的 MIT6.828 和 6.824 补回来❗️❗️❗️



## 0x03 插本

今年华师也允许软件报考了，一直很纠结要不要报华师，但觉得华师课程比较满、而且都是师范课，对我这种比较自闭的人很不友好，好处就是这个耀眼的 211 光环是其它插本院校都难以比拟的

在仔细思考后，暂时还是决定报广师大而不是华师了。最主要的原因还是华师自学时间太少，这样无论对工作还是考研都是比较致命的。加上我还是想走技术路线的，没有时间提升自己可能就算 211 毕业也不能进大厂。广师大虽然是双非，但也有 carry、首铭这样优秀的前辈，我相信这可能会是更好的选择（其实我是 five，考不上
