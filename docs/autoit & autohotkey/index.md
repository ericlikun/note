---
sidebar_position: 1
---

# AutoIt & AutoHotkey

本栏目主要描述 AutoIt & AutoHotkey 脚本语言。

它们是先后诞生的 Windows 自动化任务脚本语言，但两种语言的发展相互影响，常被一起提到的。

## AutoIt 介绍

AutoIt 是免费软件（freeware），也是一种类 BASIC 语法的 Windows 脚本语言，为 Windows 图形化接口自动化而设计，它结合使用模拟击键、鼠标移动和窗口及控件操作，其他语言不可能或可靠的方式自动执行任务。

官方网站：https://www.autoitscript.com/

## AutoHotkey 介绍

强大、易学的 Windows 终极自动化语言。

官方网站：https://www.autohotkey.com/

## 软件用途

- 自动化执行任务
- 自动化 GUI 操作
- 自动化测试

## 我的评价

AutoIt 和 AutoHotkey 几乎能完成 Windows 所有自动化任务，如名字一样，AutoHotkey 偏向个人效率工具定制，更容易绑定热键，AutoHotKey 中文社区更大。对于新进入的使用者，可能不适应 BASIC 语法，对某些自动化操作也需要了解 Windows 底层原理细节，因此需要个人探索。

实际上，除了脚本引擎之外，软件包中的程序都是采用本身实现的，比如下载及安装编译器等功能组件。

## 几个例子

**例子一：点击屏幕。**

如果不清楚直接调用功能的 API 接口，仍可以用最笨拙的方式——模拟鼠标来点击屏幕任意坐标。

```autohotkey
MouseClick, left, 1688, 888
```

**例子二：AutoHotkey 自定义快捷键。**

在 AutoHotkey，非常容易定义自己的快捷键。

```autohotkey
^n::Run "c:\windows\system32\notepad.exe"
^e::Run "D:\soft\everedit-4\EverEdit.exe"
```
上面的代码编译运行后，在桌面或程序热键不冲突时，可以使用 `CRTL+N` 启动记事本，用 `CTRL+E` 启动 EverEdit 编辑器。

因为 AutoHotkey 已将热键简化为符号。

- #：`WIN`
- !：`ALT`
- ^：`CTRL`
- +：`SHIFT`

**例子三：AutoHotkey 自定义缩写词。**

如果想快速输入方引号『』和「」，可以用脚本定义缩写词。

```autohotkey
; 定义格式：::/缩写::文本
::/yh::「」
::/syh::『』
::/gs::你有这么高速运转的机械进入中国
::/alt::https://alternativeto.cn
```

分号 ; 后是注释。上面的代码编译运行后，当输入 /yh空格，即可改写为「」 ，你还可以试试 /alt空格，效果不错是不是。

### 开机时启动脚本

将脚本加入 Windows 的启动目录，[YOUR_USERNAME] 为用户名。

`C:\Users\[YOUR_USERNAME]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`

## 优势

- AutoIt 内置脚本编辑器，此编辑器基于 SciTE，有语法高亮和代码折叠，AutoIt 在 SciTE 上定制了 Lexer，并创建了一个名为 SciTE4AutoIt3 的特殊安装程序。
- AutoHotkey 背后有一家非盈利组织 AutoHotkey Foundation LLC 运营，并建立了一个良好的社区。
- 适合编写简单的自动化测试。
- 比 Python 更容易实现效果。

## 劣势

- 两种软件的运行速度对 Windows 任务自动化足够快，但对商业逻辑来说相对较慢。
- 大规模自动化使用需要足够的经验。
- 与 Windows 系统深度绑定，无法跨平台。

## 资源

- AutoHotKey 论坛中文版：https://www.autohotkey.com/boards/viewforum.php?f=26
- 小众软件 AutoHotKey 分类：https://www.appinn.com/category/autohotkey/