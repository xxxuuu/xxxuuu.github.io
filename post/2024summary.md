---
title: "2024 年度总结"
date: "2025-01-01"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fbfe50417-58ba-4d65-ab45-24dd49660962%2Fimage.png?table=block&id=16e88756-3979-8010-aeb9-d7e49f597453"
tags:
  - "碎碎念"
canonical: "https://xxxuuu.me/post/2024summary"
---

## 工作 & 技术

由于去年底工作方向上的转变，今年主要聚焦在块存储和云原生方向，年初接手了一个质量比较差但有大量客户的历史产品维护，售后故障很多，几乎每天都会有故障工单击穿到我这来

虽然那段时间为了排查问题学会了不少东西，Linux 内核的块设备层和周边组件代码几乎看了一小半，也掌握了用 eBPF 做花里胡哨观测和调试的方法。但非常痛苦，下一秒可能就要被拉进工单群的恐惧感会笼罩在整个上班时间，连下班后都会提心吊胆的

![公司 Github 的热力图，上半年写的代码很少](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fbfe50417-58ba-4d65-ab45-24dd49660962%2Fimage.png?table=block&id=16e88756-3979-8031-806b-e85d7354286f&cache=v2&width=1400)
*公司 Github 的热力图，上半年写的代码很少*

经过几个月的持续迭代后，产品稳定了很多，终于转回到正常的研发节奏里，投入到新项目中

但还是觉得做的事很杂，离 core 的东西比较远。有时候会感觉在做的这些事情没什么意义，已经越来越感到倦怠了，所以之前也写了一篇[碎碎念](https://xxxuuu.me/post/infra-dilemma)劝退

公司的发展前景还不明朗，大家信心越来越不足。前段时间刚又一轮裁员完，入职时部门里一共 3 个 23 届校招生，去年底的裁员送走了一个，刚好时隔一年又送走了另一个，我成了部门里剩下的唯一一个 23 届校招生，是资历最浅的了。选择 startup 某种程度上真的是在赌博

而且，涨薪和晋升都很困难，虽然不会有什么绩效压力，但反过来也没法给你保证清晰的发展路线和天花板足够高的成长空间。好处也是有的，压力不大，很 WLB，甚至可以说比较闲，有相对充足的个人时间



动过很多次离职的念头，很想逃离现状。但这种温水煮青蛙的感觉，加上一些其他的个人规划原因，一直没能付诸行动

作为代替，一个尝试是参与了下开源，找了一些分布式 DB 相关的项目，水了些 PR（真的都很水）

不过也算是 Apache Contributor 了~（后面发现给 Apache Datafusion 提交的一个 PR 引入了问题，导致 InfluxDB 升级依赖后跑不起来，被钉在了耻辱柱上~

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fa4222a6e-0d6d-4566-a3f9-01974d8c6bb7%2Fimage.png?table=block&id=16e88756-3979-8019-89a8-ef4303814b31&cache=v2&width=1400)

收到了一些文化衫和周边

![GreptimeDB 的周边设计很不错](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F5b9d67c1-e6e8-481b-9be9-96be968dc85c%2FIMG_5407.heic?table=block&id=16e88756-3979-80a1-a4b9-ed5327ef79f3&cache=v2&width=1400)
*GreptimeDB 的周边设计很不错*

过程中有不少收获，对 DB 这块的一些业界产品和路线有了更多的了解。也大概知道了这种开源商业产品的模式，脸熟了社区的一些大佬

遗憾的是，业余参与开源很难长期坚持，毕竟无论如何都只能下班后挤时间做，相比这些项目维护者的全职投入，能分配的时间差了太多

而且一些项目的社区建设并不完善，外人是有很大的信息差的，这本身就会提高贡献门槛。更不用提一些完全是 KPI 开源的项目，压根就没打算维护社区和让外人参与

不过还是希望以后能继续参与到社区之中，这是很有意义的一件事。如果有机会可以写一篇文章怎么从 0 入门开源项目贡献



今年也看了不少书，感觉质量比较高的是 *[Database Internals](https://www.databass.dev/)*，风格接近 *[DDIA](https://dataintensive.net/)*（*DDIA*马上也要出第二版了）。另外还有 *[The Linux Programming Interface](https://man7.org/tlpi/)*，很适合作为更现代的 *[APUE](https://www.oreilly.com/library/view/advanced-programming-in/9780321638014/)* 替代品

[blog 迁移到 Notion](https://xxxuuu.me/post/migrate-blog-to-notion) 后提高了更新频率，发了几篇系统解析的文章，这也是激励自己持续学习的一个方法，明年也会尽力保持每月一篇的输出



## 生活

上半年体验了人生第一次坐轮椅出门，没想到已经到了要开始焦虑体检指标的地步了，身体健康真的很重要。自己也慢慢开始锻炼和健康饮食了，~虽然熬夜一时半会还没能戒掉~

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fdb1a7715-e8e8-4b7c-b3af-b6dce0b61188%2Fimage.png?table=block&id=16e88756-3979-80d8-b3f4-e353a9a8ad52&cache=v2&width=1400)



去年的 flag 回收，今年 7 月一次考过了 JLPT N2

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F11fc9cd4-49da-4797-a83b-647b4650128a%2Fimage.png?table=block&id=16e88756-3979-8013-807c-f35ac7537449&cache=v2&width=1400)

年底也考了 N1，对完答案惨不忍睹。在群友的建议下尝试[沉浸式学习](https://zhuanlan.zhihu.com/p/671671625)，开始啃生肉轻小说和 Galgame。上手后发现并没有想象中困难，慢慢也坚持读了几本书，基本都是ブルーライト文芸题材的内容，难度适中，感觉实际的阅读能力提高了不少。继续立个明年考过 N1 + 流利口语的 flag 吧

![Image](https://m.media-amazon.com/images/I/81LjBnyfBtL._SY522_.jpg)

![Image](https://m.media-amazon.com/images/I/71glDldRV3L._SY522_.jpg)

![Image](https://m.media-amazon.com/images/I/71er5ZR9MsL._SY522_.jpg)

![Image](https://m.media-amazon.com/images/I/81A-pSZBiWL._SY522_.jpg)



另外也终于出去走了走，国庆[在日本玩了一周](https://xxxuuu.me/post/japan-travel)，体验很好，计划明年还会去两趟（圣地巡礼 TODO 上又加了 Summer Pockets 和败犬女主

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fdf3b361f-99c8-4886-b03e-dc24b603510f%2Fimage.png?table=block&id=16e88756-3979-80de-aba8-d283d1c5379a&cache=v2&width=1400)

旅行路上看到成群结伴的学生会稍微有些感慨，真青春啊，开始理解 [Links 视频](https://www.bilibili.com/video/BV159HWe6EYJ/)里提到的「学生时代总是有大把时间却没有钱，工作后赚到了钱却没有那么多时间去旅行了」

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe19d83f9-4536-4a34-99a2-949a462ac494%2Fimage.png?table=block&id=16e88756-3979-8076-8f9b-cbfe998bd0f4&cache=v2&width=1400)



其它方面，新入了台机子，扩充了家里的 Homelab 成员。在折腾 NAS 上花了很多时间，监控面板成了新的赛博盆栽

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F3a0b2704-fb17-4a51-9b3a-d8093fae9ddc%2Fimage.png?table=block&id=16e88756-3979-802b-a110-d0742d1dbe8f&cache=v2&width=1400)

顺便把 NAS 系统也换上了 fnOS

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fb6129a6e-18ef-4506-b780-e2e52434c2ee%2Fimage.png?table=block&id=16e88756-3979-80c6-9902-c6cf6284c96b&cache=v2&width=1400)



年底小惊喜，和友人 HsOjo 抢到了 YOASOBI 的上海 live 票，春节后上海见噜

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Ff29a6a7a-29d8-459e-918b-d50d7a26bfae%2Fimage.png?table=block&id=16e88756-3979-80ec-a855-d27b53e437ad&cache=v2&width=1400)



## 尾声

总的来说，今年是平淡的一年，是稍微有些不满意的，想要改变现状

希望明年能推进计划的小目标，至于具体是什么，明年的年度总结再揭秘吧
