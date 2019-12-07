<!--
 * @Author: zhouhong07
 * @Date: 2019-08-20 17:33:46
 * @LastEditors: 
 * @LastEditTime: 2019-12-07 14:38:20
 * @Description: file content
 -->
### 使用说明
#### （0）支持的方法
    ```
    import LocalCache from 'cache-localstorage';
    //setItem
    LocaCache.set('tom','cat',3);
    //getItem
    LocaCache.get('tom');//return a json type
    //expired or not
    LocaCache.expired('tom');//return a boolean ,ture <=> expired ,false <=> not expired
    //removeItem
    LocalCache.remove('tom');
    //return a boolen,true <=> has removed, false <=> not removed
    //clear all
    LocalCache.clear();
    ```
#### (1)how to use ?
#### Attention :
#### if you want to cache more datas ,you should use the key of "other" , 
#### and the key of "key"&"value"&"time"&"other" is unique ,you should according to rules ；
#### 存储对象的key和value是名称和值，time是存储的时间，other是要存储的其他对象；这些关键字是固定的，不能改变；


#### A error set
#### eg: 
    ```
        let a = {mykey : 'tom' ,myvalue : 'cat' ,mytime : 3, myother:{}};
        LocalCache.set(a);//存储a
        //this is an error set , you should not use key of "mykey"&"myvalue"&"mytime&myother" ;
        //must use key of " key, value, time ,other";
    ```
#### A correct set
    ```
        let a = {key : 'tom' ,value : 'cat' ,time : 3, other:{}};
        LocalCache.set(a);//存储a
    ```
##### 1.setItem params is an object   存储，传入一个对象
##### eg:
        ```
        import LocalCache from 'cache-localstorage';
        let a = {key : 'tom' ,value : 'cat' ,time : 3, other:{}};
        LocalCache.set(a);//存储a
        ```
##### 2.setItem params is array<object>  
#####     存储，传入一个数组对象 
    ```
    import LocalCache from 'cache-localstorage';
    let a = [{key:'tom',value:'cat'},{key : 'jack',value:'man'}];
    LocalCache.set(a);//存储a
    ```
##### 3.setItem , parms is string;
##### 必传参数（key,value），选传参数（time， other）;
        ```
        import LocalCache from 'cache-localstorage';
        LocalCache.set('tom' ,'cat');//存储a
        LocalCache.set('tom','cat',3);//默认存储时间为一天
        LocalCache.set('tom','cat','sss');//第三个参数不为number则认为传的是第四个参数，time默认为一天
        LocalCache.set('tom','cat',2,'sss');//四个参数全部传的形态
        ```
