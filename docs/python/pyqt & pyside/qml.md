---
sidebar_position: 11
---

# QML 介绍

QML 是以声明式语言编写 GUI，已不是编程新范式。

事实上，通过声明式描述界面是很多 GUI 编程都已实现的功能，家喻户晓的就有 HTML，以及：

- .Net 的 WPF 技术，Microsoft Windows UI 的 XAML
- 早期版本 Firefox 的 XUL
- 现代一些的 Google 公司的 Flutter
- 苹果公司的 SwiftUI

## 例子

pyqt6-qml.py

```python title="pyqt6-qml.py"
import sys

from PyQt6.QtGui import QGuiApplication
from PyQt6.QtQml import QQmlApplicationEngine

app = QGuiApplication(sys.argv)

engine = QQmlApplicationEngine()
engine.quit.connect(app.quit)
engine.load('pyqt6-qml.qml')

sys.exit(app.exec())
```

pyqt6-qml.qml

```qml title="pyqt6-qml.qml"
import QtQuick 2.15
import QtQuick.Controls 2.15

ApplicationWindow {
    visible: true
    width: 400
    height: 600
    title: "QML"

    Rectangle {
        anchors.fill: parent

        Image {
            anchors.fill: parent
            source: "./pyqt6-qml.png"
            fillMode: Image.PreserveAspectCrop
        }

        Rectangle {
            anchors.fill: parent
            color: "transparent"

            Text {
                anchors {
                    bottom: parent.bottom
                    bottomMargin: 12
                    left: parent.left
                    leftMargin: 12
                }
                text: "note.likun.cc"
                font.pixelSize: 24
                color: "white"
            }
        }
    }
}
```

pyqt6-qml.png

任一张宽 400 高 600 的图片。
