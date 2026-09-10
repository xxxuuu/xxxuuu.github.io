---
title: "迁移博客到 Notion"
description: "Make Notion Great Again！"
date: "2024-08-25"
tags:
  - "折腾"
canonical: "https://xxxuuu.me/post/migrate-blog-to-notion"
---

# 动机

之前的 blog 方案一直是使用 [Gridea](https://open.gridea.dev/) 生成静态页面搭配 Vercel 托管。Gridea 是一个很棒的工具，但作者已经很长时间没有更新了



另一方面，在写作的过程中还是感到 Markdown 的表达能力不足，很多时间都要靠插入 HTML 或使用外挂的插件才能实现预期排版or样式。

最简单的例子就是空行，Markdown 是会忽略多行空行的，而现代电子设备屏幕上的文字排版非常依赖空行来做分段（相对应纸质时代是采用首行缩进的方式），但在 Markdown 中却还要通过 `<br/>` 手动空行

有时还想有个单独的页面记录自己的旅行地图或摄影作品，显然这些要在基于 Markdown 的方案中实现都十分困难，就连图片管理都不方便

是时候摆脱 Markdown 的束缚了



还有一个原因是，我在个人的记录、信息整理中都重度使用了 Notion，保守估计在其中存放了上千个页面。与此同时，blog 却需要使用一个单独的工具来进行写作和管理，这也让我感到麻烦，很大程度上影响了写作的欲望~（终于找到不更新的理由了~



# Notion-based blog

Notion 有很强的表达能力，block 和 database 的设计都是很大的创新，这些设计和功能被各种云文档和笔记软件抄了一遍又一遍，足以见其影响

现在又集成了 LLM，对写作更方便了。所以很早之前我就想，能否将 blog 也搬到让 Notion 上，让 all in one 更加彻底呢？



不过 Notion 并不是一个建站工具，虽然有提供公开页面的站点功能，但充其量也只是公开页面/文章，离站点还差了点味道，只能说勉强能用，绑定自定义域名还需要额外 10 刀一个月

而且要进行比较好的管理，就肯定得用 Notion 的 database，这时候如果直接使用站点功能，用户进来看到的就是一个表格，这很奇怪（虽然有其他view，但那些玩意没好到哪去，说到底是 database 目的是管理数据而不是展示数据)

如果将 Notion & Database 的组合在这里看作一个 Backend/Database as a Service，提供的是数据，那么还缺的就是面向最终用户的前端页面，这就是 Notion-based 建站方案需要解决的问题



好在有这个想法的人并不少，有很多优秀的第三方 Notion-based 建站工具，例如 [noto](https://noto.so/), [potion](https://potion.so/), [super](https://super.so/) 等，但这些大都是 SaaS 产品，免费计划对功能和页面量有严格限制

后来也考虑过基于 [NotionX/react-notion-x](https://github.com/NotionX/react-notion-x) 这个 Notion block 的渲染库自己实现，不过这只是个渲染库，离搭出一个能用的产品还差了很多上层功能，加上我实在不想写太多前端代码，只能作罢

直到最近偶然刷到了 [tangly1024/NotionNext](https://github.com/tangly1024/NotionNext) ，在功能上基本满足了我的想象，可以自托管，也能直接生成静态页面，是开箱即用的。并且 MIT license 开源意味着可以自由定制修改甚至商业化~（或许未来可以整个自己的 Notion 建站 SaaS 产品）~，不需要额外成本~（除了折腾的时间）~，于是决定这次将 blog 迁移过来



# 实施

虽然 NotionNext 在功能性上满足我的要求，但还要进行一些小调整（例如去掉一些审美堪忧才会喜欢的花里胡哨鼠标特效，和有了 tag 却还要存在的意义不明的 category，以及乱加的与 Notion 相悖的样式），同时移植原先 blog 的主题 [xxxuuu/gridea-theme-autumn](https://github.com/xxxuuu/gridea-theme-autumn) 到 NotionNext 上

我 [fork 了 NotionNext](https://github.com/xxxuuu/NotionNext)，花了一个周末来完成这些修改和移植（还是写了不少前端代码 真痛苦



NotionNext 改造完成后，还得把原先的文章搬到 Notion 中，Notion 能直接导入 Markdown，但有些样式（特别是代码块）会有奇怪的换行问题。所以最后还是手动 copy 并调整的，好在文章数量不多。在这个过程中看到自己以前写的东西，稍微有些感叹，原来当时那么~弱智~青涩，不过这就是记录的意义吧



NotionNext 可以直接作为服务端运行，但我不想维护一个额外的服务器。Vercel 之类的服务对这种有动态 API 和网络请求的 project 也有严格的资源限制

所以计划和之前一样生成静态页面推送到仓库，仓库更新就会触发 Vercel 部署。这样还能复用原来的仓库 [xxxuuu/xxxuuu.github.io](https://github.com/xxxuuu/xxxuuu.github.io) 和 Vercel project



不过这样还需要解决的一个问题是，站点无法动态更新。每次编辑完后要重新生成一下静态页面。在之前 Gridea 中点击一下发布就会自动完成这些操作，在 NotionNext 中就得执行 `yarn export` 再 `git push`，显然有些麻烦。于是我将这个操作丢到了 [Github Action](https://github.com/xxxuuu/NotionNext/blob/customization/.github/workflows/build.yaml) 中，定时或手动 run 一下就行

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd3c78d22-74dc-44af-acb4-d6955ef7dc63%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466VIABKK4O%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQC3U13dNLk3uWvhHIisu7zoxHc4%252Fbr2BQ%252FIUjzeFv%252BBVQIhAMvDdt%252BjXAv7Imp6v7ZNuOEYBAn0oUfYXjTxuNUg86EzKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgyzpmdmJMi6kBW7Omsq3AMU6U%252BK7Zl6MZrdWZK6t%252F0AFUoFrCg%252F3SrOmSkxdx8vkdTcYMtFXk6x1F3bNB%252FSGSHSuH5P64Tu6LyJyvxBiMyM2WEgjAaezpT8vRhnSwviDfsZcnUFDeLjhNLUKuP6iFlsl6AKhAmGvVTzPm0lCi6Ssw4Y5c6maSFI9Dn6ZxjmRqyy92Qm2wzJzzHHRMeOX27l2dRnzejzEF%252BDYt5l5L7BjMM3vmiYqQB%252FgecJtRPCFuCtWwslZEuFF%252BJhneLA5ld9pNnq5CSgckxnT8fF4rBXmq3l6pgiVBGFFhVmWsNIlm8gCSXLW3v2z6dC3LzXcDd%252B8p5VazM1GpwLiapsL11%252Bg5wdRAnL%252Bg6IiV36u8TZE8F2672umzOipTXmvoKSH1Fopp7Xn2EPElGxvPrqnCJ9nkjrqftrEcReWQufR%252B5sl744zilC29xIRImznUL6tQKItubDuL4J9vRmnaoC2fzeucsz3y41LoblcTpVDGXJbIswlrmf3EEloWXXc9hotgirPhu2t6MueBw3baWKVhI7QFwZq8b39iaZbdxUAYOMsRhipTqS4Ffh49tTPCA8aZleaQU4OnJR0v8YMKuO9zPwdRPiVM3pvOkhx8bn1NFrcWHDFMwo9hq0l2iu1TCWrYnVBjqkASvNda0JEWA4hVubue1srqDlgYXuym00KHlfxdwXdk5PWCMcluJ7tRGNL4ABUbMW3H3pDQbD5jFpmGZAY16H9l6KlQwR5jj2t9uXrvptlLWXH8EpFgAoga172INHIuySXv%252Fc%252FuRtH8drLIakcwFiJPXWez4AONEq24XtotW3GlROgl1s%252BEgE8poz1UpdcHlASZmT0IyEGz0rX0cuC64PAqYTL0vI%26X-Amz-Signature%3D8c5b66b86ce276d5cf82ae4ecd2f1cc033139e3186b267317d149ee55a302ba2%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=a95f30b8-1f68-449b-bcb3-a71dfdd947e4)

其实也可以直接为 NotionNext 仓库创建一个新的 Vercel project，设置 build command 为 `yarn export`。每次更新在 Vercel 中 redeploy 就可以了，但我绕一圈的目的主要是想将 NotionNext 的仓库和最终成品的静态页面仓库分离开来



最终效果：

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F480e2dc7-7444-4193-8258-1e2804ba6afe%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466VIABKK4O%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQC3U13dNLk3uWvhHIisu7zoxHc4%252Fbr2BQ%252FIUjzeFv%252BBVQIhAMvDdt%252BjXAv7Imp6v7ZNuOEYBAn0oUfYXjTxuNUg86EzKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgyzpmdmJMi6kBW7Omsq3AMU6U%252BK7Zl6MZrdWZK6t%252F0AFUoFrCg%252F3SrOmSkxdx8vkdTcYMtFXk6x1F3bNB%252FSGSHSuH5P64Tu6LyJyvxBiMyM2WEgjAaezpT8vRhnSwviDfsZcnUFDeLjhNLUKuP6iFlsl6AKhAmGvVTzPm0lCi6Ssw4Y5c6maSFI9Dn6ZxjmRqyy92Qm2wzJzzHHRMeOX27l2dRnzejzEF%252BDYt5l5L7BjMM3vmiYqQB%252FgecJtRPCFuCtWwslZEuFF%252BJhneLA5ld9pNnq5CSgckxnT8fF4rBXmq3l6pgiVBGFFhVmWsNIlm8gCSXLW3v2z6dC3LzXcDd%252B8p5VazM1GpwLiapsL11%252Bg5wdRAnL%252Bg6IiV36u8TZE8F2672umzOipTXmvoKSH1Fopp7Xn2EPElGxvPrqnCJ9nkjrqftrEcReWQufR%252B5sl744zilC29xIRImznUL6tQKItubDuL4J9vRmnaoC2fzeucsz3y41LoblcTpVDGXJbIswlrmf3EEloWXXc9hotgirPhu2t6MueBw3baWKVhI7QFwZq8b39iaZbdxUAYOMsRhipTqS4Ffh49tTPCA8aZleaQU4OnJR0v8YMKuO9zPwdRPiVM3pvOkhx8bn1NFrcWHDFMwo9hq0l2iu1TCWrYnVBjqkASvNda0JEWA4hVubue1srqDlgYXuym00KHlfxdwXdk5PWCMcluJ7tRGNL4ABUbMW3H3pDQbD5jFpmGZAY16H9l6KlQwR5jj2t9uXrvptlLWXH8EpFgAoga172INHIuySXv%252Fc%252FuRtH8drLIakcwFiJPXWez4AONEq24XtotW3GlROgl1s%252BEgE8poz1UpdcHlASZmT0IyEGz0rX0cuC64PAqYTL0vI%26X-Amz-Signature%3Dfbe446d0dc6e8bc4913fc7e48c5104bf72dc983f7ca1e54cff25e344b240bb4d%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=e20c5c0a-b88f-4bad-a40c-6a2ac7e96a15)

现在 blog 所有的编辑和管理都可以在 Notion 中完成





# 样式测试

> 测试 Notion 各种元素能否正常显示，源自 [react-notion-x test suite](https://react-notion-x-demo.transitivebullsh.it/)，与正文无关



## Text

***All kinds*** of **text** styling options are supported. Basic `text` blocks are akin to HTML `<p>` tags. Text blocks also support a **variety** of ~***rich***~ text formatting [options](https://twitter.com/transitive_bs).



gray brown orange yellow green blue purple pink red



gray bg

brown bg

orange bg

yellow bg

green bg

blue bg

purple bg

pink bg

red bg



## Image

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd1b76bfd-f4cf-4e99-87d8-e7498d1f3da1%2Fimage.png%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466VIABKK4O%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075611Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJIMEYCIQC3U13dNLk3uWvhHIisu7zoxHc4%252Fbr2BQ%252FIUjzeFv%252BBVQIhAMvDdt%252BjXAv7Imp6v7ZNuOEYBAn0oUfYXjTxuNUg86EzKogECID%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEQABoMNjM3NDIzMTgzODA1IgyzpmdmJMi6kBW7Omsq3AMU6U%252BK7Zl6MZrdWZK6t%252F0AFUoFrCg%252F3SrOmSkxdx8vkdTcYMtFXk6x1F3bNB%252FSGSHSuH5P64Tu6LyJyvxBiMyM2WEgjAaezpT8vRhnSwviDfsZcnUFDeLjhNLUKuP6iFlsl6AKhAmGvVTzPm0lCi6Ssw4Y5c6maSFI9Dn6ZxjmRqyy92Qm2wzJzzHHRMeOX27l2dRnzejzEF%252BDYt5l5L7BjMM3vmiYqQB%252FgecJtRPCFuCtWwslZEuFF%252BJhneLA5ld9pNnq5CSgckxnT8fF4rBXmq3l6pgiVBGFFhVmWsNIlm8gCSXLW3v2z6dC3LzXcDd%252B8p5VazM1GpwLiapsL11%252Bg5wdRAnL%252Bg6IiV36u8TZE8F2672umzOipTXmvoKSH1Fopp7Xn2EPElGxvPrqnCJ9nkjrqftrEcReWQufR%252B5sl744zilC29xIRImznUL6tQKItubDuL4J9vRmnaoC2fzeucsz3y41LoblcTpVDGXJbIswlrmf3EEloWXXc9hotgirPhu2t6MueBw3baWKVhI7QFwZq8b39iaZbdxUAYOMsRhipTqS4Ffh49tTPCA8aZleaQU4OnJR0v8YMKuO9zPwdRPiVM3pvOkhx8bn1NFrcWHDFMwo9hq0l2iu1TCWrYnVBjqkASvNda0JEWA4hVubue1srqDlgYXuym00KHlfxdwXdk5PWCMcluJ7tRGNL4ABUbMW3H3pDQbD5jFpmGZAY16H9l6KlQwR5jj2t9uXrvptlLWXH8EpFgAoga172INHIuySXv%252Fc%252FuRtH8drLIakcwFiJPXWez4AONEq24XtotW3GlROgl1s%252BEgE8poz1UpdcHlASZmT0IyEGz0rX0cuC64PAqYTL0vI%26X-Amz-Signature%3D9b0cc18bee67ede32290d397af807b2c5722d35ad324916a388443bc2017768f%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=09284d22-babe-4200-adc9-9b47e08b5953)



## Quote

> This is an example quote.



## Callout

> This is a basic callout. 
> It can contain blocks and *rich text*. 💪



## Divider

* * *



## Linked Block

*The following block is linked to the content of a global footer block.*

> Copyright 2026 [Travis Fischer](https://transitivebullsh.it) • [CC0 License](https://choosealicense.com/licenses/cc0-1.0/) 
>  
> [Home](https://www.notion.so/saasifysh/Notion-X-Test-Suite-067dd719a912471ea9a3ac10710e7fdf) • [GitHub](https://github.com/saasify-sh/notion-kit) • [Twitter](https://twitter.com/transitive_bs)



## Lists

-   Bulleted lists are supported
-   Second Items
    -   Nested 1
        -   Nested 2
-   Back at top level

    -   Child 1
    -   Child 2




1.  First Item
2.  Second
3.  Third
    1.  First Nest
    2.  Second Nest
        1.  Deeply nested
    3.  Third Nest
4.  Last



-   \[ \] Pretty URLs
-   \[x\] Custom domains
-   \[x\] Google Fonts
-   \[x\] Page title/description for SEO
-   \[x\] Custom scripts
-   \[x\] A setup wizard to customize the script (instead of having to change the raw code)
-   \[ \] Stop random pages from showing up under custom domain
-   \[ \] Hide the What's New banner



**Normal Toggle**

Content inside here.



## Code Blocks

basic code

```typescript
/**
 * Base properties shared by all block types.
 */
export interface BaseBlock {
  id: ID
  version: number
  created_time: number
  last_edited_time: number
  parent_id: ID
  parent_table: string
  alive: boolean
  created_by_table: string
  created_by_id: ID
  last_edited_by_table: string
  last_edited_by_id: ID
  space_id?: ID
  properties?: any
  content?: ID[]
  type: BlockType
}
```



mermaid

```mermaid
flowchart LR
    subgraph subgraph1
        direction TB
        top1[top] --> bottom1[bottom]
    end
    subgraph subgraph2
        direction TB
        top2[top] --> bottom2[bottom]
    end
    %% ^ These subgraphs are identical, except for the links to them:

    %% Link *to* subgraph1: subgraph1 direction is maintained
    outside --> subgraph1
    %% Link *within* subgraph2:
    %% subgraph2 inherits the direction of the top-level graph (LR)
    outside ---> top2
```

*Flowchart*

```mermaid
quadrantChart
    title Reach and engagement of campaigns
    x-axis Low Reach --> High Reach
    y-axis Low Engagement --> High Engagement
    quadrant-1 We should expand
    quadrant-2 Need to promote
    quadrant-3 Re-evaluate
    quadrant-4 May be improved
    Campaign A: [0.3, 0.6]
    Campaign B: [0.45, 0.23]
    Campaign C: [0.57, 0.69]
    Campaign D: [0.78, 0.34]
    Campaign E: [0.40, 0.34]
    Campaign F: [0.35, 0.78]
```

*Quadrant Chart*

```mermaid
%%{init: { 'logLevel': 'debug', 'theme': 'base', 'gitGraph': {'showBranches': true, 'showCommitLabel':true,'mainBranchName': 'MetroLine1'}} }%%
      gitGraph
        commit id:"NewYork"
        commit id:"Dallas"
        branch MetroLine2
        commit id:"LosAngeles"
        commit id:"Chicago"
        commit id:"Houston"
        branch MetroLine3
        commit id:"Phoenix"
        commit type: HIGHLIGHT id:"Denver"
        commit id:"Boston"
        checkout MetroLine1
        commit id:"Atlanta"
        merge MetroLine3
        commit id:"Miami"
        commit id:"Washington"
        merge MetroLine2 tag:"MY JUNCTION"
        commit id:"Boston"
        commit id:"Detroit"
        commit type:REVERSE id:"SanFrancisco"
```

*Gitgraph Diagram*



## Links

bookmark

[

![](https://www.google.com.hk/images/branding/googleg/1x/googleg_standard_color_128dp.png)

Google

google.com.hk



](https://www.google.com.hk/)



> 没有特殊处理的普通站点的 mention 会显示异常，比如 https://google.com

mention：

-    [Google](https://www.google.com/)
-    [NotionX/react-notion-x](https://github.com/NotionX/react-notion-x)
-    [transitive-bullshit/nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit)

Inline styled text [NotionX/react-notion-x](https://github.com/NotionX/react-notion-x) and more after



block

[

![](https://opengraph.githubassets.com/bae465d66a8c9d57b51982340ca3fd3e8322f2f111e1d8c7afcd054452ec1471/NotionX/react-notion-x)

GitHub - NotionX/react-notion-x: Fast and accurate React renderer for Notion. TS batteries included. ⚡️

Fast and accurate React renderer for Notion. TS batteries included. ⚡️ - NotionX/react-notion-x

github.com



](https://github.com/NotionX/react-notion-x)



## Tables

| 1 | 2 | 3 |
| --- | --- | --- |
| 4 | 5 | 6 |
| 7 | 8 | 9 |



## Column Layouts

one

two

three

four

five

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fadac4e1e-1a94-4306-b41f-57f80b45f90d%2Froger-bradshaw-7o3uFw2xrAk-unsplash.jpg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4666HX5JMMY%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075615Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIFl28UeNL1bdBjDLM6K0Pw7QWTod5al3R%252F3HmCoNvDNSAiBDP4FhKY3NFP2NQ8vqVmYu78ndg7rDJOfh95CQaekgwiqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMvLBAe5Z9g%252FpZHUTlKtwDAPHKwbk0nHBkaAYtWysj0z%252FwHkcsa020pxJmLC9Rg7HIGfZclI1oH3sQalgXsde1LtzbdPuGLa%252FuMaM9wBkr8krAFftYYtMYwSt20vPddz340GVY2u832HseE9xJFNIjTToAGlACY8hnJzWAsDcQ33gVl2obresyNKGFI3FDLNKMxuQJCowkjv%252FyasbohN%252FoXmrqlA7Yc%252B93mUv8%252Bgzu7Pk4JHpnyXd8f3uWlmQQ11vcxBgiJPBz5NVxBlNYfKRpMWD3xoZNgcUJshfccBSNtDR6rcHM7XzPiskczSm1ZkHHgPIekGTLE2Rt0OgONT7H1i7jm4EGjcffwE8axaFoMEVQ5Fzwk%252FGA0g6eJC4w4KhVbbUwZVwQaZLRlCKiy4IE82YWWUrTqRmwKy%252BdR%252Bp3dMVi1Pc2tNJAXH70AkpJkaKJXhg%252B2OlKkFs%252BjHqp%252BFkIwwLIYHuCRyWDO97pLc3dF4FnyAV3FsizM2kImvjMJRao6pkVaSS8xIDBDroxlgnGjqAuS6brXyEExb3qhvCEeKOO72J6R%252BFctdHJCj3SYdFISsE%252BMXr%252BCcJ7XSRWipMXUL13fJ5yCytawhoMmrYxg03kVAz3w3yplsJrq%252BcQPhLE3XfMLBs9WV5qFTMw2aqJ1QY6pgE5JYJrRhutyYJ0vg5M33LeuyJ%252BLP5V66cWbA%252B%252Fl3fEOt6OTkU5MA31Y3uX76YEFzqpgug0C%252B7MG5ZpuOAvRFsyDwhPNLjiyBMsw9z07J39ocfoLpyLfvvFAGLoqWKXoZoQou2iVhzdiUDh0Rx41280VeBiurNJcu8%252FWaYXmo1YK5gKiOrU8lbnWxcggIET2mxnrOkxJq%252F4cPeaioEVqAY3lr6c%252F5Z7%26X-Amz-Signature%3D223f08ad2517ff4de1d1a5877c993f155f8650e4320dc184f9602f9776ff98e4%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=9df2d734-fbf2-4eb8-9373-139e494cda2f)

![This is a caption](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Ffc4a23e4-7898-4afa-ac20-e7834097a605%2Fmarsumilae-Og4S8NW-p_I-unsplash.jpg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB4666HX5JMMY%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075615Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIFl28UeNL1bdBjDLM6K0Pw7QWTod5al3R%252F3HmCoNvDNSAiBDP4FhKY3NFP2NQ8vqVmYu78ndg7rDJOfh95CQaekgwiqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMvLBAe5Z9g%252FpZHUTlKtwDAPHKwbk0nHBkaAYtWysj0z%252FwHkcsa020pxJmLC9Rg7HIGfZclI1oH3sQalgXsde1LtzbdPuGLa%252FuMaM9wBkr8krAFftYYtMYwSt20vPddz340GVY2u832HseE9xJFNIjTToAGlACY8hnJzWAsDcQ33gVl2obresyNKGFI3FDLNKMxuQJCowkjv%252FyasbohN%252FoXmrqlA7Yc%252B93mUv8%252Bgzu7Pk4JHpnyXd8f3uWlmQQ11vcxBgiJPBz5NVxBlNYfKRpMWD3xoZNgcUJshfccBSNtDR6rcHM7XzPiskczSm1ZkHHgPIekGTLE2Rt0OgONT7H1i7jm4EGjcffwE8axaFoMEVQ5Fzwk%252FGA0g6eJC4w4KhVbbUwZVwQaZLRlCKiy4IE82YWWUrTqRmwKy%252BdR%252Bp3dMVi1Pc2tNJAXH70AkpJkaKJXhg%252B2OlKkFs%252BjHqp%252BFkIwwLIYHuCRyWDO97pLc3dF4FnyAV3FsizM2kImvjMJRao6pkVaSS8xIDBDroxlgnGjqAuS6brXyEExb3qhvCEeKOO72J6R%252BFctdHJCj3SYdFISsE%252BMXr%252BCcJ7XSRWipMXUL13fJ5yCytawhoMmrYxg03kVAz3w3yplsJrq%252BcQPhLE3XfMLBs9WV5qFTMw2aqJ1QY6pgE5JYJrRhutyYJ0vg5M33LeuyJ%252BLP5V66cWbA%252B%252Fl3fEOt6OTkU5MA31Y3uX76YEFzqpgug0C%252B7MG5ZpuOAvRFsyDwhPNLjiyBMsw9z07J39ocfoLpyLfvvFAGLoqWKXoZoQou2iVhzdiUDh0Rx41280VeBiurNJcu8%252FWaYXmo1YK5gKiOrU8lbnWxcggIET2mxnrOkxJq%252F4cPeaioEVqAY3lr6c%252F5Z7%26X-Amz-Signature%3D1816b629554fc4a42ef5914a8ee82d2cf12fd58df4f02aa30a5aee81588c3994%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=aeaa57fd-8ca9-4653-b1bc-63f7f9ec8db8)
*This is a caption*

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2Fd4b5070d-5e28-40bf-a4a5-2200e147aa84%2Fricardo-gomez-angel-geBHIpvA6us-unsplash.jpg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Content-Sha256%3DUNSIGNED-PAYLOAD%26X-Amz-Credential%3DASIAZI2LB466SSWZEOBL%252F20260910%252Fus-west-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20260910T075615Z%26X-Amz-Expires%3D3600%26X-Amz-Security-Token%3DIQoJb3JpZ2luX2VjELf%252F%252F%252F%252F%252F%252F%252F%252F%252F%252FwEaCXVzLXdlc3QtMiJGMEQCIAlt9OZ4aCI%252Fwv3bKo6J8Cd5aCeef%252B%252BnvdbMY5gz2b96AiAV4PvVEGv5%252BqE8RGb00OGPjZ6QPIYzB4Wpvn8bcxhBmSqIBAiA%252F%252F%252F%252F%252F%252F%252F%252F%252F%252F8BEAAaDDYzNzQyMzE4MzgwNSIMZ44HRPUsivZXdv6PKtwD5cT4Cn%252BbIhdoHjGTsjVDgAvNTWnOTppQFXCSMd7Zo9y9OBJzjQmRcoagPGl%252BIl%252FPMZMrDPoc4NAZ10BswCOZf0Dh6%252B5MysfI76PyKUD%252FFy8Ksq7ncUaFt5%252BSxWAbBiTQnmRBBJ13KMVullvJ4ueiWYqLR7jLYzrxw6xvreXJkntemRfx7UrK6LGR2MKYSLj1cDl8B3yV9lyPpon2PtVx5KLZy6upEjlDJ0a%252FiRbsFTa5VH3w7ujYb3FFnQCpKyhkxe6%252B0wwuXbVwoPyfAX6LzcoSwgT5tfnc1cdRwD6e4J84m%252BBRsxBsP5xpAndKqfErFDnX1h7MpoZU3axAEPzERNfM4pXL8XUTtFoQZ5RelFSEE09t7rjkkaQ3pBz0FDSqx0BEWNutljVnk3w8MRk3H%252Fh2k5B30093cmgk2JXI8CrzbSvWCcvSs%252Btvg3Qlxj%252FIFGyX0SjYdpOSoI3x6kbtJgx2KhHKHmvU%252BAH2aIv8ZJo%252BIF8q9nNTxWVb3YGEFatYm%252BCwA3VwRdSvA0QgZzXpmH2%252F3ZjUQGJt3qjsCoHlhqORoXt1T4vB0RxdpgO5FPafI0sOQm8GcNfwPgVCVxv2d%252BL91enjq7KxrGrm4l%252BFLYNeQojZZKsqcN0DcKcwr6uJ1QY6pgEAhnN9f3Fc94%252F%252FTkDEyV1NM9LqfcyyI%252BcGkj0J4u5CZ2xHJ%252B66LU1UD6%252F4LU%252F6Q2o2ZTNFxCJ8zgxr0%252Fxekh4d1riPEEg8Ozmyc3LLiOk%252BRS%252FBNbI3SXSiSDOU8qkJWeAN4rK7NUmM4znwYYndTO96Ii%252FkpbHzVRrdQv8YjHzXLwlDp8GRP3NeULGZHvyJvyOtqEisx%252BIDm3mcbhTftVilLHZyOPPN%26X-Amz-Signature%3D596ce380e0e45a29fc8451865d09cfdecf2302e2ba7aaac40027b5c4fafe12b8%26X-Amz-SignedHeaders%3Dhost%26x-amz-checksum-mode%3DENABLED%26x-id%3DGetObject?table=block&id=55201f81-d882-4ef7-86e7-35f9442c929d)

### Nesting works just fine.

It is also responsive.





## Equations

### Block

$$[ x^n + y^n = z^n ]$$

$$\displaystyle \frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }(ϕ5−ϕ)e52π1=1+1+1+1+1+⋯e−8πe−6πe−4πe−2π$$

$$\displaystyle \left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)(k=1∑nakbk)2≤(k=1∑nak2)(k=1∑nbk2)$$

$$\displaystyle {1 + \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots }= \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.1+(1−q)q2+(1−q)(1−q2)q6+⋯=j=0∏∞(1−q5j+2)(1−q5j+3)1,for ∣q∣<1.$$



### Inline

This is an example of an inline equation: $y = mx + b$

$500ms + 80ms + 500ms = 1080ms = 1.08 seconds$

You can also add formatting:

$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$



## Databases

| 名称 | 标签 | 数字 | 单选 | 多选 | 复选框 | 日期 |
| --- | --- | --- | --- | --- | --- | --- |
| AAA | 123 | 123 | A | A |  | 📅 2024/8/21 |
| BBB | 321 | 231.1321 | \- | BC |  | 📅 2024/8/26 - 2024/8/28 |
| CCC | abc | \- | C | \- |  | 📅 2024/8/7 |



## Embed

PDF



YouTube

[Embedded Video](https://www.youtube.com/embed/_ngbuYanRh8)

*This is a caption*



twitter

> このイボイボが🦎 
>  
> 気持ちいいにゃ〜😸(о´∀\`о)スリスリ [pic.twitter.com/1gCOIiW4yw](https://t.co/1gCOIiW4yw)
> 
> — ヨガえみちゃんねる (@emichan\_iguana) [June 22, 2020](https://x.com/emichan_iguana/status/1275210350665719810?ref_src=twsrc%5Etfw)



Spotify Playlist

[Embedded Video](https://open.spotify.com/embed/playlist/2MgkBl2rQnPdF3WZ6ciajc)



Google Maps

[Embedded Video](https://www.google.com/maps/embed/v1/place?key=AIzaSyD9HrlRuI1Ani0-MTZ7pvzxwxi4pgW0BCY&q=Manhattan)
