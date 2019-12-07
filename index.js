/*
 * @Author: zhouhong07
 * @Date: 2019-08-20 14:35:06
 * @LastEditors: 
 * @LastEditTime: 2019-08-20 19:45:42
 * @Description: file content
 */
(function (global, namespace, factory) {
    if(typeof exports === 'object' && typeof module !== 'undefined'){
      module.exports = factory() 
    }else if(typeof define === 'function' && define.amd){
      define(namespace, [], factory);
    }else{
      global[namespace] = factory()
    }
  }(this, "LocalCache", function () { 
    'use strict' ;

    const LocalCache = {
        keyName : '__localCache' ,
        valueArr : [],
        //判断是否支持localStorage
        _isSupport : function(){
            try{
                if(window.localStorage){
                    return true;
                }else{
                    return false;
                }
            }catch(e){
                console.log("error");
            }
        },
    
        _changeLowerStr : function(str){
            return typeof str === 'string' ? str.toLowerCase() :  str ;
        } ,
    
        _dataTypeCheck : function(origin){
            return this._changeLowerStr(origin.__proto__.constructor.name) ; 
        } ,
    
        _setCacheTimeIn : function(time){
            if(time && (!isNaN(time))){
                let item = (new Date() -1) + time *1000 *60 *60 *24;
                return item ;
            }//如果是数字
            else{
                console.log('time应该是number类型');
                let item = (new Date() -1) + 1* 3600 *24 *1000 ;
                return item ;
            }
        },
    
        _setCacheIn : function(name , value, time, other){
            let LEN=arguments.length;
            switch (LEN) {
                case 1:
                    break;
                default:
                    break;
            }
        },
    
        //存储数据格式化
        _setCacheFormat :  function(name  ,value, time, other){
            let LEN = 0;
            for(let i=0; i< arguments.length; i++){
                if(arguments[i] !== undefined){
                    LEN ++ ;
                }
            }
            switch (LEN) {
                case 1:
                    if(this._dataTypeCheck(name) === 'array') { //对象数组存储
                        for(let j=0 ; j<name.length; j++){
                            let _key = name[j].key ;
                            let _value = name[j].value ;
                            let _time = name[j].time ;
                            let _other = name[j]._other ;
                            let cacheValue = {
                                                value: _value , 
                                                time: this._setCacheTimeIn(_time) ,
                                                other : _other
                                            } ;
                            if(this._getValueArr(_key)){
                                let curItem = this._getValueArr(_key) ;
                                curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                            }else{
                                this.valueArr.push({name : _key , value : cacheValue}) ;
                            }
                        }
                        
                    }
                    if(this._dataTypeCheck(name) === 'object'){
                        let _key = name.key ;
                        let _value = name.value ;
                        let _time = name.time ;
                        let _other = name._other ;
                        let cacheValue = {
                                            value: _value , 
                                            time: this._setCacheTimeIn(_time) ,
                                            other : _other
                                        } ;
                        if(this._getValueArr(_key)){
                            let curItem = this._getValueArr(_key) ;
                            curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                        }else{
                            this.valueArr.push({name : _key , value : cacheValue}) ;
                        }
                    }
                    break;
                case 2 :
                    if((this._dataTypeCheck(name) === 'string') && (this._dataTypeCheck(value) === 'string')){
                        let _key = name ;
                        let _value = value ;
                        let cacheValue = {
                                            value: _value , 
                                            time: this._setCacheTimeIn() ,
                                            other : {}
                                        }
                        if(this._getValueArr(_key)){
                            let curItem = this._getValueArr(_key) ;
                            curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                        }else{
                            this.valueArr.push({name : _key , value : cacheValue}) ;
                        }
                    }
                    break;
                case 3 :
                    if((this._dataTypeCheck(name) === 'string') && (this._dataTypeCheck(value) === 'string') && (this._dataTypeCheck(time) === 'number')){
                        let _key = name ;
                        let _value = value ;
                        let _time = time ;
                        let cacheValue = {
                                            value: _value , 
                                            time: this._setCacheTimeIn(_time) ,
                                            other : {}
                                        };
    
                        if(this._getValueArr(_key)){
                            let curItem = this._getValueArr(_key) ;
                            curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                        }else{
                            this.valueArr.push({name : _key , value : cacheValue}) ;
                        }
                    }else if((this._dataTypeCheck(name) === 'string') && (this._dataTypeCheck(value) === 'string') && (this._dataTypeCheck(time) !== 'number')){
                        let _key = name ;
                        let _value = value ;
                        let _other = time ;
                        let cacheValue = {
                                            value: _value , 
                                            time: this._setCacheTimeIn() ,
                                            other : _other
                                        } ;
    
                        if(this._getValueArr(_key)){
                            let curItem = this._getValueArr(_key) ;
                            curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                        }else{
                            this.valueArr.push({name : _key , value : cacheValue}) ;
                        }
                    }
                    break;
                case 4 :
                    if((this._dataTypeCheck(name) === 'string') && (this._dataTypeCheck(value) === 'string') && (this._dataTypeCheck(time) === 'number')){
                        let _key = name.key ;
                        let _value = name.value ;
                        let _time = name.time ;
                        let _other = name._other ;
                        let cacheValue = {
                                            value: _value , 
                                            time: this._setCacheTimeIn(_time) ,
                                            other : _other
                                        }
                        if(this._getValueArr(_key)){
                            let curItem = this._getValueArr(_key) ;
                            curItem.value.time > new Date() ?  "" : this.valueArr.push({name : _key , value : cacheValue}); 
                        }else{
                            this.valueArr.push({name : _key , value : cacheValue}) ;
                        }
                    }
                    break;
                default:
                    break;
            }
            window.localStorage.setItem(this.keyName , JSON.stringify(this.valueArr));
        },
    
    
        _getValueArr : function(value){
            let originKey = JSON.parse(window.localStorage.getItem(this.keyName)) ;
            if(originKey.length > 0) {
                for(let i = 0; i < originKey.length ;i ++){
                    if(originKey[i].name === value){
                        return originKey[i];
                    }
                }
            }else{
                return false;
            }
        },
    
        _init : function(){
            window.localStorage.setItem(this.keyName , JSON.stringify(this.valueArr));
        },
    
        set: function(name  ,value, time, other){
            //可以进行localStorage存储
            if(this._isSupport()){
                //ToDo
                //判断是否已经存在这个属性
                this._init();
                let originKey = window.localStorage.getItem(this.keyName) ;
                if(originKey) {
                    this._setCacheFormat(name  ,value, time, other) ;
                }else{
                    console.log('数据被手动删除');
                }
            }else{
                console.log('不支持localStorage存储');
            }
        } ,
    
        get: function(name){
            if(this._isSupport&&name){
                return this._getValueArr(name);
            }
            else{
                console.log('不支持localStorage存储');
            }
            
        },
    
        expired : function(value){
            if(value){
                let item = this._getValueArr(value);
                if(item.value.time > new Date()){
                    return false ;//未过期
                }else{
                    return true;
                }
            }
        } ,
    
        remove : function(value){
            if(value){
                let item = this._getValueArr(value);
                window.localStorage.removeItem(this.keyName) ;
                for(let i= 0 ; i<this.valueArr.length; i++) {
                    if(item.name === this.valueArr[i].name){
                        this.valueArr.splice(i ,1);
                    }
                }
                window.localStorage.setItem(this.keyName , JSON.stringify(this.valueArr));
            }
        },
        clear : function(value){
            if(value){
                window.localStorage.clear();
                return true;
            }
            else{
                window.localStorage.removeItem(this.keyName);
                return true ;
            }
        }
    
    }

    return LocalCache ;
}))