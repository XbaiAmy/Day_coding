// function Amy(name,haircut) {
//     this.name =name;
//     this.haircut = haircut;
// }

// Amy.prototype.hobbies = function() {
//     console.log('我不喜欢这世界，我只喜欢你');
// }
// var amy = new Amy('齐一', '飞刘海');
// var amy2 = new Amy('F君', '爆炸头');
// amy.hobbies();
// amy2.hobbies();

// 要找到什么样的Amy，Amy都是那一个Amy，
// 如何在多次new 只得到一个对象 用单例模式
// class new 
var Singleton = function(name) {
    this.name = name;
    // instance保持对对象的引用 instanceof实例
    this.instance = null;
}
// static 方法，是静态方法，不需要new，可以在类上调用
// new的实质是拷贝式的赋值。
// 废掉constructor  就是废掉new

Singleton.getInstance = function(name) {
    if(!this.instance) {
        // 类只实例化一次
        this.instance = new Singleton(name);
    }

    return this.instance;
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');

// console.log(a==b);
// console.log(a.name);
// console.log(b.name);
// 要让 a === b 则要引用式赋值

// es6实现单例模式
class mySingleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new mySingleton(name);
        }
        return this.instance;
    }
}

var a = mySingleton.getInstance('sven1');
var b = mySingleton.getInstance('sven2');

console.log(a==b);
console.log(a.name);
console.log(b.name);