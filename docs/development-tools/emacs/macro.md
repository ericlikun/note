---
sidebar_position: 4
---

# Emacs 宏

**宏**：macro，是一组被录制的可以反复使用按键动作。

虽然 Emacs 解释为 editor with macros，但宏有其局限：宏不能接受用户的输入，所以无法相应式根据输入选择不同的动作。

因此，宏的使用场景是：重复的键盘操作，当处理不全是字符的拷贝而是包含按键的重复时，就适合使用宏。比如：

* 复制大纲后新建一个文件
* 建立索引目录
* 把表格从一种格式修改为另一种格式
* 一键完成编译、运行和测试


## 快捷键

操作       | 命令名称                  | 快捷键                     | 备注
:-         | :-                        | :-                         | :-
开始录制宏 | kmacro-start-macro        | <kbd>C-x (</kbd>           |
结束录制宏 | kmacro-end-macro          | <kbd>C-x )</kbd>           |
命名最后宏 | name-last-kbd-macro       |                            |
执行最后宏 | kmacro-end-and-call-macro | <kbd>C-x e</kbd>           |
插入宏代码 | insert-kbd-macro          |                            |
执行宏     |                           | <kbd>M-x (macroname)</kbd> |
