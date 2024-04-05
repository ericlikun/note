---
sidebar_position: 2
---

# 计算机网络题目

1. 七层协议

<details>
     <summary>答案</summary>
 
- OSI
  1. 物理层
  2. 数据链路层
  3. 网络层
  4. 传输层
  5. 会话层
  6. 表示层
  7. 应用层
- TCP/IP
  1. OSI1~2：网络接口层
  2. OSI3 网际层IP
  3. OSI4 运输层 TCP/UPD
  4. OSI5~7 应用层 HTTP FTP
</details>

2. IP 地址分类

<details>
     <summary>答案</summary>
     
分类 | 前缀    | 地址范围                       | 网络     |  主机
---- | ------ | ----------------------------- | ------- | -------
A 类 | 0      | 1.0.0.0~127.255.255.255       | 8位      | 24位  
B 类 | 10     | 128.0.0.0~191.255.255.255.255 | 16位     | 16位  
C 类 | 110    | 192.0.0.0~223.255.255.255.255 | 24位     | 8位  
D 类 | 1110   | 224.0.0.0~239.255.255.255.255 | 多播地址  
E 类 | 11110  | 240.0.0.0~247.255.255.255.255 | 预留地址  
</details>


3. HTTP 状态码

<details>
     <summary>答案</summary>
     
- 1xx：正在处理
- 2xx：请求成功
- 3xx：重定向
- 4xx：非法请求，客户端错误
- 5xx：服务器端错误
</details>


4. GET 和 POST 区别

<details>
     <summary>答案</summary>
     
GET：保持幂等，多次请求保持一致，受 URL 长度限制
POST：请求无大小限制
</details>

5. TCP 和 UDP 区别

<details>
     <summary>答案</summary>
     
TCP：面向连接，可靠，支持点对点通信，传输慢，传输字节流，有拥塞控制，首部 20 个字节开销大
UDP：无连接，不保证可靠，支持一对多、一对多，传输快，传输报文，无拥塞控制，首部 8 个字节，开销较小
</details>

6. TCP 三次握手

<details>
     <summary>答案</summary>
     
SYN
SYN/ACK
ACK
</details>


7. SESSION 和 COOKIE 区别

<details>
     <summary>答案</summary>

- SESSION：保存在服务端，由 sessionid 关联，占服务器空间
- COOKIE：浏览器对 COOKIE 大小有限制，可伪造
</details>
