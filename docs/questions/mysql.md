---
sidebar_position: 21
---

# MySQL 题目


1. MyISAM 和 InnoDB 的区别
<details>
    <summary>答案</summary>
    
- MyISAM 不支持事务
- InnoDB 支持事务

</details>

2. 事务的 ACID 特性

<details>
    <summary>答案</summary>

1. A 原子性 Atomicity
2. C 一致性 Consistency
3. I 隔离性 Isolation
4. D 持久性 Durability

</details>


3. 如何发现慢SQL

 <details>
     <summary>答案</summary>
 
1. 开启慢查询
set global slow_query_log='ON';
set global slow_query_log_file='path/to/slow.log';
set global long_query_time=1;

2. explain [SQL 语句]
 </details>

4. 如何优化性能

<details>
     <summary>答案</summary>
 
1. 读写分离
2. 索引优化
3. 分析复杂SQL
4. 使用 kv 缓存，如 memcache、redis
5. 分库分表
</details>

5. 比较 memcache、redis

<details>
     <summary>答案</summary>
 
略
</details>


