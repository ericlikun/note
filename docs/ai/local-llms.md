---
sidebar_position: 51
---

# 本地对话助手

除了使用在线的商业模型服务，还可以在本地搭建基于 LLM 的对话助手。

使用场景：隐私、商业秘密。

可选项：

1. [LM Studio](https://lmstudio.ai/)
2. [Ollama](https://ollama.ai/)

（2024.02 更新）

## 1. LM Studio

目前支持平台：Apple Silicon, Windows, Linux (beta)

- 软件安装：官网下载安装程序安装。
- 模型安装：内置下载。

### 问题：无法下载模型的解决

复制模型地址，离线下载模型，然后：

1. 先指定一个模型目录，假设为：
```
D:\ai-models\lm-studio\models
```

2. 再在其中创建目录，并把下载好的模型文件放到这个目录中
```
D:\ai-models\lm-studio\models\Publisher\Repository
``` 

3. 重启 LM Studio，即可载入对话了。

### 模型性能要求

模型有推荐性能要求：Apple Silicon Mac 可以查看 RAM，带 GPU 的 Windows PC 可查看 VRAM，看是否满足。

一般模型 Apple M1 可以运行得很快。 

### 使用方式

1. 直接对话：是最常用模式。
2. Web 方式：可通过浏览器使用。
3. Web API 方式：可勾选 CORS 选项，LM Studio 可给其它程序提供 API 集成。

## 2. Ollama

目前支持平台：Mac, Windows

- 软件安装：官网下载安装程序安装。
- 模型安装：通过终端命令。

  - 运行模型：`ollama run <model_name>` 
  - 下载模型：`ollama pull <model_name>` 

### 模型参数调整

通过命令行设置参数。




