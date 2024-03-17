---
sidebar_position: 1
---

# PyQt & PySide 介绍

## PyQt 介绍

PyQt 是 Qt 的 Python 绑定，Qt 是一个支持所有主流平台的 GUI 库，所以 PyQt 也支持 Windows、macOS、Linux、iOS 和 Android。

### PyQt 许可证

PyQt 可使用两种许可证，GPL 3 或 商业许可证。虽然 Qt 可使用 LGPL 许可，但 PyQt 在 LGPL 下不可用。

PyQt 不包含 Qt 的副本，但其 wheels 包中含有一份 LGPL 授权的 Qt，如果使用 PyQt，您须获得正确的 Qt 许可证。

### PySide 介绍

PySide 也是 Qt 的 Python 绑定，功能几乎和 PyQt 一样，但少一些文档，及少数接口与 PyQt 有差异。

:::info

Nokia 收购 Qt，作为 Qt 原开发者的 Riverbank Computing 不同意 PyQt 以 LGPL 许可，于是 Nokia 另外开发了 PySide，并以 LGPL 许可证发布。

:::

## Qt for Python

PySide 6 的新名字。

### 为什么使用 PyQt?

- 跨平台，开发一次，多处运行。
- 它包括 1000 多个类。如网络套接字、线程、Unicode、正则表达式、SQL 数据库、SVG、OpenGL、XML、Web 浏览器、帮助系统、多媒体及丰富的 GUI 小部件集。
- 信号/槽机制，耦合度低
- 自带 Qt Designer，一个图形用户界面设计器。支持拖动生成界面，并支持扩展自定义部件。
- 因为 Python 简单，Qt 强大，PyQt 兼得两者优点。

## 我在哪使用 PyQt6 & PySide

在个人项目中：

1. PySide 能快速构建规模较小的 GUI 应用程序原型；
2. 因内置 Web 浏览器组件，可以通过编程和更有想象力的方式使用浏览器。



