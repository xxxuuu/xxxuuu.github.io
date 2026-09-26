---
title: "Vim as an IDE"
description: "记录 Vim 入教过程和折腾记录"
date: "2023-06-22"
tags:
  - "折腾"
  - "Vim"
canonical: "https://xxxuuu.me/post/vim-as-an-ide"
---

## 从 JetBrains 到 VSCode

自己的开发工具在早期一直是 JetBrains IDE 为主，JetBrains 的产品自然不用多说，体验极佳，但仍然有几个痛点，促使我全面换到 VSCode 上进行开发工作：

1.  **资源占用高**：这个问题在我之前的 Intel MacBook Pro 上还是比较明显的，每次一打开 IDE，风扇就会原地起飞，在图书馆里总能和隔壁的游戏本老哥竞争噪音冠军宝座。虽然之后换了 M1 Pro 的 MacBook Pro 14 后没再担心过噪音和性能问题，但 Activity Monitor 中的资源占用率还是看着难受
2.  **收费贵**：学生时代一直用着学校邮箱白嫖教育 LICENSE，但临近毕业，这种方式也无法持续下去。公司提供的 LICENSE 服务器也只能在内网使用，无法用于个人电脑
3.  **Remote 功能羸弱**：Remote Development 使用的 Gateway 问题很多，速度和稳定性都很差，体验一言难尽，几乎没法正常使用
4.  **单个产品功能单一**：通常项目里会混杂着多种语言，但 JetBrains 的 IDE 被分为多个产品，单个产品对混合场景的支持不太理想

其中一、二、四点都并非不可接受，还是有相对的解决方案。但第三点 Remote 功能的缺失就无法调和了，在 Tencent 实习时，做的是 SaaS 系统，还是比较应用层的后端开发，但项目本身具有一定规模，同时依赖许多内部组件，虽然在 macOS 上经过一些配置也能跑，但需要折腾一下，因此大家基本都是在开发机上 code，IDE/Editor 的 Remote 功能就必不可少了，也是在这时我切换到了 VSCode



现在在公司内做虚拟化平台的开发，无论是开发还是调试，对 kernel 都有严重依赖，同时项目规模更进一步，跑全量的 unit tests 都要吃掉数十 G 内存，在 macOS 上开发就更不可能了

VSCode 虽然一些分析的功能上比 JetBrains IDE 要弱不少，但 VSCode 开创的这类 Editor + LSP 的模式相比 JetBrains 的 specific 的模式要更具备扩展性和通用性，也大大降低了 Editor 开发的门槛。所以现在各类 Editor 如雨后春笋般冒出来，只要接入 LSP，就能直接提供现成的语言支持而不需要再花费大精力开发各个语言的支持功能，JetBrains 最新的 Fleet 也受此影响，采用了 LSP 的模式设计



## VSCode + Vim

VSCode 使用了很长时间，体验一直中规中矩，自身也比较习惯了各类快捷键和操作。让我有使用 Vim 想法的契机是入职现在这家公司一周后发现组内几个大佬都在用 Vim，有次 leader 在讲代码时噼里啪啦一通操作，给了我一点小小的震撼，实在太 cool 了

因此我也决定开始使用 Vim，我选择的方式是 VSCode + Vim 插件，这样能在使用 Vim 的同时，如果某些操作不熟练，还可以用回熟悉的方式，不至于工作被 block。而且我将 Vim 当作一种编辑方式，或者说是一堆快捷键的组合，因此它是不和其它 IDE/Editor 相冲突的，IDE/Editor 本身的功能就交由它们自己去处理



Vim 入门可以先使用 `vimtutor` 了解基本功能并能熟练使用，然后参考这两篇文章来逐步掌握更多技巧：

-   [简明 Vim 练级攻略](https://coolshell.cn/articles/5426.html)
-   [Learn-Vim\_zh\_cn](https://github.com/wsdjeg/Learn-Vim_zh_cn)

一开始先从基本的操作做起，例如 `h`/`j`/`k`/`l`/`w`/`b`/`e`/`<C-d>`/`<C-u>`/`x` 等，完全习惯后再通过学习更多的命令和练习组合操作不断提高速度，例如 `#`/`*`/`%`/`<C-o>`/`<C-i>`/`c2i{`... 移动编辑都得心应手就可以尝试更多的高级功能了，例如搜索替换、多窗口、标记、折叠、宏等

同时要注意和 IDE/Editor 的功能结合，例如 `gd`/`gh` 能够进行 LSP 相关的操作，某些不顺手的快捷键也可以自行定义，下面是我自己的一些配置：

-   [vscode-vim.json](https://gist.github.com/xxxuuu/a0e32e866b9d793dfac1625d9eff9635)



在坚持了一个月之后，我使用 Vim 来阅读和编辑代码的速度已经远快于之前了，这个过程中为了避免自己的知识遗漏，如果遇到比较麻烦或者路径太长的操作，那说明肯定还有更高效的方式，我也会再翻文档或找 best practices 来优化自己的 flow。同时开始折腾一些如 easymontion 的插件来继续提高效率

Vim 入门的难点在于全新概念和操作方式，学习路线陡峭。一开始做一个很简单的操作都要思考一会或者翻阅文档，但一旦坚持下来，经过阵痛期后形成肌肉记忆，就会感受到丝滑般的编辑体验，其组合式的交互也能轻松做到一些看起来很复杂的操作。手也不用在键盘和鼠标间反复移动，做到全键盘编辑/浏览，操作真正跟上思维速度，实现「人机合一」



## LunarVim

虽然一开始想的是 Vim 和 IDE/Editor 是解耦的，但在使用 VSCode + Vim 的过程中还是发现，大部分 IDE/Editor 本身不是为 Vim 的编辑模式而设置的，一些与编辑无关的 IDE/Editor 自身的操作还是比较别扭，无法和 Vim 很好的结合在一起，这一点也不「Vim」。例如在 Explorer 中寻找文件时，或者 Terminal 和 Tab 间的跳转等都不太方便

因此我开始寻找一种新的替代方案，或许应该用真正的 Vim as an IDE 方法，但都需要进行很多配置，对小白并不友好。直到后来我发现了 [LunarVim](https://www.lunarvim.org/zh-Hans/) ，它基于 NeoVim，集成了众多常用 nvim 插件，结合各个语言的 LSP 和 DAP，能够提供一个开箱即用的解决方案，已经完全够用，试用了一下感觉非常满意，没有前面 VSCode + Vim 的几个不便之处，同时额外装了几个插件后，也有不弱于 VSCode 的 IDE/Editor 功能（况且 VSCode 的这些功能本身也是严重依赖插件提供），基本满足了我的需求

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F41725efe-cc72-4a58-a6dd-9fb20d3fe143%2Fimage.png?table=block&id=f2e09966-91da-4c26-a5f2-d54e571fb10e&cache=v2&width=1400)

LunarVim 在 [starter.lvim](https://github.com/LunarVim/starter.lvim/tree/master) 中提供了常见语言的全套配置，除此之外，个人还安装了以下插件：

1.  [distant](https://github.com/chipsenkbeil/distant.nvim)：实现类似 VSCode 中 Remote SSH 的功能，不过目前还不是特别稳定；直接在 Linux 开发机上安装 LunarVim 也是一种选择
2.  [diffview](https://github.com/sindrets/diffview.nvim)：显示 Git DiffView，效果比内置的那个插件好一些，直接使用内置的也可以
3.  [git-blame](https://github.com/f-person/git-blame.nvim)：在光标所在行后显示 Git Blame
4.  [todo-comments](https://github.com/folke/todo-comments.nvim)：对带有 TODO，FIX 的注释进行高亮，并提供搜索功能
5.  [hop](https://github.com/phaazon/hop.nvim)：类似 easymotion 的跳转插件
6.  [symbols-outline](https://github.com/simrat39/symbols-outline.nvim)：符号大纲
7.  [trouble](https://github.com/folke/trouble.nvim)：用于显示各种诊断信息和一些类 LSP 的操作
8.  [nvim-surround](https://github.com/kylechui/nvim-surround)：强大的 surround 操作
9.  [copilot-cmp](https://github.com/zbirenbaum/copilot-cmp)：Github Copilot 相关插件

配置文件也丢在 Github Gist 中：[config.lua](https://gist.github.com/xxxuuu/268dd3d9248094ee189cc88518f7f88b)



> 更新：
> 
>  
> 
> 我又叛变了，开始改用 [AstroNvim](https://astronvim.com/)
> 
> 因为已经脱离了小白阶段，有更多的自定义和修改需求，感觉 AstroNvim 的默认配置和设计比 LunarVim 更合理，修改起来更方便。所以 fork 了一份在自己仓库来自定义：[https://github.com/xxxuuu/AstroNvim](https://github.com/xxxuuu/AstroNvim?tab=readme-ov-file)
> 
> 现在可以直接 `clone` 来开箱即用
> 
> ```bash
> $ git clone --depth 1 https://github.com/xxxuuu/AstroNvim ~/.config/nvim
> $ nvim
> ```



## 浏览器也要 Vim！

从 VSCode 切换到 LunarVim 是为了 workflow 中 Vim 操作更加统一化，现在，已经可以完全享受 Vim Coding

但，flow 中不只是 IDE/Editor，还有一大半时间是处于飞书等 IM 软件和浏览器中。在飞书中大多时间都是在输入，鼠标键盘切换不频繁，也可以容忍。但浏览器这侧，一个典型高频场景是一边在浏览器浏览文档，一边在 IDE/Editor 写代码，这就会导致鼠标键盘的切换非常频繁。上一秒还在用 Vim 愉快地 Coding，下一秒就要动鼠标在浏览器翻翻找找，破坏了良好的 Vim 体验。所以，浏览器也要 Vim！



好在有同样想法的人不少，Chromium 上有非常成熟的 Vim 扩展 Vimium，可以将 Vim 操作带到浏览器上

-   [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb)

现在，彻底 Vim！

![Image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F4cc04375-345a-4a1e-bdf0-3a7c88ef0425%2F6b5c2cba-2688-4a2d-a511-c2d0b0424467%2Fimage.png?table=block&id=67270632-2f18-4d39-9a7a-5ca8eca3ff2c&cache=v2&width=1400)
