---
sidebar_position: 6
---

# Emacs Lisp

Emacs Lisp 为 Emacs 带来强大的扩展和功能自我进化的能力。

Emacs Lisp 是一种 Emacs 内置的图灵完备的编程语言，Lisp 是 List Processor 的缩写，即链表处理。

**Emacs Lisp 哲学**：操作和数据统一是在一个链表中，在运行时可修改。

LeetCode 中有一些中等难度的题，是实现一个 Lisp 表达式的四则运算处理器，常规解法是实现一个状态机，简洁解法是用递归。值得一提的是，Lisp 本身的求解过程就是递归。

## 解释运行

你也可以把 Emacs Lisp 当成一种独立的编程语言来学习，Emacs 除开核心的大部分功能是由 Emacs Lisp 实现，所以你的代码和其本身没有区别。

Emacs Lisp 是一种解释型编程语言，运行它的命令是：

```shell
emacs -k hello-world.el
```

看起来和执行 Python 脚本没什么不同。 

```shell 
python hello.py
```

## 基本元素

  * 函数：`(func-name argument1 argument2 ...)`，类似 C 或 Pascal 的 `func_name (argument1, argument2, ...)`
  * 变量：没有类型，可以取任何值；
  * ATOM：
    * 整数：`-2^27`~`2^27-1`
    * 浮点数：`123.456e3`
    * 字符：必须带有一个前导问号，例如`?a`；ESC、LINEFED/NEWLINE、TAB 分别是 `\e`，`\n`，`\t`
    * 字符串：`"abc"`，引号中的引号需要转意 `"abc\"efg\"hij"`
    * 布尔值：`t` 表示真，`nil` 表示假；
    * 符号：即各种名字，类似指针，是在名字前加一个单引号 `'`。

## 括号的位置

LISP 和 C/Pascal 其实很是类似的，Emacs Lisp 的运行速度其实非常快，用户可以通过 eval-last-sexp 实践。

C 语言中的表达式 `1 + 2`，在 Lisp 中是 `(+ 1 2)`。

操作步骤：
1. 按 <kbd>C-x b</kbd>，输入 `*scratch*`；
2. 输入 `(+ 1 2)`，确保光标在此 S 表达式最后；
3. 按 <kbd>C-x C-e</kbd>，则在下方会显示 `3 (#o3, #x3, ?\C-c)`

表示求值的结果等于 3。

## 赋值

setq 是一个函数，可以一次对一个或多个变量赋值。

Setq 例子

```lisp
(setq a a-value
      b b-value
	  c c-value)
```

## 函数

```lisp
(defun count-words-buffer ()
  (let ((count 0))
    (goto-char (point-min))
	(while (< (piont) (point-max))
	  (forward-word 1)
	  (setq count (1+ count)))
	(message "buffer contains %d words." count)))
```
## 语句

### let

```lisp
(let ((var1 value1) (var2 value2) ...)
  statement-block)

(let (var1 var2 var3 ...)
  statement-block)

(let (var1 (var2 value2) var3 ...)
  statement-block)
```

### if 语句

```lisp
(if condition
  true-case
  false-block)
```

### cond 语句

```lisp
(cond
  (condition1
    statement-block)
  (condition2
    statement-block)
  ...)
```

### while 语句

```lisp
(while condition
  statement-block)
```

## message 例子

```lisp
;; 显示为 "hi there" is a string, 142 is a number, and q is a character
(message "\"%s\" is a string, %d is a number, and %c is a character" 
  "hi there" 142 ?q)
```

```c
// 显示为 "hi there" is a string, 142 is a number, and q is a character
printf("\"%s\" is a string, %d is a number, and %c is a character\n", 
  "hi there", 142, 'q')
```

## save-excursion

```lisp
(save-excursion 
  statement-block)
  
(defun count-words-buffer ()
  (save-excursion 
    (let ((count 0))
      (goto-char (point-min))
  	  (while (< (piont) (point-max))
	    (forward-word 1)
	    (setq count (1+ count)))
	  (message "buffer contains %d words." count))))
```

## 运算符

### 算术运算符
  * `+` `-` `*` `/` 
  * `%` 
  * `1+` `1-` 
  * `max` `min`

### 比较运算符
  * `>` `<` `>=` `<=` 
  * `/=`
  * `=` 
  * `equal`(用于字符串和其他复杂对象)

### 逻辑运算符
  * `and` `or` `not`
  
  
## 语句块

```lisp title="progn"
(progn
  statement-block)
```

## 列表

```lisp title="列表"
(list 2 3 4 5)
(length list)
(cons 1 (list 2 3 4 5)
(append list1 list2)
(pop list)
(nbutlast list n)
(setcar list x)
(setcdr list x)
(setq calc-stack (cons x calc-stack))
(car calc-stack)
(setq calc-stack (cdr calc-stack))
```

## Lisp 语言要素

```lisp
(list 2 3 4 5)

; 第一个元素
(car list)

; 第二个到最后一个
(cdr list)

; 第 n 个元素
(nth n list)

; 最后一个元素
(car (last list))

; 第 n 个到最后一个
(nthcdr n list)

; 不包含 n 到最后一个
(butlast list n)


```
