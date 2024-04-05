---
sidebar_position: 51
---

# 设计模式题目

1. 单例模式

写一个单例模式例子

```php
<?php
class Singleton {
    private static $instance;

    public static function getInstance() {
        if (static::$instance === null) {
            static::$instance = new static();
        }
        return static::$instance;
    }

    private function __construct() {
    }

    private function __clone() {
    }

    private function __wakeup() {
    }
}
```
2. 抽象工厂

<details>
     <summary>答案</summary>
 
略
</details>

3. 适配器模式

<details>
     <summary>答案</summary>
 
略
</details>
