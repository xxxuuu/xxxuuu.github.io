---
title: "DDIA 第二版读后感"
date: "2026-02-22"
image: "https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F701cabc2-274a-44d3-bae9-919367caa6ac%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4667LQC4L5H%252F20260921%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260921T140426Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjEMT%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJHMEUCIQD8iTLMur0Wv0IUlBstw9rafry3V40RPF8kv40jC%252B%252BYdAIgLPF%252BQoQc%252F2Sw%252FzfLR%252FwiKrVWoZTJnBo5MuMDn3xR3M8qiAQIjP%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FARAAGgw2Mzc0MjMxODM4MDUiDFHSMwt7FQs91C688SrcAxrLqm5T7VWDwRRDRFiTfNE7Iq3%252FMzzLS1VvGMqBhGsAKlJsGEENQ7N%252BTQSQyKl59Kix2dBFSqcAGb3%252F4%252BQTgdTvu2F4b2XYEeOugFAM7k5qWRlEpuDlmeb%252F7v5b3zQGcZ8Flle41s73qVe8DOlG9UQY%252FGaV7TuP54yxcWeHM31gBsQFB8CbsRIB20XH4bBjxltyIUStUJXhsZk7DX8foRbg6obHDAXmFGSm54rlMdUwvCEFMnXP1P2XhL84Qyp2rB7BrulhckNvhDUgrLB7Bscps0F78SzuaFcdRAH8kLAIM8S7oQz8xSX3rNfxZLQ834TJYgjWkoucxN8bFUD%252BojlSbttmMZRkd7AfVKfU9K4Ykk36QdBXfWGT8%252BfNMhZvKUqtSndSgNvYdaSkm%252Fp%252BAc6hmygo3SkwR3Pw3Nb4BBAM6TFciO7I09iRGZWYq16%252FGi63nV4buW5cLgh4qaw20i3Ak8T2aSCG0KUXxPWJ4niuHEkbxDg%252Bs4D3nPcU1xj2whNoTMR96YYQ639Ujif3jpqZSqt7aOKLh0mQola0GobI7PEvg%252B9s5B85dsWVDVwtOylveDIU7umCOt0y5by%252FiU977WE6jt%252BvKSb48BIBcHK320mxZbmjBaTLC1MYMIenxNUGOqUBhgPm%252FRXmT%252BWiRG5voQjhxA9IZYx6hejy0jB6muAzbBuUUvCpsE7btqzUQ%252BmbZVRALs%252FDhHdA%252BNXHFQE1meV7oY3be3A%252BzVwQS1Nk0bKtxF5zU3nKISPBUmOaEWsc0EICFEx7j%252BGlcGu8Z%252FYFebmpjLjEVqZTFeLTMWmaQyPSUdpTdvHZoJLZEzSuF9BJi8%252FIAJfpquzDkWrQjkmc3hXznxk5tvVO%26X-Amz-Signature%3Dbe5a136e76a7260fc52fdf1608b62765bf5c83c2f5ffef955e54a30d7188c489%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=30888756-3979-802f-aaed-f07caf48dd65"
tags:
  - "分布式系统"
canonical: "https://xxxuuu.me/post/ddia-2nd"
---

最近 DDIA 第二版 release 了，刚好春节假期花了几天快速过一遍看看有什么新东西，自己也重温一下，总结一下个人感受的几个变化



首先整本书更加实用了，更可落地，介绍各种场景解决方案的内容明显增多。架构权衡和选型决策也直接放到第一章，像 OLTP vs OLAP，Cloud vs self-hosting，这些可能是大部分读者在深入技术细节之前更关心的内容



第二点是反应了新的技术和趋势。典型的是云原生，第一版虽然也谈到些云相关的内容，但更多还是作为分布式系统从技术层面讨论的，对于更重要的云如何影响系统和软件，甚至企业的组织架构，以及过程中体现的思想变化讨论比较少。第二版里云原生几乎成为系统设计默认前提，存储假设大多基于 S3 而不是本地硬盘，存算分离的云数仓取代了过时的 Hadoop。顺应 AI 趋势，向量存储和 DataFrame 数据模型等章节也被引入



技术细节更丰富，存储章节里关于 LSM-Tree 和 B-Tree 的对比有了更多维度；单机事务和分布式事务章节合并，插入的解决方案刚好填补了落地鸿沟；part 3 里批和流计算的内容也多了不少。另外比较惊喜的是像 TiDB 和 JuiceFS 这样的国产系统也在书中频繁出现



系统验证方面，第一版只介绍了分布式系统的挑战和将面临的问题，以及处理这些问题的算法和协议。但如何验证最终系统是可靠的，没有说明。第二版补齐了这一点，如何对分布式系统进行验证，包括形式化方法、混沌工程和确定性模拟测试。确定性模拟测试这一块的内容和我之前写的文章差不多 [ 确定性模拟器 | x³u³](https://xxxuuu.me/post/deterministic-simulator)



总体看下来，第二版更实用，编排更合理，降低了阅读门槛，也紧跟时代。回想起上一次看 DDIA 还是在大学时，工作几年后再看，又有了些新的理解和感触，不少技术都有了实际接触，甚至可以算比较熟悉了。再次阅读，仍然会觉得这是一本好书
