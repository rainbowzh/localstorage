<!--
 * @Author: zhouhong07
 * @Date: 2019-08-20 17:33:46
 * @LastEditors: 
 * @LastEditTime: 2019-08-20 20:23:39
 * @Description: file content
 -->
### 使用说明
#### （0）支持的方法
    ```
    import LocalCache from 'cache-localstorage';
    //存储
    LocaCache.set('tom','cat',3);
    //获取
    LocaCache.set('tom');//return a json type
    //判断是否过期
    LocaCache.expired('tom');//return a boolean ,ture <=> expired ,false <=> not expired
    //移除
    LocalCache.remove('tom');
    //return a boolen,true <=> has removed, false <=> not removed
    //清除全部   clear
    LocalCache.clear();
    ```
#### (1)使用方式
##### 1.传入一个object
##### eg:
        ```
        import LocalCache from 'cache-localstorage';
        let a = {key : 'tom' ,value : 'cat' ,time : 3, other:{}};
        LocalCache.set(a);//存储a
        ```
##### 2.传入一个array<object>数组对象
    ```
    import LocalCache from 'cache-localstorage';
    let a = [{key:'tom',value:'cat'},{key : 'jack',value:'man'}];
    LocalCache.set(a);//存储a
    ```
##### 3.单个传入
##### 必传参数（key,value），选传参数（time， other）;
        ```
        import LocalCache from 'cache-localstorage';
        LocalCache.set('tom' ,'cat');//存储a
        LocalCache.set('tom','cat',3);//默认存储时间为一天
        LocalCache.set('tom','cat','sss');//第三个参数不为number则认为传的是第四个参数，time默认为一天
        LocalCache.set('tom','cat',2,'sss');//四个参数全部传的形态
        ```
