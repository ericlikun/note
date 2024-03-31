---
sidebar_position: 1
---

# Web 开发概述

## 概念

HTML
: 超文本链接标记语言

CSS
: 层级样式表

JavaScript
: 浏览器编程语言

REST
: REST（Representational State Transfer，具象状态传输）是一种软件架构风格，它定义了一组约束，用于约束分布式 Internet 规模的超媒体系统（如 Web）的体系结构应如何运行。REST 架构风格强调统一接口、组件的独立部署、组件之间交互的可伸缩性，以及创建分层架构来促进缓存，以减少用户感知的延迟、加强安全性并封装遗留系统。

RESTful
: 遵循 REST 架构约束的应用程序可以非正式地描述为 RESTful。然而，这个术语更常与基于 HTTP 的 API 的设计以及被广泛认为的关于资源响应的“动词”（HTTP 方法）的最佳实践相关联，而这些实践与最初制定的 REST 关系不大，甚至经常与概念不一致。



## REST 特征：

Web 应用程序最重要的 REST 原则是：

- 客户端和服务器之间请求无状态。
- 从客户端到服务器的每个请求都必须包含理解请求所必需的信息。
- 无状态请求可由任何服务器回答，适合云计算。
- 客户端缓存数据。

# RESTful

服务器端，应用程序状态和功能可以分为各种资源。资源是一个概念实体，它向客户端公开。每个资源都使用 URI (Universal Resource Identifier) 得唯一的地址。所有资源都共享统一的接口，以便在客户端和服务器之间传输状态。

使用标准  HTTP 方法，比如 GET、PUT、POST 和 DELETE。Hypermedia 是应用程序状态的引擎，资源表示通过超链接互联。

域名：应该尽量将API部署在专用域名之下。https://api.example.com。如果确定API很简单，不会有进一步扩展，可以考虑放在主域名下。

版本（Versioning）：将API的版本号放入URL。

http://www.example.com/app/1.0/foo
http://www.example.com/app/1.1/foo
http://www.example.com/app/2.0/foo

版本号也可放在HTTP头信息中，不同的版本，可以理解成同一种资源的不同表现形式，所以应该采用同一个URL。

版本号可以在HTTP请求头信息的Accept字段中进行区分（参见Versioning REST Services）：

```
Accept: vnd.example-com.foo+json; version=1.0
Accept: vnd.example-com.foo+json; version=1.1
Accept: vnd.example-com.foo+json; version=2.0
```

状态码：

- 200 OK - [GET]：服务器成功返回。
- 201 CREATED - [POST/PUT/PATCH]：新建或修改成功。
- 202 Accepted - [*]：请求已进入后台排队（异步任务）。
- 204 NO CONTENT - [DELETE]：删除数据成功。
- 400 INVALID REQUEST - [POST/PUT/PATCH]：请求有错误，服务器没有进行新建或修改数据的操作
- 401 Unauthorized - [*]：没有权限（令牌、用户名、密码错误）。
- 403 Forbidden - [*] 用户得到授权（与401错误相对），但是访问是被禁止的。
- 404 NOT FOUND - [*]：不存在的记录。
- 406 Not Acceptable - [GET]：用户请求的格式不可得（比如用户请求JSON格式，但是只有XML格式）。
- 410 Gone - [GET]：资源被永久删除，且不会再得到的。
- 422 Unprocesable entity - [POST/PUT/PATCH] 当创建一个对象时，发生一个验证错误。
- 500 INTERNAL SERVER ERROR - [*]：服务器发生错误，用户将无法判断发出的请求是否成功。

## HTML


## CSS


## JavaScript 
