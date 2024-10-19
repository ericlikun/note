---
sidebar_position: 2
---

# Emacs 基本概念

> 做事所花费的时间总是比你预期的要长，即使你的预期中考虑了侯世达定律。——侯世达

侯世达定律指明了复杂性的叠加带来的认知难度的指数级上升。所以有一条学习新事物的建议是，从教科书开始，或通过你的认知框架找到恰当的学习素材，之后从最简单的概念开始理解，逐步由浅入深，并基于我们人类总是乐观评估自身能力的习惯，充分考虑复杂性叠加带来的影响。

## Emacs 概念

### 1. 文件和目录（file）

文件是操作系统的文件概念，目录用来容纳文件或目录。

### 2. 缓冲区（buffer）

缓存区对应一块内存，其实 buffer 源自计算机基本原理，或说 C 语言，就是预先向操作系统申请预留的一块内存。

:::info

当我们打开一个文件编辑时，其实有一个假象，我们以为我们的修改是直接修改了硬盘上的文件，但其实不是。

真正发生的是，我们所有的输入输出直接修改的都是内存中的内容，直到我们向计算机下达保存命令时，我们在内存中编辑的文件的副本才被重新写入到硬盘中，如果告诉计算机我们不需要把改变的内存内容回写到硬盘上的文件，也可以丢弃所做的修改。

:::

所以，buffer 就是 buffer，它的内容是从一个原始文件读取的副本，它们通过路径和名字来和原始文件对应。我们通过键盘和鼠标的操作改变的都是 buffer，直到我们使用保存缓冲区命令（Save Buffer，快捷键为 `C-x C-s`。如果现在还看不懂这个快捷键的表示也没关系，可以使用鼠标点击菜单 `File`-`Save` 替代）之后，所有的修改才生效。

Emacs 也有不对应文件的缓冲区，它们通常是由一对\*\*来包裹缓冲区名，比如，`*scratch*`、`*Help*` 等。

### 3. 框架（frame）

* frame： 操作系统的窗口

### 4. 窗口（window）

* window： 操作系统中窗口的面板

和 Windows 操作系统的概念刚好相反，不知不是为了避开 Windows 这个注册商标。无论是 frame 还是 window 都是内存中数据结构的一种视图，它们共享一个进程。

### 5. 模式（mode）

模式对当前编辑的文本提供更多的感知，使用 Emacs Lisp 可以自定义新模式。

#### **主模式（major mode）**

一个缓冲区只能处于有一个主模式中，退出一种主模式的方法是进入另一个主模式。

模式            | mode                  | 功能
:-              | :-                    | :-
基本模式        | fundamental mode      | 默认模式
文本模式        | text mode             | 普通文本
邮件模式        | mail mode             | Email
读邮件模式      | RMAIL mode            | 管理邮件
只读模式        | view mode             | 查看文件
Shell 模式      | shell mode            | 内部运行 Shell
FTP 模式        | ange-ftp mode         | ftp
Telnet 模式     | telnet mode           | telnet
大纲模式        | outline mode          | 写大纲
缩进文本模式    | indented text mode    | 自动缩进文本
图形模式        | picture mode          | 画图
TEX 模式        | TEX mode              | TEX 文件
LATEX 模式      | LATEX mode            | LATEX 文件
C 模式          | C mode                | C 语言
C++ 模式        | C++ mode              | C++ 语言
FORTRAN 模式    | FORTRAN mode          | FORTRAN 语言
Emacs Lisp 模式 | Emacs Lisp mode       | Emacs Lisp 语言 
Lisp 模式       | Lisp mode             | Lisp 语言
Lisp 交互模式   | Lisp interaction mode | Lisp 表达式

#### **辅模式（minor mode）**：定义的一些特定的行为

模式         | mode                | 功能
:-           | :-                  | :-
自动换行模式 | auto-fill mode      | word wrap
改写模式     | overwrite mode      | 替换而不是插入
自动保存模式 | auto-save mode      | 自动保存文件到临时文件
行号模式     | line number mode    | 显示行号
临时标记模式 | transient mark mode | 高亮
大纲模式     | outline mode        | 大纲
VC 模式      | VC mode             | 版本控制

#### **移除环（kill-ring）**和召回**（yank）**

**kill-ring** ：类似 Windows 剪贴板，大部分大于一个字符的移除内容都会进入移除环，但也有一些自定义的不进入。

Emacs 中有两个类似的操作。删除（delete）和移除（kill），删除的文本不进入环，移除的文本进入环。

**yank**：类似 Windows 的粘帖，进入移除环的内容可以被召回到屏幕的光标处再次插入当前文本，效果就是粘帖。



## 实践一下：Emacs 启动和退出

### 1. 启动 Emacs

通常将 Emacs 目录放在 Windows 的 PATH 变量中，然后在命令行使用 `emacs` 启动。

如果后面跟上一个字符串，如 `emacs filename.txt`，则会默认创建一个 filename.txt 的同名 buffer。

当然，也可以在图形界面下和启动其他程序一样，使用鼠标双击程序或快捷方式来启动。

### 2. 退出 Emacs

在学习如何使用快捷键 <kbd>Ctrl</kbd>+<kbd>x</kbd>, <kbd>Ctrl</kbd>+<kbd>c</kbd> 之前，可以先使用鼠标点击菜单的退出菜单来退出 Emacs。


### 3. 配置文件

首先，删除 `~/.emacs` 或 `~/_emacs` 文件，建议使用 `~/.emacs.d/init.el` 文件作为配置文件。

### 4. 练习，练习，再练习 

> Practice, Practice, Practice

在不同的时间和不同设备上反复执行以下步骤，直到手指和头脑都记住进入和退出 Emacs 的方式：

1. 双击启动 Emacs 程序，或用任何你喜欢的方式进入；
2. 按下 <kbd>Ctrl</kbd>+<kbd>x</kbd>,<kbd>Ctrl</kbd>+<kbd>f</kbd> `~/.emacs.d/init.el`，访问这个缓冲区。
3. 输入一些分号 `;;;;`；
4. 按下 <kbd>Ctrl</kbd>+<kbd>x</kbd>,<kbd>Ctrl</kbd>+<kbd>s</kbd>，Emacs 会保存 `init.el` 文件。
5. 按下 <kbd>Ctrl</kbd>+<kbd>x</kbd>,<kbd>Ctrl</kbd>+<kbd>c</kbd>，退出 Emacs。

问题处理：如果出现 `Error in initial file`，则是因为 `init.el` 中出现了错误，需要修正后重新进入，如果不了解如何修复，可以备份此文件，并清空内容，等以后了解后再恢复。

:::tip Windows 中配置为使用 Emacs 打开文件的方法

Windows 文件管理器中，右键添加使用某程序打开是修改注册表，将下面的代码中emacsclientw.exe的路径修改后，
将内容保存为 Open with Emacs.reg 文件，然后双击导入注册表中。

```reg title="Open with Emacs.reg"
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell]
[HKEY_CLASSES_ROOT\*\shell\Open with Emacs]
@="&Open with Emacs"
[HKEY_CLASSES_ROOT\*\shell\Open with Emacs\command]
@="d:\\soft\\Emacs\\emacs-29.0.50\\bin\\emacsclientw.exe -n \"%1\""
[HKEY_CLASSES_ROOT\Directory\shell\openwemacs]
@="Open &with Emacs"
[HKEY_CLASSES_ROOT\Directory\shell\Open with Emacs\command]
@="d:\\soft\\Emacs\\emacs-29.0.50\\bin\\emacsclientw.exe -n \"%1\""
```

:::

## Emacs 软件布局

### 1. 菜单

上方是菜单，默认是：`File` `Edit` `Options` `Buffers` `Tools` `Text` `Help`

通常 `Help` 之前的倒数第二个菜单是模式菜单，如 `Text`。

### 2. 工具栏

菜单下有一行工具栏，也可能通过设置关闭，这不太重要。

`缓冲区关联文件` `读文件到缓冲区` `读取目录` `关闭缓冲区` `写入文件` | `撤销` `剪切` `复制` `粘帖` | `查找`

### 3. 内容区域

中间是内容编辑区域。

下方有一条深色模式分割条、

* 左侧：
  * `%%`：只读模式，已修改 
  * `%*`：只读模式，已修改
  * `--`：可写模式，未修改
  * `**`：可写模式，已修改（很多编辑器都文件名加 * 表示已修改）
* 中间：缓冲区名字
* 右侧：括号内分别是主模式和辅模式，如（Markdown ElDoc）


## Emacs 命令

先进性一个查看快捷键对应的命令的实验：

1. 按快捷键 <kbd>Ctrl</kbd>+<kbd>H</kbd>,<kbd>K</kbd>，光标会跳转到最下方并显示：
```
Describe the following key, mouse click, or menu item:
```

2. 再输入：<kbd>Ctrl</kbd>+<kbd>F</kbd>，则会显示：
```txt
C-f runs the command forward-char (found in global-map), which is an
interactive built-in function in ‘C source code’.

It is bound to C-f.

(forward-char &optional N)

Move point N characters forward (backward if N is negative).
On reaching end or beginning of buffer, stop and signal error.
Interactively, N is the numeric prefix argument.
If N is omitted or nil, move point 1 character forward.

Depending on the bidirectional context, the movement may be to the
right or to the left on the screen.  This is in contrast with
<right>, which see.

  Probably introduced at or before Emacs version 20.1.
  This function has a ‘byte-compile’ property
    ‘byte-compile-zero-or-one-arg’.  See the manual for details.

[back]

```
我们知道 Emacs 是一个内置帮助的文本编辑器，上述快捷键即查看快捷键的帮助文件。这是相当重要的一个特性：Emacs 中每个命令都有一个正式的名字，实际上它们是 Emacs 内部的宏、Lisp 函数（以及少量 C 函数）。由于这些名字都较长，所以一般常用的命令都被绑定为一个快捷键，比如刚才的 <kbd>Ctrl</kbd>+<kbd>F</kbd>。

上述两句话关键，这里是可以提升效率的地方。和诸多领域的“底层逻辑”是一致的。类比地举例，它们在程序开发上称为“函数复用”，在重构时叫做“方法抽取”，在商业上被称作“场景化”，法语叫“Déjà vu”，在学习上叫“举一反三”。

:::info

为什么在此插入一段看似无关的东西，是因为学习过程要利用认知心理学规律，推荐以下图书：

  * 《哥德尔、埃舍尔、巴赫——集异璧之大成》
  * 《表象与本质》：以旧识新，类比思维是认知的基础逻辑。

:::

你会发现 Emacs 中编辑的操作方式其实也是自然而然的：mode 就是一种编辑任务的场景化，在场景提供的上下文中，mode 的功能提供对当前编辑文件的更多的感知和便利性：在具体的场景下，当你准备输入的信息，编辑器可以根据场景和上下文来预判可能的输入范围，然后来提供输入建议。

:::tip 脑洞

Emacs 可集成 AIGC，对相似的文本处理过程提供复用和智能，从而带来效率。

:::

:::danger 理解

Emacs = Editor + Macros

Editor 大体没什么差别，无非上下左右移动、插入和删除六种，而魔法在于可复用的广义的 Macros 中。

所以自然而然地，编辑过程会被不断抽象和简化，直到它们被绑定为一个快捷键。

这就是 Emacs 关于文本编辑的本质。

:::


