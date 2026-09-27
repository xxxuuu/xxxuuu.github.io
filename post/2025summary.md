---
title: "2025 年度总结"
date: "2025-12-31"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F0daa8093-1f31-44e2-a670-4bbd9c065bc2%2F%25E5%259B%25BE%25E7%2589%2587_20260101171241_12_1.jpg?table=block&id=2d688756-3979-8000-a874-fcca606c77b8"
tags:
  - "碎碎念"
canonical: "https://xxxuuu.me/post/2025summary"
---

## AI, AI

谈起今年最能深刻影响行业的变革，毫无疑问是 AI

几乎每天，新的模型，Agent，论文和各种爆炸性新闻都在蜂拥而来。公司内、地铁上、各种线上平台，人人都在讨论 AI：应用、技术、资本。各个大厂似乎都处在一种持续的焦虑中，据说一些组强度到了 10-12-7，校招起薪也跟着水涨船高。不得不感叹，所有人都在 AI 上疯狂下注，公司在赌方向，员工也在赌前途



我也不算完全的旁观者，上半年在公司里做了一些 AI 方向的探索性工作，系统性补了 LLM 的基础，照着书手搓过简单模型和推理框架。作为存储公司，更重要的是找到存储这类 data infra 在 AI 时代的定位，也研究了像 DeepSeek 3FS 和 Mooncake 这样的系统，虽然最后并没有产出什么实际落地结果，只能算是带薪学习，但过程还是有不少收获的。理解了推理场景下的核心数据链路，存储系统作为 KVCache Provider 将是成本控制甚至决定规模的重要一环，[Manus 也提到了需要围绕 KVCache 命中率来做 Agent 设计](https://manus.im/zh-cn/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)

存储趋势的另一方面，注意到 S3 正在重新定义云原生数据基础设施的架构，近乎无限的弹性和完美的可靠性还有优秀的吞吐。在云上不需要再重新做一套复杂的带状态协调和共识的数据副本存储层，只需要将 S3 作为 shared disk，分布式系统简化成接近单机系统的简洁架构，JuiceFS 也证明了这很适合 AI 负载。相信 S3 会是未来的存储一等公民，就像 HDD 到 SSD 的演化一样，从根本上影响存储引擎的设计，S3 is All you need



扯远了，再谈 AI，作为程序员，AI Coding 是更直接和具有冲击力的生产力革命。对我来说，去年的 AI Coding 还只是智能版的 Tab 补全，最多生成单测代码。而到了今天已经可以快速理解复杂系统并进行改造了。好处在于，我只需要把控和输出宏观设计，享受最纯粹的编程乐趣，不必亲力亲为做太多 dirty work，但与此同时也感受到自己的能力边界正在模糊，至少在编码能力上或许早已被超越



这场 AI 浪潮我也身处其中，但不在中心，对未来的发展既期待也抱有一丝未能参与的遗憾



## 流动与搁浅

年中，公司内部发生了一些变化，几位 leader 陆续离职，参与的多个项目 pending，自己也对新工作内容失去兴趣。加上去年提到过公司发展放缓，上升困难，意识到自己很难再像刚入职那会持续进步、充满热情，于是毅然决定离开。其实原本这个打算是在年初的，但上半年的 AI 相关工作让我决定再留一会，现在这个前提条件不存在了，离开也是自然



初次社招，只看了深圳的 infra 类岗位，偏向云/存储/数据库几个方向，也许因为学历原因也许因为其他原因，大多简历挂，选择很少。只有一家互联网小厂的 infra 组给了面试，最后顺利拿到 offer，在 HR 的催促下匆忙入职，也算无缝衔接

但一段时间后就感受到了落差，工作内容上夹杂了大量 DevOps 类的杂活，但更重要的是技术和氛围上相比前司差距很大，特别是糟糕的代码质量和其中体现出来的工程态度以及品味。我也思考过很多原因，大概是因为在这里 infra 组服务的是内部业务部门，所以更多时候交付的只是一些能凑合用的临时工具和各处拼装的开源系统，而不像前司那样需要对外提供一个长期维护、精心打磨的生产级基础设施产品

一切都让我非常煎熬，唯一优点是和前司一样比较 WLB，还是不由得后悔起这个选择，也许当时应该再多找一会，好事多磨

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F3155ff14-0882-45c1-8285-e22a1b8ef4c6%2F6a21f448-d22b-4c00-9fc2-1fcad4f15fa2.png?table=block&id=2db88756-3979-80fc-9666-c6a50fc2d0ac&cache=v2&width=384)



年底出现过一个小变量，被腾讯游戏某个 top 组捞起面试，虽然从没考虑过做游戏服务端的工作，但感觉千万日活必然也会面临独有技术挑战，而且以我的 bg 来说机会比较难得，毕竟这个项目传闻年终奖惊人。认真准备了面试后侥幸通过前几轮技术面（虽然准备的内容完全没用上），却在最后一轮面评都说点击即送的制作人面上挂了，面试过程中感觉还聊得挺好，据说原因是不太匹配，比较郁闷

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd4193281-5247-42fd-9784-cdef53124dab%2Fimage.png?table=block&id=2db88756-3979-8054-8a76-cf1e08d36ae5&cache=v2&width=336)



回看整个社招过程，没有真正令人满意的结果。再叠加这几年 AI 热潮带来的市场回暖，很容易产生一种错位感，仿佛毕业踩在了 23 年这样一个最糟糕的时间点，起点过低给后续发展投下了长期阴影。不知道该怪自己还是怪这个时代，又笼罩在校招那会比较 emo 的情绪上了（笑



更难回避的是自身成长的停滞，无论技术、职业路径，还是其他方面的个人成长，都谈不上明显

这也是去年每月一篇 blog 的 flag 没有完成的主要原因，实际上写了不少草稿，但最后都没能发出来，越来越觉得自己写的东西质量不足以拿出手，下半年连周末写代码的时间都变得越来越少

我想我仍然热爱技术，但意识到自己不是个聪明的人，甚至不算是努力的人，或许无法达到理想中的位置。特别是看到同届同学开始读博、创业、晋升高 P，参考系被不断拉远后，很难判断自己究竟是在原地踏步，还是已经滞后，又或者两者都有



## 日常切片

随着年龄的增长，愈发强烈地感受到时间流逝的加速，以及个人精力的有限。太多想学想做的事情，还没来得及动手，时间就已经流逝。这让我更加珍惜时间，更希望提高人生单位时间的质量

常常在想是不是应该发展副业和拥有一份睡后收入，投入到更能产生复利的领域来实现 FIRE 呢。能不必被工作束缚，也是为了更好地工作，能自由地做有意义的工作，自由地写有价值的代码，自由地活着

因此今年也做了更多投资尝试，仓位不大，但基金和美股总体回报率还算满意。反而在加密货币上的策略转向保守，意外让我在几轮负面行情中不至于损失太多

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fe023f839-84f1-4d6a-8a71-279e01faa891%2Fe8008637-bbb8-4720-bd0d-d8f15fd5f77c.png?table=block&id=2da88756-3979-8078-8f1d-e33e86979fe1&cache=v2&width=288)



五一带家人去了一趟东京，真正体会到带长辈出游并不是一件轻松的事，需要处处安排、照顾情绪和偏好。年中的离职旅行是一次[圣地巡礼 solo trip](https://xxxuuu.me/post/summer-pockets-junrei)，独自出游时，夹杂着心中的小小不安，在傍晚的岸边迎着濑户内海的风，是今年最治愈最美好的回忆，抚平了工作中的大半疲惫和厌倦

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F9d262e0f-4408-4d98-ba5a-8d6cb749bf22%2F89c6d992924588ca03600560b4823c17.jpg?table=block&id=2db88756-3979-8055-b57d-f2d9b3ee4d1f&cache=v2&width=1400)



人生还第一次去了漫展，过于社恐没有集邮，反而是路上看着摄影老师们的长枪短炮，急得我回家后马上买了个唯卓仕的大光定，虽然目前为止还没人可以给我拍hhh

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F08176db7-48c1-4c2e-b2c2-e08ec91902b4%2Fimage.png?table=block&id=2db88756-3979-80dd-b0fe-e7d6b61a3dce&cache=v2&width=432)



严肃参加了 2 月的 YOASOBI 和 10 月的鸡狗对邦两场 live，虽然我是个比较闷的人，完全嗨不起来，但在 live 现场感受到大家的情绪，还是会很感动。两场 live 都在上海，短短几天的体验，也让我对上海评价很高，如果要让我在国内选另一个城市定居，大概只会是上海。原定 1 月还有 Roselia 亚巡，可惜由于最近总所周知的政治风波取消了，下次得远征日本了

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fb333b8f1-ebf1-4394-afac-36df0be527e1%2F9fea15396929ade991a518d5f630b65a.jpg?table=block&id=2db88756-3979-80ca-a0da-ea452e51ebbc&cache=v2&width=1400)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd5ed100e-b41e-4f66-ac56-9799e0fd0de0%2F12d6c3b3e2e7896fd01849a854449295.jpg?table=block&id=2db88756-3979-806b-88ca-e28bc25c5a37&cache=v2&width=1400)



玩游戏的时间也在变多。今年最喜欢的是天国拯救 2，文本量巨大，沉浸感非常强，从一代开始就一直关注战马工作室，算是个人心目中的年度最佳（但 TGA 上一个奖都没拿，实锤野榜）。年底也沉迷了一段时间战地 6，以前始终认为手柄玩 FPS 很反人类，现在觉得意外地舒适，只要调校合适

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F3bf29a2b-dbed-4596-8b87-cf22db6629fc%2Fd9aa3ef8c2066932bb1b87a4c2fa847e.jpg?table=block&id=2db88756-3979-8065-b933-f02c48f66f45&cache=v2&width=624)



家里 homelab 的两台机子不太平，在不同时间点都 all in boom 了一次，一台散热故障，一台 CPU 虚焊。而最初的现象都只是卡顿和死机，排查花了不少时间（说明可观测性还是不够）。outage 期间发现没有 nas 和软路由对我日常几乎也没有任何影响。后来把影音方案切换到付费 emby 服务器上，体验反而更好，homelab 只用来跑自己的一些服务

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F9af12594-cdc3-490a-98d5-273ab691fc7d%2Fimage.png?table=block&id=2db88756-3979-80d6-84f6-c7e7420d0498&cache=v2&width=1400)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F546bae3f-3790-4e21-ae7f-7108bffc264f%2Fimage.png?table=block&id=2db88756-3979-80f7-bbab-c030a3b07914&cache=v2&width=1400)





数码方面，入手了台 vivo x300 pro 和 iPhone 双持。多年不用 Android 再上手，体验相比 iOS 还是有差距，系统交互、动画等各方面一致性欠缺，连不同 app 里字体大小都无法统一，状态栏和导航条在很多 app 里也是非沉浸的。不过厂商功能堆料激进，影像能力强大，可玩性也挺高



从去年开始使用 [Anki](https://apps.ankiweb.net/)，一开始只是因为找不到合适的能背日语单词的 App（大部分 App 的复习算法过于弱智），后面卡组越来越多，也开始自己制卡，每天一个半小时坚持了完整一年。任何需要记忆的东西几乎都可以使用 Anki，将一切交给 FSRS 算法

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F5c8eba36-d14a-4c63-98e4-6d02466f4a33%2Fimage.png?table=block&id=2db88756-3979-80a8-ad50-ca9fba3161e2&cache=v2&width=432)

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fc611d3c5-70d2-44e4-ac07-ec2a2410a339%2Fimage.png?table=block&id=2db88756-3979-801f-ae17-c95e04b5c4d5&cache=v2&width=1400)



## ゆこう 明日へと、美しい時代よ

这一年的体感显得格外割裂，AI 浪潮，经济下行，全球右转。对于我个人，今年似乎很糟，似乎也没那么糟。想起双城记里的那句话：「这是最好的时代，这是最坏的时代」

也许未来不会更好，但我仍然希望自己能缓慢地向前移动
