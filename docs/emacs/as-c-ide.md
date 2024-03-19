---
sidebar_position: 5
---

# Emacs 作为编程环境

Emacs 具有 C、Emacs Lisp、Lisp、Fortran、Perl 等语言模式，结合它的强定制性，可实现编写代码，调试，运行。


### 文件扩展名关联模式

```lisp title="关联 ada 语言的例子"
(autoload 'ada-mode "ada")
(setq auto-mode-alist (cons '("\\.a$". ada-mode ) auto-mode-alist))
```

### 语言感知

Emacs 把语法信息放在语法表（syntax tables）中，分为全局语法表和局部语法表：

  * 单词：标识符和数字
  * 符号：操作符
  * 括号：如 () []
  * 空白：空格和制表符
  * 注释：单行和多行注释

还包括，如：

  * 语句
  * 语句块
  * 函数
  * 过程
  * S表达式
  
### 缩进 indent

对选中进行缩进，indent-region，<kbd>ESC C-\ </kbd>
跳到缩进后，back-to-indentation，<kbd>ESC m</kbd>
删除缩进，delete-indentation，<kbd>ECS ^</kbd>

## 作为 C 和 C++ 编程环境

* `.c`, `.h`, `.y`, `.lex` 文件自动进入 C 语言模式，快捷键 <kbd>M-x c-mode RET</kbd>；
*  `.C`, `.H`, `.cc`, `.hh`, `.cpp`, `.cxx`, `.c++`, `.h++` 文件自动进入 C++ 语言模式，快捷键 <kbd>M-x cc-mode RET</kbd>；

C++ 模式只比 C 模式多出很少几项功能，`.pl` 会进入 Perl 语言模式（perl-mode）是源自 C 语言模式旧版本。

C 模式中，分号 `;` 冒号 `:` 逗号`,` 花括号 `{}` 井号 `#` 等都是自动缩进的。

| 动作         | 键盘操作       | 命令名称                 | 备注 |
| :----------- | :------------- | :----------------------- | ---- |
| 移到语句开始          | <kbd>M-a</kbd>     | c-beginning-of-statement |
| 注释段落重排          | <kbd>M-q</kbd>     | c-fill-paragraph         | 保留缩进和前导字符
| 移到函数开始          | <kbd>C-M-a</kbd>   | beginning-of-defun       |
| 移到函数末尾          | <kbd>C-M-e</kbd>   | end-of-defun             |
| 选中函数              | <kbd>C-M-h</kbd>   | c-mark-function          |
| 缩进函数              | <kbd>C-c C-q</kbd> | c-indent-defun           |
| 移到#define条件的开始 | <kbd>C-c C-u</kbd> | c-up-conditional         |
| 移到上一个#define条件 | <kbd>C-c C-p</kbd> | c-backward-conditional   |
| 移到下一个#define条件 | <kbd>C-c C-n</kbd> | c-forward-conditional    |

## C 缩进风格

| 名称       | 风格                                                                        |
| :--------- | :-------------------------------------------------------------------------- |
| bsd        | BSD 系列的 UNIX 版本使用的编程风格                                          |
| cc-mode    | 默认的编程风格；其他样式都是从它推导出来的                                  |
| ellemtel   | 瑞典 Ellemtel 电讯系统实验室的 C++ 文档里使用的编程风格                     |
| gnu        | Emacs 自身和其他 GNU 程序所使用的 C 语言书写风格                            |
| java       | 在编写 Java 代码时使用的风格（Java 模式的默认值）                           |
| k&r        | Kernighan 和 Ritchie 合著《The C Programming Language》一书中使用的编程风格 |
| linux      | 部分 Linux 内核中 C 代码所使用的一种风格                                    |
| python     | Python 扩展中使用的风格                                                     |
| stroustrup | Bjarne Stroustrup 《The C++ Programming Language》一书中使用的编程风格      |
| user       | 通过定制 .emacs 文件或自定义。                                              |
| whitesmith | Whitesmith 公司在他们的 C 和 C++ 编译器软件的文档里使用的编程风格           |


## 作为 Lisp 编程环境

| 动作              | 键盘操作         | 命令名称      | 备注 |
| :---------------- | :--------------- | :------------ | ---- |
| 移到上个 S 表达式 | <kbd>C-M-b</kbd> | backward-sexp |
| 移到下个 S 表达式 | <kbd>C-M-f</kbd> | forward-sexp |
| 交换 S 表达式 | <kbd>C-M-t</kbd> | transpose-sexps |
| 选中 S 表达式 | <kbd>C-M-@</kbd> | mark-sexp |
| 向后移除 S 表达式 | <kbd>C-M-k</kbd> | kill-sexp |
| 向前移除 S 表达式 | 无 | backward-kill-sexp |
| 移到上个列表 | <kbd>C-M-n</kbd> | forward-list |
| 移到下个列表 | <kbd>C-M-p</kbd> | backward-list |
| 向前移动，进入下一层次 | <kbd>C-M-d</kbd> | down-list |
| 向前移动，退出当前层次 | 无 | up-list |


## Fortran模式

也很少有使用这种语言的机会了。
