---
sidebar_position: 4
---


# Vim 专家

如果想在 Vim 上更进一步，可了解以下主题。

1. 内置的 ex 命令
2. 正则表达式
3. 使用 GVim，定制 GVim
4. Vim 作为编程 IDE
5. Vim 多窗口
6. Vim 脚本

## 一个脚本的例子

将下面的文本写入文件 `C:\Users\[USERNAME]\vimfiles\vimrc` 中：

```vim
let currentHour = strftime("%H")
echo "currentHour is " . currentHour
if currentHour < 6
  let colorScheme = "darkblue"
elseif currentHour < 12
  let colorScheme = "moring"
elseif currentHour < 18
  let colorScheme = "shine"
else
  let colorScheme = "evening"
endif
echo "setting color scheme to ". colorScheme
execute "colorschem " . colorScheme
```

Vim 脚本也是一种图灵完美的脚本语言。通过包引入，还可以支持 python, ruby, lua, tcl 等脚本语言。

上述脚本的功能是实现，按打开 Vim 的时间来确定 Vim 颜色主题，这很能体现 Vim 哲学。

## Vim Guru

我用的更多的是 Emacs，即使有另一个平行时空，我预计也不会到达这个级别。

但是，不少 Vim 骨灰级用户都是集睿智与幽默于一身的人，我很喜欢他们，他们的插件和作品中都透出一种相似的沉稳。
