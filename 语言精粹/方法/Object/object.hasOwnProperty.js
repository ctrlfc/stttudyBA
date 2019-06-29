// 包含一个name属性,那么hasOwnProperty方法返回true

// 原型链中的同名属性是不会被检查的

// 检查原型链中的属性

// 不被原型污染\

// 总而言之 有自己的输出就为true

var a = { member: true };
var b = Object.create(a);
var t = a.hasOwnProperty("member");
var u = b.hasOwnProperty("member");
var v = b.menmber;
