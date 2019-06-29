// 还遮遮掩掩的隐藏原型继承机制,想基于类的模式 搞得不伦不类

// 引入了一个多余的间接层,那就是通过构造器产生对象 来搞事

// 当一个函数对象被创建时候,Function 构造器产生的函数对象会运行雷士这样的一些代码

this.prototype = { constructor: this };

// 上面的prototyoe是用来存放继承函数独特性的地方

// 模拟 new 构造函数
Function.method("new", function() {
    //创建一个新对象, 它继承自构造器函数的原型对象

    var that = Object.create(this.prototype);

    //调用构造器函数,绑定 this 到新对象上

    var other = this.apply(that, arguments);

    // 如果它的返回值不是一个对象,就返回该新对象

    return (typeof other === "Object" && other) || that;
});

// 定义一个构造器并扩充它的原型

var Mammal = function(name) {
    this.name = name;
};

Mammal.prototype.get_name = function() {
    return this.name;
};

Mammal.prototype.says = function() {
    return this.saying || "";
};
