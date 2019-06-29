/* 对象使用和属性 */

/* 删除属性 */

/* 只有delete操作符才能真正删除属性,而设置为underfined或者null只能移除属性与值的关联 */

var obj = {
    bar: 1,
    foo: 2,
    baz: 3
};

obj.bar = undefined;
obj.foo = null;
delete obj.baz;

for (var i in obj) {
    if (obj.hasOwnProperty(i)) {
        console.log(i, "" + obj[i]);
    }
}

/*
bar undefined
foo null
undefined
*/

/* 原型继承 */

function Foo() {
    this.value = 42;
}

Foo.prototype = {
    method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象

Bar.prototype = new Foo(); //不能用Foo,因为不会执行Foo原型,而是指向Foo,变成了Function.prototype

Bar.prototype.foo = "Hello world";

// 修正Bar.prototype.constructor为Bar本身

Bar.prototype.constructor = Bar;

// 创建Bar的一个新实例

const test = new Bar();

// 原型链

/*
test[Bar的实例]
    Bar.prototype [Foo的实例]
        { foo: 'Hello World' }
        Foo.prototype
        { method: ...};
        Object.prototype
        { toString:...};
*/

// Bar实例只会共享相同的value属性

/*
test.value
>42
test.method
>function () {}
test.foo
>"Hello world"
*/

/* 原型属性查找 */

// 一直向上找啊找,直到找到object.prototype还没得,我就不找了,给你说undefined

/* 原型属性 */

// 原型不能是值啊，是一个对象 让原型等于 1 肯定出错

/* 原型性能 */

// for..in 会遍历整个原型链

// 绝对不要扩展内置类型的原型

/* hasOwnProperty函数 */

// 为了判断一个对象是否包含自定义属性而不是原型链上的属性,就使用hasOwnProperty(判断属性是否为undefined是不够的,它可能存在,只不过被赋值为undefined)

// 唯一一个处理属性但是不查找原型链的函数

// 修改object.prototype
Object.prototype.bar = 1;
let foo = { goo: undefined };

foo.bar; // 1
"bar" in foo; // true

// 是否自定义
foo.hasOwnProperty("bar"); // false
foo.hasOwnProperty("goo"); // true

/* 作为属性 */

const foo = {
    hasOwnProperty: function() {
        return false;
    },
    bar: "Here be dragons"
};

foo.hasOwnProperty("bar"); // 总是返回 false

//使用其它对象的 hasOwnProperty，并将其上下文设置为foo
({}.hasOwnProperty.call(foo, "bar")); // true

/* for in 循环 */

// for..in会遍历所有的原型链属性

// 修改 Object.prototype
Object.prototype.bar = 1;

const foo = { moo: 2 };
for (let i in foo) {
    console.log(foo[i]); // 输出两个属性：bar 和 moo
}

// foo 变量是上例中的
for (let i in foo) {
    if (foo.hasOwnProperty(i)) {
        console.log(i); // 输出moo
    }
}


// 对象适用于汇集管理数据
// 对象继承省时间内存
// 对象属性名可以是空字符串