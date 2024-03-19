---
sidebar_position: 1
---

# Tkinter 笔记

## Tkinter 介绍

Tkinter 是 Tcl/Tk 的 Python 绑定，Python 内置的 GUI 组件，适合使用它完成中小规模的 GUI 应用程序。

:::info

Tcl/Tk 是一种更早的跨平台脚本语言，虽然看起来松散，但也可以用来编写任何程序。

:::

```python 
from tkinter import *

root = Tk()
root.mainloop()
```


```python
from tkinter import *

root = Tk()
root.title("note.likun.cc")
root.configure(background="yellow")
root.minsize(200, 200)
root.maxsize(500, 500)
root.geometry("300x300+50+50")  # 格式 width x height + x + y
root.mainloop()
```
