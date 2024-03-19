---
sidebar_position: 3
---

# Emacs 基本命令

import Link from '@docusaurus/Link';

Emacs 中的操作都对应一个命令，大多命令都绑定了一个或多个快捷键。

首先，看看图形界面下 Emacs 的操作过程：

1. 图形界面操作的过程

   用户点击按钮或菜单，编辑器弹出对话框，用户点击鼠标选中焦点，用户输入信息，然后点鼠标后用键盘输入下一个信息，编辑器执行相应的操作。

2. Emacs 操作过程：

   用户点击快捷键，用户输入信息，手不离开键盘，继续输入下一个信息，编辑器执行相应操作。

这两个过程的差异是，Emacs 交互过程是确定的，可以手不离键盘进行操作；而图形界面却需要有更复杂的交互过程。

认知心理学告诉我们，人的思维模式存在一种筛状结构，从日常状态聚焦到筛孔中形成聚焦。而程序设计这样的思考过程正是需要思维聚焦，需要从常规思考平面进入专注的筛孔，从而进入心流状态；而图形的切换交互，会产生思维抖动，提高思维聚焦的难度，更难以进入心流状态，这就是纯键盘操作的优势，也是终端文本编辑器的优势。

在 Emacs Lisp 中会了解 Emacs 命令是一个带 interactive 的 Emacs Lisp 函数，可以绑定一个快捷键，都可以用 `M-x command-name` 执行，下面我们来讲 `M-x` 是什么。

## 键盘约定

  * <kbd>Ctrl</kbd> 键：简写为大写字母 C
  * <kbd>Meta</kbd> 键：简写为大写字母 M
  * <kbd>Shift</kbd> 键：简写为大写字母 S

:::tip
<kbd>Meta</kbd> 键在现代键盘上已不常见，取而代之的是 <kbd>Alt</kbd>。

<kbd>Meta</kbd> 还有一种等效输入方式，即先按 <kbd>ESC</kbd> 释放后再按下其他键，效果和按住 <kbd>Alt</kbd> 不放再按下其他键等效。
:::

  * <kbd>TAB</kbd>
  * <kbd>RET</kbd>：<kbd>RETURN</kbd> <kbd>ENTER</kbd>
  * <kbd>DEL</kbd>：<kbd>BACKSPACE</kbd> 在组合键时与 <kbd>DEL</kbd> 是一致的 

## 设计初衷

Emacs 命令有很多，最好的记忆方式是亲手使用：当你有时间时，在不同的场景下反复使用命令。

* <kbd>C-n</kbd>：<kbd>C</kbd> 或 <kbd>M</kbd> 或 <kbd>S</kbd> 后带有 <kbd>-</kbd> 时，是常用的命令绑定，操作方式是按住 <kbd>CTRL</kbd> 后，再按下 <kbd>n</kbd> ，然后释放两个键；
* <kbd>ESC n</kbd>：空格键表示释放后再按键，这里是按下 <kbd>ESC</kbd>，释放后，再按 <kbd>n</kbd> 键；
* <kbd>C-x n</kbd>：常用命令设计为 <kbd>C-x</kbd> 后接一个字符，在键盘上 <kbd>C-z</kbd> 是挂起程序，所以 <kbd>C-x</kbd> 是最近的一个键
* <kbd>C-c n</kbd>：用户命令设计为 <kbd>C-c</kbd> 后接一个字符，在键盘上 <kbd>C-x</kbd> 是被占用了，所以 <kbd>C-x</kbd> 是最近的一个键

:::tip 另类玩法
特殊的键盘由于产生特殊的字符代码，此特性可定义一个键盘映射图实现对组合的快捷键实现二层定制。定制前提是：键盘特殊键所产生的字符代码是以一个特殊字符开头，并且至少有3个字符长时，才能在 Emacs 里对它们进行定义。利用这个特性可实现按下一个键执行一个命令（类似 Vim），类似游戏机的金手指。
:::

## Emacs 基本操作

### 初学者逃生命令

对于初学者，遇到光标不知所踪，或卡在 mini buffer 不知道怎么处理时，请使用下列命令回到编辑区。

操作     | 命令名称      | 快捷键                                               | 备注
:-       | :-            | :-                                                   | :-
取消命令 | keyboard-quit | <kbd>C-g</kbd>                                       | 非常有用
撤销     | undo          | <kbd>C-x u</kbd> 或 <kbd>C-/</kbd> 或 <kbd>C-_</kbd> | 根据习惯使用其中一种即可
	
### 文件和缓冲区 File and Buffer

操作           | 命令名称                | 快捷键             | 备注
:-             | :-                      | :-                 | :-
访问文件       | find-file               | <kbd>C-x C-f</kbd> | 或者说读取文件内容到缓冲区，并展示出来。
关闭缓冲区     | kill-buffer             | <kbd>C-x k</kbd>   | 
保存缓冲区     | save-buffer             | <kbd>C-x C-s</kbd> | 当缓冲区有变化时，保存缓冲区到文件中。
批量保存       | save-some-buffers       | <kbd>C-x s</kbd>   |
另存为文件     | write-file              | <kbd>C-x C-w</kbd> |
保存后退出     | save-buffers-kill-emacs | <kbd>C-x C-c</kbd> |
恢复缓冲区     | revert-buffer           |                    |
恢复文件       | recovery-file           |                    |
正则关闭缓冲   | kill-matching-buffers   |                    |
批量关闭缓冲   | kill-some-buffers       |                    | 
打开缓冲列表   | list-buffers            | <kbd>C-x C-b</kbd> |
切换缓冲       | switch-to-buffer        | <kbd>C-x b</kbd>   |
缓冲重命名     | rename-buffer           |                    |
唯一命名缓冲区 | rename-uniquely         |                    |
只读模式       | read-only-mode          | <kbd>C-x C-q</kbd> | 把当前的缓冲切换成只读模式

### 框架 Frame （Windows 的窗口）
操作           | 命令名称                        | 快捷键             | 备注
:-             | :-                              | :-                 | :-
最小化框架     | iconify-or-deiconify-frame      | <kbd>C-z</kbd>     |
打开新框架     | make-frame-command              | <kbd>C-x 5 2</kbd> | 即另一个 Windows 窗口
关掉其他框架   | delete-other-frames             | <kbd>C-x 5 1</kbd> |
关掉本框架     | delete-frame                    | <kbd>C-x 5 0</kbd> |
切换框架       | switch-to-buffer-other-frame    | <kbd>C-x 5 b</kbd> |
新框架         | other-frame                     | <kbd>C-x 5 o</kbd> |
新框架访问文件 | find-file-other-frame           | <kbd>C-x 5 f</kbd> |
新框架只读文件 | find-file-read-only-other-frame | <kbd>C-x 5 r</kbd> |

### 窗口 Window （Windows 窗口内的操作）

操作                     | 命令名称                            | 快捷键                         | 备注
:-                       | :-                                  | :-                             | :-
纵向分割出窗口           | split-window-below                  | <kbd>C-x 2</kbd>               |
横向分割出窗口           | split-window-right                  | <kbd>C-x 3</kbd>               |
跳到新窗口               | other-window                        | <kbd>C-x o</kbd>               |
增加窗口高度             | enlarge-window                      | <kbd>C-x ^</kbd>               |
减小窗口高度             | shrink-window                       |                                |
增加窗口宽度             | enlarge-window-horizontally         | <kbd>C-x }</kbd>               |
减小窗口宽度             | shrink-window-horizontally          | <kbd>C-x \{</kbd>              |
平衡窗口                 | balance-windows                     | <kbd>C-x +</kbd>               |
小窗口高度               | shrink-window-if-larger-than-buffer | <kbd>C-x -</kbd>               | 如果窗口高度比缓冲行数更多, 则缩小窗口.
在另一个窗口打开文件     | find-file-other-window              | <kbd>C-x 4 C-f C-x 4 f</kbd>   | 相当于 C-x C-f, 不过使用另一个窗口或新建一个窗口.
在另一个窗口只读打开缓冲 | find-file-read-only-other-window    | <kbd>C-x 4 r</kbd>             | 在另一个窗口以只读的模式打开文件. 可以使用 C-x C-q 来取消只读.
在另一个窗口打开缓冲     | swith-to-buffer-other-window        | <kbd>C-x 4 b</kbd>             | 相当于 C-x b, 不过使用另一个窗口或新建一个窗口.

### 移动 Motion

这些操作在 Linux 和 macOS 终端中通用

操作         | 命令名称            | 快捷键                               | 备注
:-           | :-                  | :-                                   | :-
左移一个字符 | backward-char       | <kbd>C-b</kbd> 或 <kbd>←</kbd>      |
左移一个字符 | forward-char        | <kbd>C-f</kbd> 或 <kbd>→</kbd>      |
下移一行     | next-line           | <kbd>C-n</kbd> 或 <kbd>↓</kbd>       |
上移一行     | previous-line       | <kbd>C-p</kbd> 或 <kbd>↑</kbd>       |
前移一个词   | backward-word       | <kbd>M-b</kbd>                       | 
后移一个词   | forward-word        | <kbd>M-f</kbd>                       | 
前移一段     |                     | <kbd>M-\{</kbd>                       | 需要按 <kbd>Shift</kbd>
后移一段     |                     | <kbd>M-}</kbd>                       | 需要按 <kbd>Shift</kbd>
上滚一屏     | scroll-up           | <kbd>C-v</kbd> 或 <kbd>PgUp</kbd>    |
下滚一屏     | scroll-down         | <kbd>M-v</kbd> 或 <kbd>PgDn</kbd>    |
滚到上一页   |                     | <kbd>C-x [</kbd>                     | 分页符以 ^L 分隔
滚到下一页   |                     | <kbd>C-x ]</kbd>                     | 分页符以 ^L 分隔
移到行首     | beginning-of-line   | <kbd>C-a</kbd>                       |
移到行尾     | end-of-line         | <kbd>C-e</kbd>                       |
移到句首     | backward-sentence   | <kbd>M-a</kbd>                       |
移到句尾     | forward-sentence    | <kbd>M-e</kbd>                       |
移到首字符   | beginning-of-buffer | <kbd>M-&lt;</kbd>                       | 需要按 <kbd>Shift</kbd>
移到尾字符   | end-of-buffer       | <kbd>M-&gt;</kbd>                       | 需要按 <kbd>Shift</kbd>
移到屏幕中间 | recenter            | <kbd>C-l</kbd>                       | 按三次分别是中上下
跳到指定行   | goto-line           | <kbd>M-x goto-line RET (n)</kbd>     |
改写模式     |                     | <kbd>M-x overwrite-mode RETURN</kbd> | 

### 增量查找 Incremental Search

操作     | 命令名称             | 快捷键           | 备注
:-       | :-                   | :-               | :-
后向查找 | isearch-backward     | <kbd>C-r</kbd>   |
前向查找 | isearch-forward      | <kbd>C-s</kbd>   | 
查找替换 | query-replace        | <kbd>M-%</kbd>   |
正则替换 | query-replace-regexp | <kbd>C-M-%</kbd> |

### 选择 Selecting

操作           | 命令名称                | 快捷键                                | 备注
:-             | :-                      | :-                                    | :-
标记           | set-mark-command        | <kbd>C-@</kbd> 或 <kbd>C-Space</kbd>  | 即鼠标点选拖动前的定位
转换光标和标记 | exchange-point-and-mark | <kbd>C-x C-x</kbd>                    |
选择段         | mark-paragraph          | <kbd>M-h</kbd>                        |
选择页面       | mark-page               | <kbd>C-x C-p</kbd>                    | 分页符以 ^L 分隔
全选           | mark-whole-buffer       | <kbd>C-x h</kbd>                      |

### 移除和删除 Killing and Deleting

移除进入移除环（剪贴板），删除不进入移除环。

操作               | 命令名称                          | 快捷键                             | 备注
:-                 | :-                                | :-                                 | :-
删除一个字符       | delete-char                       | <kbd>C-d</kbd> 或 <kbd>Del</kbd>   | 不进入 kill-ring
向前删除一个字符   | delete-backward-char              | <kbd>Backspace</kbd>               |
移除一个词         | kill-word                         | <kbd>M-d</kbd>                     | 向后删除到词的边界
向前移除一个词     | backward-kill-word                | <kbd>M-DEL</kbd>                   |
移除一行           | kill-line                         | <kbd>C-k</kbd>                     | 按两次删除一行，第一次删除文本，第二次删除换行符
移除句             | kill-sentence                     | <kbd>M-k</kbd>                     |
移除区域           | kill-region                       | <kbd>C-w</kbd>                     | 删除标记和当前光标
移除段             | kill-paragraph                    |                                    |
反向移除段         | backward-kill-paragraph           |                                    |
复制               | kill-ring-save                    | <kbd>M-w</kbd> 或 <kbd>C-Ins</kbd> | 和剪切类似，但不删除
粘帖（召回）       | yank                              | <kbd>C-y</kbd> 或 <kbd>C-Ins</kbd> | 可理解为粘帖，但其实是从 kill-ring 中召回
粘帖（召回前一个） | yank-pop                          | <kbd>M-y</kbd>                     | 需上一个命令是 <kbd>C-y</kbd>，从 kiil-ring 轮询下一个文本召回
插入一行           | electric-newline-and-maybe-indent | <kbd>C-j</kbd>                     | 根据 mode 确定是否换行 
剪切到粘贴板       | clipboard-kill-region             |                                    |
复制到粘贴板       | clipboard-kill-ring-save          |                                    |
召回粘贴板         | clipboard-yank                    |                                    |
交换前字符         | transpose-chars                   | <kbd>C-t</kbd>                     |
交换前词           | transpose-words                   | <kbd>M-t</kbd>                     |
交换前行           | transpose-lines                   | <kbd>C-x C-t</kbd>                 |

可以设置移除环的深度：`M-x set-variable RETURN kill-ring-max RETURN new-value RETURN`

### 重复命令 

操作          | 命令名称           | 快捷键                      | 备注
:-            | :-                 | :-                          | :-
重复 n 次命令 |                    | <kbd>M-n COMMAND</kbd>      | n 为要重复的次数, COMMAND 是命令.
重复命令      | universal-argument | <kbd>C-u (n) COMMAND</kbd>  | 带 n 同 M-n 相同，不带 n 则执行 4 次，<br /> 多次输入 <kbd>C-u</kbd> 是 4 的倍数次。

### 转化

操作                 | 命令名称        | 快捷键              | 备注
:-                   | :-              | :-                  | :-
单词首字符转大写     | capitalize-word | <kbd>M-c</kbd>      |
整个单词转为大写     | upcase-word     | <kbd>M-u</kbd>      |
整个单词转为小写     | downcase-word   | <kbd>M-l</kbd>      |
选定区域全部改为小写 | downcase-region | <kbd>C-x C-l</kbd>  |
选定区域全部改为大写 | upcase-region   | <kbd>C-x C-u</kbd>  |

### 书签 Bookmark

书签文件位置 `~/.emacs.bmk`

操作       | 命令名称            | 快捷键             | 备注
:-         | :-                  | :-                 | :-
建立书签   | bookmark-set        | <kbd>C-x r m</kbd> |
移动到书签 | bookmark-jump       | <kbd>C-x r b</kbd> |
书签重命名 | bookmark-rename     |                    |
删除书签   | bookmark-remove     |                    |
书签目录   | bookmark-bmenu-list | <kbd>C-x r l</kbd> | 打开书签目录

### SHELL

操作      | 命令名称                     | 快捷键 | 备注
:-        | :-                           | :-     | :-
打开Shell | <kbd>M-x</kbd>               |        |
执行命令  | <kbd>M-! shell-command</kbd> |        |
交互Shell | <kbd>M-x shell</kbd>         |        | 常见命令，需要先输入 <kbd>C-c</kbd> 转义

### 帮助 Help

操作        | 命令名称                 | 快捷键             | 备注
:-          | :-                       | :-                 | :-
查看命令    | describe-key-briefly     | <kbd>C-h c</kbd>   |
查看按键    | describe-key             | <kbd>C-h k</kbd>   |
最近100字符 | view-lossage             | <kbd>C-h l</kbd>   |
按键绑定    | where-is                 | <kbd>C-h w</kbd>   |
查看函数    | describe-function        | <kbd>C-h f</kbd>   | 
查看变量    | describe-variable        | <kbd>C-h v</kbd>   |
查看模式    | describe-mode            | <kbd>C-h m</kbd>   |
缓冲区绑定  | describe-bindings        | <kbd>C-h b</kbd>   |
查看语法表  | describe-syntax          | <kbd>C-h s</kbd>   |
查看指南    | help-with-tutorial       | <kbd>C-h t</kbd>   |
启动程序    | info                     | <kbd>C-h i</kbd>   |
帮助列表    |                          | <kbd>C-h ?</kbd>   |
查看快捷键  |                          | <kbd>C-h C-h</kbd> | 

### 简写模式 Abbrev Mode

操作               | 命令名称                  | 快捷键                                     | 备注
:-                 | :-                        | :-                                         | :-
进入或退出简写模式 | abbrev-mode               |                                            |
词后输入全局简写词 | inverse-add-glabal-abbrev | <kbd>C-x a -</kbd> 或 <kbd>C-x a i g</kbd> |
词后输入局部简写词 | inverse-add-mode-abbrev   | <kbd>C-x a i l</kbd>                       |
撤销最近一个简写词 | unexpand-abbrev           |                                            |
保存简写词列表     | write-abbrev-file         |                                            |
编辑简写词列表     | edit-abbrevs              |                                            |
查看简写词列表     | list-abbrevs              |                                            |
本次警用简写词列表 | kill-all-abbrevs          |                                            |

### 邮件 Mail 和 新闻组 UseNet

操作               | 命令名称                  | 快捷键                                     | 备注
:-                 | :-                        | :-                                         | :-
写邮件             |                           | <kbd>C-x m</kbd>                           | 可以进入邮件模式

建议使用邮件客户端，比如 ThunderBird 处理邮件；建议使用客户端访问新闻组。

### FTP / Telnet / W3 

建议自行探索

### 制表符

操作           | 命令名称                   | 快捷键 | 备注
:-             | :-                         | :-     | :-
改变制表符设置 | edit-tabs-stops            |        |
空格转制表符   | tabify                     |        |
制表符转空格   | untabify                   |        |
段落重排       | fill-individual-paragraphs |        |

### 矩形模式

操作             | 命令名称         | 快捷键             | 备注
:-               | :-               | :-                 | :-
移除一个矩形     | kill-rectangle   | <kbd>C-x r k</kbd> |
删除一个矩形     | delete-rectangle | <kbd>C-x r d</kbd> |
召回一个矩形     | yank-rectangle   | <kbd>C-x r y</kbd> |
清空一个矩形     | clear-rectangle  | <kbd>C-x r c</kbd> |
插入一个空白矩形 | open-rectangle   | <kbd>C-x r o</kbd> |

### 图形模式

建议自行探索

### 大纲模式 outline mode

大纲提供了一种一览全局的视图。

```txt title="传统目录"
C Programming Language

目录

第一章 导言
1.1 入门
1.2 变量和算术表达式
1.3 for语句
第二章 类型、运算符和表达式
2.1 变量名
2.2 数据类型及长度
2.3 常量
```

```txt title="大纲模式"
C Programming Language

* 目录

* 第一章 导言
** 1.1 入门
** 1.2 变量和算术表达式
** 1.3 for语句

* 第二章 类型、运算符和表达式
** 2.1 变量名
** 2.2 数据类型及长度
** 2.3 常量
```

大纲模式中的概念：

  * 正文（Body）：除标题行以外的其他行
  * 标题（Heading）：以一个或多个星号加一个空格开始的行；大纲模式用变量 outline-regexp 控制。

:::tip
```lisp 
(setq outline-regexp "\\(\\.11\\)\\|\\(\\.1e2\\)\\|\\(\\.lev3\\)\\|\\(\\.level4\\)") 
```
:::

标题和正文行的组合：

  * 条目（Entry）： 标题和其下所有的正文行组成一个条目
  * 子树（Subtree）： 标题和其下的所有子标题以及它们的正文行组成一棵子树


操作               | 命令名称                         | 快捷键             | 备注
:-                 | :-                               | :-                 | :-
移到下一个标题     | outline-next-visible-heading     | <kbd>C-c C-n</kbd> |
移到上一个标题     | outline-previous-visible-heading | <kbd>C-c C-p</kbd> |	
移到下一个同级标题 | outline-forward-same-level       | <kbd>C-c C-f</kbd> |
移到上一个同级标题 | outline-backward-same-level      | <kbd>C-c C-b</kbd> |	
移到上一级标题     | outline-up-heading               | <kbd>C-c C-u</kbd> |
隐藏正文行         | hide-body                        | <kbd>C-c C-t</kbd> |
显示正文行         | show-body                        | <kbd>C-c C-a</kbd> |
隐藏子节点         | hide-sublevels                   | <kbd>C-c C-q</kbd> | 可用 <kbd>C-u</kbd> 或 <kbd>M-(n)</kbd> 实现递归
隐藏其它节点       | hide-other                       | <kbd>C-c C-o</kbd> | 
显示子树           | show-subtree                     | <kbd>C-c C-s</kbd> |
隐藏子树		   | hide-subtree					  | <kbd>C-c C-d</kbd> |
显示孩子节点       | show-children                    | <kbd>C-c TAB</kbd> |
显示分支节点       | show-branches					  | <kbd>C-c C-k</kbd> |
隐藏叶子节点	   | hide-leaves					  | <kbd>C-c C-l</kbd> |
显示记录           | show-entry						  | <kbd>C-c C-e</kbd> |
隐藏记录           | hide-entry						  | <kbd>C-c C-c</kbd> |

更多可转到 <Link to="/docs/emacs/emacs-org-mode">Emacs org mode</Link> 查看

### TEX 和 LATEX 模式

Donald Knuth 创造了 TEX；LATEX 是 Leslie Lamport 开发的 TEX 命令。

它们是带有排版标记的模式，常用来写论文排版格式。

其中的 Html-helper 模式带有非常多的命令。

### 版本控制 Version Control

了解即可，现代更多的是 Git 和 SVN 进行版本控制。
