// 继承
function extend(subClass,superClass) {
    // 手术 prototype
    // prototype指向
    // 类F 函数就是对象，创建一个构造函数
    var F = function() {}
    F.prototype = superClass.prototype;
    console.log(F.prototype);
    // js 原型链prototype 对象会沿着原型链一直去查找，
    // 首先查找自身对象是否有， 如果没有，就会沿着这跟链找其他的对象，是否有方法
    // 原型链对象 new Fprototype.js()
    // console.log(subClass.prototype.constructor)
    subClass.prototype = new F();
    // console.log(subClass.prototype.constructor)
    // 构造函数 subClass
    // constructor属性 对象完全是由prototype来指挥
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.constructor);
    // 静态属性
    subClass.superclass =  superClass.prototype;
}
// 首字母大写表示类
// Person es5 即是函数，也是构造函数
// 函数是对象的一种，即可执行的对象
// 函数是一等对象 
// 可以作为表达式 var a = function () {}
// 高阶函数 可以作为形参 function func(cb) { cb(); }
// 可以作为返回值 返回一个函数
// 基类
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

var nzh = new Person('倪子红');
//  console.log(nzh.getName());
// 子类
function Author(name,books) {
    // 借 基于原型链的继承
    // Author类得到属性设置
    // this 代表 author 对象指向
    // call 改变this的指向
    Person.call(this,name);
    this.books = books;
}
// Person prototype方法， 它都得有，
// Person 的构造函数不能被改掉
extend(Author,Person);
// Author.prototype.getName = function(){
//     return Person.prototype.getName.call(this);
// }
Author.prototype.getBooks = function() {
    return this.books.join(',');
}

var nzh = new Author('倪子红',['我知道的JS','JS红学','小倪子模式']);
// console.log(nzh.getName());
console.log(nzh.getName());
console.log(nzh.getBooks());
    
var Author = clone(Person);
Author.books = ['a','b','c'];
Author.getBooks = function() {
    return this.books.join(',');
}

// var ft = clone(Author);
// ft.name = '冯唐';
// ft.books = ['春风十里不如你','万物生长','北京北京'];
// console.log(ft.getBooks());
// 构造函数  属于类  字母大写  执行时前面加new构造一个实例
// 对象字面量 JSON 
// 类 由属性和方法构成
// 复杂数据类型     属性和方法
