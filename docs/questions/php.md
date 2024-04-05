---
sidebar_position: 11
---

# PHP 题目

1. PHP 写冒泡排序

<details>
    <summary>答案</summary>
```php
$arr = [3,5,7,6,8,4,9,1,2];
$sorted_arr = bubble_sort($arr);
echo 'Sorted Array: '.implode(',', $sorted_arr);

function bubble_sort($arr) {
    for ($i = count($arr) - 1; $i >= 1; $i--) {
        $changed = FALSE;
        for ($j = 0; $j <= $i - 1; $j++) {
            if ($arr[$j] > $arr[$j + 1]) {
                list ($arr[$j], $arr[$j+1]) = array($arr[$j+1], $arr[$j]);
                $changed = TRUE;
            }
        }
        if (!$changed) {
           break; 
        }
    }
    return $arr;
}
```
</details>


2. 哪些值为 FALSE？

<details>
    <summary>答案</summary>
```php
0
0.0
""
"0"
array()
NULL
```
</details>

3. 大数求和？

计算 9999999999999999999999999999 + 123

<details>
    <summary>答案</summary>

可直接计算
</details>

4. call_user_func() 和 call_user_func_array() 区别？

<details>
    <summary>答案</summary>
1. call_user_func 可接受多个参数， call_user_func_array 接受数组
2. call_user_func 不可传引用， call_user_func_array 可传引用
</details>
    
5. PHP 常见资源有哪些

<details>
    <summary>答案</summary>
1. socket
2. file
3. mysql
4. curl
5. gd
</details>
    
6. PHP 闭包

输出？
```php
$arr = ['a', 'B', 'c', 'd', 'e'];
$arr2 = array_map(function($w) {
    return strtoupper($w);
}, $arr);
var_dump($arr2);
```
<details>
    <summary>答案</summary>
```text
array(5) { [0]=> string(1) "A" [1]=> string(1) "B" [2]=> string(1) "C" [3]=> string(1) "D" [4]=> string(1) "E" } 
```
</details>
    
6. PHP 递归

用递归计算阶乘10。

<details>
    <summary>答案</summary>

```php
echo '10!='.fact(10);

function fact($n) {
    if ($n <= 1) {
        return 1;
    }
    return $n * fact($n - 1);
} 
```
</details>

用递归计算斐波拉契10。

<details>
    <summary>答案</summary>

```php
echo '10th Fibonacci Sequence is '.fib(10);

function fib($n) {
    if ($n <= 2) {
        return 1;
    }
    return fib($n - 1) + $fib($n - 2);
} 
```
</details>


7. PHP PSR-4标准

叙述 PSR-4 标准

<details>
    <summary>答案</summary>

略
</details>

7. PHP 求最小子串

<details>
    <summary>答案</summary>

略
</details>

8. PHP 正则

<details>
    <summary>答案</summary>

略
</details>


9. PHP 内部实现

<details>
    <summary>答案</summary>

略
</details>

10. PHP 安全

谈谈 PHP 安全

<details>
    <summary>答案</summary>

1. 输入校验
2. XSS
3. JSON
4. SQL 注入
5. CSRF
6. SSRF
7. 短信轰炸
8. 接口防刷
</details>

11. CGI 和 FastCGI 区别

<details>
    <summary>答案</summary>

- CGI：每次请求 fork 一个新进程来运行外部程序和解释器；
- FastCGI：TCP 通信
</details>

12. PHP-FPM 管理方式

<details>
    <summary>答案</summary>

- static 固定进程管理
- dynamic 动态进程管理
- ondemand 按需进程管理

</details>

13. 如何查访问次数最多的 IP

<details>
    <summary>答案</summary>

```bash
awk -F "[ ]" '{print $1}' ./access.log | uniq -c | sort -klnr | head -5
```

</details>

14. 如何设置文件权限

<details>
    <summary>答案</summary>

```bash
chmod u+rw file
```
或
```bash
chmod 600 file
```

</details>


15. Linux 事件模型

<details>
    <summary>答案</summary>

1. select

上限 1024

2. poll


3. epoll

- epoll 是 Linux 多路复用 IO 接口，在用户孔吉安维护两个表：Interest List 和 Ready List。
- epoll 能在大量并发连接，但仅有少量活跃的情况下，提高系统的 CPU 利用率。
- epoll 具有事件通知机制。
- epoll 有两种触发机制：Level-Triggered 和 Edge-Triggered，ET 效率更高
</details>

16. 处理高并发

<details>
    <summary>答案</summary>

1. 指标
   - 吞吐量
   - 响应时间
   - 并发用户数
2. 秒杀系统架构：用户 -> 客户端 -> 网关/负载均衡 -> 服务器 -> 缓存、消息队列 -> 数据库
   - 用户：引导用户分数不同时间使用系统，避免涌现，可以做一个排队系统，增加前置页面。
   - 客户端：静态资源缓存，前端页面限制频率，按钮按概率触发。
   - 网关/负载均衡：将用户请求均匀分配到后端、DDOS 防护、IP 屏蔽
   - 服务器：防止缓存雪崩（控制请求到达网关时间，超时则丢弃）、限流（令牌桶算法）
   - 缓存：memcache 和 redis
   - 数据库：合理索引、主从分离、分表、减少事务
   - 消息队列：无法丢弃请求时，使用消息队列
   - 其它：业务分解
   - 总原则：逐级消化请求
   
</details>
