---
sidebar_position: 4
---


# Cordova 介绍

官方文档：https://cordova.apache.org/docs/en/latest/

Apache Cordova is an open-source mobile development framework. It allows you to use standard web technologies - HTML5, CSS3, and JavaScript for cross-platform development. Applications execute within wrappers targeted to each platform, and rely on standards-compliant API bindings to access each device's capabilities such as sensors, data, network status, etc.

在其架构中，WebView 提供用户界面，Web App 编写应用代码，插件与设备本地 API 交互。

2024 年，虽然好些大公司有继续维护 Cordova 开发的应用，但显然不再是好的选择。 

## Cordova 下载与安装

```shell
npm install -g cordova
```

### 安装注意事项

Cordova 是一种混合技术，涉及不同平台和软件套装的交叉编译。

1. 一般，在 x86\_32 或 x86\_64 架构上，无法编译 Arm 架构的应用，如在 Windows 上无法编译 iOS 的应用。

2. Android API 比较碎片化，使用什么版本的依赖，需查询 Android API Level Support 表。

3. 在本文的编写时，官方推荐使用 JDK 11 和 cordova-android 10.0.0，如果低于 cordova-android 10.0.0，则建议用 JDK 8，而相应的，Gradle 也需要配合 JDK 版本，对应不上会报错。

4. 原则上，为获得更广泛的旧设备兼容性，建议安装能运行的最低版本开发包。

