/* 函数声明和表达式 */

// 函数声明

function foo() {}

// 以上在被执行前解析(hoisted),因此它在函数定义体上面也可以被调用

foo();
function foo() {}

// 匿名函数表达式

const foo = function() {};

foo;
foo();
var foo = function() {};
// 赋值语句只有在代码运行时执行,所以之前会...

// 命名函数表达式

const foo = function bar() {
    bar(); //正常
};
bar(); // 出错 : ReferenceError

// 在外部不可见, 引用赋值 ; 在内部可见, 命名处理所致

/* this */

// 全局 (严格模式没有全局变量)
this;

// 函数
foo(); // 指向全局 XXXXXXXXXXXXXXXXXXXXXXXXX 没用

//方法
test.foo(); // 指向test对象

// 调用构造函数
new foo(); // 指向新对象

// 显式的设置 this
function foo(a, b, c) {}

const bar = {};
foo.apply(bar, [1, 2, 3]); // 数组将会被扩展，如下所示
foo.call(bar, 1, 2, 3); // 传递到foo的参数是：a = 1, b = 2, c = 3
// this变成了bar?!!!

// 注意: 在对象的字面声明语法中，this 不能用来指向对象本身。 因此 var obj = {me: this} 中的 me 不会指向 obj，因为 this 只可能出现在上述的五种情况中。 ?????????

Foo.method = function() {
    function test() {
        // this 将会被设置为全局对象（浏览器环境中也就是 window 对象）
    }
    test();
};

Foo.method = function() {
    const _this = this;
    function test() {
        // 使用 _this 来指向 Foo 对象
    }
    test();
};

// 方法的赋值表达式

function Foo() {}
Foo.prototype.method = function() {};

function Bar() {}
Bar.prototype = Foo.prototype;

new Bar().method(); // this指向Bar实例

/* 闭包和引用 */

// 函数是唯一拥有自身作用域的结构,so闭包创建和函数密切相关

// 模拟私有变量

function Counter(start) {
    const count = start;
    return {
        increment: function() {
            count++;
        },

        get: function() {
            return count;
        }
    };
}

const foo = Counter(4);
foo.increment();
foo.get(); // 5

// 这两个函数都维持着 对外部作用域 Counter 的引用,so可以访问作用域定义的变量count

// 为什么不可以在外部访问私有变量

// 函数中不可对作用域进行引用或者赋值,在外面不能访问里面

const foo = new Counter(4);
foo.hack = function() {
    count = 1337;
};

// 上面的代码不会改变定义在 Counter 作用域中的 count 变量的值，因为 foo.hack 没有 定义在那个作用域内。
// 它将会创建或者覆盖全局变量 count。

// 循环中的闭包

for (let i = 0; i < 10; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
//输出10个10(异步)

// 需要每次创建i的拷贝 和 _this差不多

// ==>改成自执行函数

for (let i = 0; i < 10; i++) {
    (function(e) {
        setTimeout(function() {
            console.log(e);
        }, 1000);
    })(i);
}

// 这时e 有 i的拷贝,并对e有了引用,而这个值是不会被循环改变的

for (let i = 0; i < 10; i++) {
    setTimeout(
        (function(e) {
            return function() {
                console.log(e);
            };
        })(i),
        1000
    );
}

//返回一个函数这样也行

// argument 对象

// 特别变量argument,维护所有传递到这个函数的参数列表

// argument是一个object而不是array 但又有length属性

//转化为数组

Array.prototype.slice.call(argument); // 听说很慢

// 传递参数(推荐做法)

function foo() {
    bar.apply(null, arguments);
}

function bar(a, b, c) {
    //干活
}

// 还有一种(真滴有点麻烦了,但俗话说写得越多 性能越好 不知道是不是)

function Foo() {}

Foo.prototype.method = function(a, b, c) {
    console.log(this, a, b, c);
};

//创建一个解绑器"method"
//输入参数为:this,arg1,arg2...argN

Foo.method = function() {
    //结果:Foo.prototype.method.call(this,arg1,arg2...argN)
    Function.call.apply(Foo.prototype.method, arguments);
};

// =

Foo.method = function() {
    const args = Array.prototype.slice.call(arguments);
    Foo.prototype.method.apply(args[0], args.slice(1));
};

// 自动更新

// arguments 对象为它的内部属性和函数形式创建了getter和setter方法

// so 改变形式参数的值会改变arguments对象的值

function foo(a, b, c) {
    arguments[0] = 2;
    a;

    b = 4;
    arguments[1];

    var d = c;
    d = 9;
    c;
}

foo(1, 2, 3);
// 2,4,3

// 性能真相

// es5下面

function f(a) {
    "use strict";
    a = 42;
    return [a, arguments[0]];
}

var pair = f(17);

// 判断真假
console.assert(pair[0] === 42);
console.assert(pair[1] === 17);

// pair[0] 居然是42 真相真的建立了

// arguments.callee 会显著影响性能

function foo() {
    arguments.callee;
    arguments.callee.caller;
}

function bigLoop() {
    for (var i = 0; i < 1e5; i++) {
        foo();
    }
}

// 因为它需要知道它自己和它的调用者。 这不仅抵消了内联函数带来的性能提升，而且破坏了封装，因此现在函数可能要依赖于特定的上下文。

// (垃圾)

// 构造函数

// 只能 通过new 方式调用函数都被认为是构造函数

// 内部 this 指向的是object ,这个新创建的对象的 prototype 被指向到构造函数的 prototype。

// 如果被调用的函数没有显式的return表达式,则隐式的会返回this对象 也就是新创建的对象

function foo() {
    this.bla = 1;
}

Foo.prototype.test = function() {
    console.log(this.bla);
};

var test = new Foo();

// 上面代码把Foo作为构造函数使用,并设置新创建对象的prototype为Foo.prototype

// 显式的return表达式将会影响返回结果,但仅限于返回的是一个对象

function Bar() {
    return 2;
}
new Bar(); //返回新创建的对象

function Test() {
    this.value = 2;

    return {
        foo: 1
    };
}
new Test(); //返回的对象

// new Bar() 返回的是新创建的的对象,而不是数字的字面值2.因此new Bar().constructor === Bar,但是如果返回的是数字对象,结果就不同了

function Bar() {
    return new Number(2);
}
new Bar().constructor === Number;

// 这里得到的 new Test()是函数返回的对象,而不是通过new关键字新创建的对象,因此:

new Test().value === undefined;
new Test().foo === 1;

// 如果new被遗漏了,则函数不会返回新创建的对象

function Foo() {
    this.bla = 1; // 获取设置全局参数
}
Foo(); // undefined

// 虽然上例在有些情况下也能正常运行,但是由于JavaScript中this的工作原理,这里的this指全局

// 工厂模式

// 为了不使用 new 关键字,构造函数必须显式的返回一个值

function Bar() {
    var value = 1;
    return {
        method: function() {
            return value;
        }
    };
}
Bar.prototype = {
    foo: function() {}
};

new Bar();
Bar();

// 上面两种对Bar函数的调用返回的值完美相同,一个新创建的拥有method属性的对象呗返回,其实这里创建了一个闭包

//  还需要注意, new Bar()并不会改变返回对象的原型(也就是返回对象的原型不会指向Bar.prototype).
//  因为构造函数的原型会被指向到刚刚创建的新对象, 而这里的Bar没有把这个新对象返回(而是返回了一个包含method属性的自定义对象)

// 在上面的例子中,使用或者不使用new关键字没有功能性区别

// 上面两种方式创建的对象不能访问Bar原型链上的属性,如下所示

var bar1 = new Bar();
typeof bar1.method;
typeof bar1.foo;

var bar2 = Bar();
typeof bar2.method;
typeof bar2.foo;

// 通过工厂模式创建新对象

// 我们常听到的一条忠告是不要使用new关键字来调用函数,因为如果忘记他就会导致错误

// 为了创建新对象,我们可以创建一个工厂方法,并且在方法内构造一个新对象

function Foo() {
    var obj = {};
    obj.value = "blub";

    var private = 2;
    obj.someMethod = function(value) {
        this.value = value;
    };

    obj.getPrivate = function() {
        return private;
    };
    return obj;
}

// 虽然上面的方式比起new的调用方式不容易出错,并且可以充分利用 私有变量 带来的便利,但是还是有一些不好的地方

// 1.会占用更多的内存,因为新创建对象不能共享原型上的方法
// 2.为了实现继承,工厂方法需要从另外一个对象拷贝所有属性,或者把一个对象作为新创建对象的原型
// 3.放弃原型链仅仅是因为防止遗漏new带来的问题,这似乎和语言本身的思想相违背

// 总结

// 虽然遗漏 new 关键字可能会导致问题,但这并不是放弃使用原型链的借口.最终使用哪种方式取决于应用的需求,选择一种代码书写风格并坚持下去才是最重要的

// 作用域与命名空间

// 尽管js支持一对花括号创建的代码段,但是并不支持块级作用域;而仅仅支持函数作用域

function test() {
    //一个作用域
    for (var i0; i < 10; i++) {
        //不是一个作用域
        //count
    }
    console.log(i); // 10
}

// return左括号不在一行的话 会出错

function add(a, b) {
    return;
    a + b;
}

console.log(add(1, 2));
// undefined

// js中没有显示的命名空间,这就意味着所有对象,这就意味着所有对象都定义在一个全局共享的命名空间下面。

// 每次引用一个变量，JavaScript 会向上遍历整个作用域直到找到这个变量为止。 如果到达全局作用域但是这个变量仍未找到，则会抛出 ReferenceError 异常。

// 隐式的全局变量

//脚本A
foo = "42";

//脚本B
var foo = "42";

// 上面两段脚本效果不同,脚本A在全局作用域内定义了变量foo,而脚本B在当前作用域内定义变量foo

// 再次强调，上面的效果完全不同，不使用 var 声明变量将会导致隐式的全局变量产生。

// 全局作用域
var foo = 42;
function test() {
    // 局部作用域
    foo = 21;
}
test();
foo; //21

// 在函数test内不使用var关键字声明fo变量将会覆盖外部的同名变量.起初这看起来并不是大问题,但是当有成千上万行代码时,不使用var 声明变量将会带来难以追踪的bug

var items = [
    /* 数组 */
];
for (var i = 0; i < 10; i++) {
    subLoop();
}
function subLoop() {
    // subLoop 函数作用域
    for (i = 0; i < 10; i++) {
        // 没有使用 var 声明变量
        // 干活
    }
}

// 外部循环咋第一次调用subLoop之后就会终止,因为subLoop覆盖了全局变量i.
// 在第二个 for 循环中使用 var 声明变量可以避免这种错误。 声明变量时绝对不要遗漏 var 关键字，除非这就是期望的影响外部作用域的行为。

// 局部变量
// JavaScript 中局部变量只可能通过两种方式声明，一个是作为函数参数，另一个是通过 var 关键字声明。

// 全局变量
var foo = 1;
var bar = 2;
var i = 2;

function test(i) {
    // 函数 test 内的局部作用域
    i = 5;

    var foo = 3;
    bar = 4;
}
test(10);

// foo 和 i 是函数 test 内的局部变量，而对 bar 的赋值将会覆盖全局作用域内的同名变量。

// 变量声明提升（Hoisting）

// JavaScript 会提升变量声明。这意味着 var 表达式和 function 声明都将会被提升到当前作用域的顶部。

bar();
var bar = function() {};
var someValue = 42;

test();
function test(data) {
    if (false) {
        goo = 1;
    } else {
        var goo = 2;
    }
    for (var i = 0; i < 100; i++) {
        var e = data[i];
    }
}

// 上面代码在运行之前将会被转化。JavaScript 将会把 var 表达式和 function 声明提升到当前作用域的顶部。

// var 表达式被移动到这里
var bar, someValue; // 缺省值是 'undefined'

// 函数声明也会提升
function test(data) {
    var goo, i, e; // 没有块级作用域，这些变量被移动到函数顶部
    if (false) {
        goo = 1;
    } else {
        goo = 2;
    }
    for (i = 0; i < 100; i++) {
        e = data[i];
    }
}

bar(); // 出错：TypeError，因为 bar 依然是 'undefined'
someValue = 42; // 赋值语句不会被提升规则（hoisting）影响
bar = function() {};

test();

// 没有块级作用域不仅导致 var 表达式被从循环内移到外部，而且使一些 if 表达式更难看懂。

// 在原来代码中，if 表达式看起来修改了全局变量 goo，实际上在提升规则被应用后，却是在修改局部变量。

// 如果没有提升规则（hoisting）的知识，下面的代码看起来会抛出异常 ReferenceError。

// 检查 SomeImportantThing是否已经被初始化

if (!SomeImportantThing) {
    var SomeImportantThing = {};
}

// 实际上,上面的代码正常运行,因为var表达式会被提升到全局作用域的顶部

var SomeImportantThing;

// 其他一些代码,可能会初始化SomeImportantThing,也可能不会

// 检查是否已经被初始化

if (!SomeImportantThing) {
    SomeImportantThing = {};
}

// 生动阐明变量提升的变化

var myvar = "myvalue";

(function() {
    alert(myvar); //undefined
    var myvar = "local value";
})();

// 名称解析顺序

// JavaScript 中的所有作用域，包括全局作用域，都有一个特别的名称 this 指向当前对象。

// 函数作用域内也有默认的变量 arguments，其中包含了传递到函数中的参数。

// 比如，当访问函数内的 foo 变量时，JavaScript 会按照下面顺序查找：

// 当前作用域内是否有 var foo 的定义。
// 函数形式参数是否有使用 foo 名称的。
// 函数自身是否叫做 foo。
// 回溯到上一级作用域，然后从 #1 重新开始。

// 命名空间

// 只有一个全局作用域导致的常见错误是命名冲突.js中,这可以通过匿名包装器轻松解决 arguments自定义会阻止原生创建

(function() {
    // 函数创建一个命名空间

    window.foo = function() {
        // 对外公开的函数.创建了闭包
    };
})(); //立即执行

// 匿名函数被认为是表达式;因此为了可调用性,它们首先会被执行

//小括号内的函数首先被执行
(function() {})(); //并且返回函数对象 //调用上面的执行结果,也就是函数对象

// 有一些其他的调用函数表达式的方法,比如下面的两种方式语法不同,但是效果一样

// 另两种

+(function() {})();
(function() {})();
