// 类型

// 相等与比较

// JavaScript 有两种方式判断两个值是否相等。

// 等于操作符

// 等于操作符由两个等号组成:==

// js是弱类型语言,这就意味着,等于操作符会为了比较两个值而进行强制类型转换

""           ==   "0"           // false
0            ==   ""            // true
0            ==   "0"           // true
false        ==   "false"       // false
false        ==   "0"           // true
false        ==   undefined     // false
false        ==   null          // false
null         ==   undefined     // true
" \t\r\n" == 0             // true

// 上面的表格展示了强制类型转换，这也是使用 == 被广泛认为是不好编程习惯的主要原因， 
// 由于它的复杂转换规则，会导致难以跟踪的问题。

// 此外，强制类型转换也会带来性能消耗，比如一个字符串为了和一个数字进行比较，必须事先被强制转换为数字。

// 严格等于操作符

// 严格等于操作符由三个等号组成：===

// 不像普通的等于操作符，严格等于操作符不会进行强制类型转换。

""           ===   "0"           // false
0            ===   ""            // false
0            ===   "0"           // false
false        ===   "false"       // false
false        ===   "0"           // false
false        ===   undefined     // false
false        ===   null          // false
null         ===   undefined     // false
" \t\r\n"    ===   0             // false

// 上面的结果更加清晰并有利于代码的分析。如果两个操作数类型不同就肯定不相等也有助于性能的提升。


// 比较对象

// 虽然 == 和 === 操作符都是等于操作符，但是当其中有一个操作数为对象时，行为就不同了。

{} === {};                   // false
new String('foo') === 'foo'; // false
new Number(10) === 10;       // false
var foo = {};
foo === foo;                 // true

// 这里等于操作符比较的不是值是否相等，而是是否属于同一个身份；也就是说，只有对象的同一个实例才被认为是相等的。 
// 这有点像 Python 中的 is 和 C 中的指针比较。

// 注意:为了更直观的看到==和===的区别,可以参见JavaScript Equality Table

// 结论

// 强烈推荐使用严格等于操作符。如果类型需要转换，应该在比较之前显式的转换， 而不是使用语言本身复杂的强制转换规则。


// typeof 操作符

// typeof 操作符（和 instanceof 一起）或许是 JavaScript 中最大的设计缺陷，
// 因为几乎不可能从它们那里得到想要的结果。

// 尽管 instanceof 还有一些极少数的应用场景，
// typeof 只有一个实际的应用（译者注：这个实际应用是用来检测一个对象是否已经定义或者是否已经赋值），
// 而这个应用却不是用来检查对象的类型。

// JavaScript 类型表格

Value               Class      Type
-------------------------------------
"foo"               String     string
new String("foo")   String     object
1.2                 Number     number
new Number(1.2)     Number     object
true                Boolean    boolean
new Boolean(true)   Boolean    object
new Date()          Date       object
new Error()         Error      object
[1,2,3]             Array      object
new Array(1, 2, 3)  Array      object
new Function("")    Function   function
/abc/g              RegExp     object (function in Nitro/V8)
new RegExp("meow")  RegExp     object (function in Nitro/V8)
{}                  Object     object
new Object()        Object     object

// 上面表格中，Type 一列表示 typeof 操作符的运算结果。可以看到，这个值在大多数情况下都返回 "object"。

// Class 一列表示对象的内部属性 [[Class]] 的值。
// 为了获取对象的 [[Class]]，我们需要使用定义在 Object.prototype 上的方法 toString。

// JavaScript 标准文档中定义: [[Class]] 的值只可能是下面字符串中的一个：
// Arguments, Array, Boolean, Date, Error, Function, JSON, Math, Number, Object, RegExp, String.

// 对象的类定义

// JavaScript 标准文档只给出了一种获取 [[Class]] 值的方法，那就是使用 Object.prototype.toString。

function is(type, obj) {
    var clas = Object.prototype.toString.call(obj).slice(8, -1);
    return obj !== undefined && obj !== null && clas === type;
}

is('String', 'test'); // true
is('String', new String('test')); // true

// 上面例子中，Object.prototype.toString 方法被调用，this 被设置为了需要获取 [[Class]] 值的对象

// 译者注：Object.prototype.toString 返回一种标准格式字符串，所以上例可以通过 slice 截取指定位置的字符串，如下所示：

Object.prototype.toString.call([])    // "[object Array]"
Object.prototype.toString.call({})    // "[object Object]"
Object.prototype.toString.call(2)    // "[object Number]"

// S5 提示: 在 ECMAScript 5 中，为了方便，对 null 和 undefined 
// 调用 Object.prototype.toString 方法，
// 其返回值由 Object 变成了 Null 和 Undefined。

// 译者注：这种变化可以从 IE8 和 Firefox 4 中看出区别，如下所示：

// IE8
Object.prototype.toString.call(null)    // "[object Object]"
Object.prototype.toString.call(undefined)    // "[object Object]"

// Firefox 4
Object.prototype.toString.call(null)    // "[object Null]"
Object.prototype.toString.call(undefined)    // "[object Undefined]"


// 测试未定义变量

typeof foo !== 'undefined'
// 上面代码会检测 foo 是否已经定义；
// 如果没有定义而直接使用会导致 ReferenceError 的异常。
// 这是 typeof 唯一有用的地方。

// 结论

// 为了检测一个对象的类型，强烈推荐使用 Object.prototype.toString 方法；
// 因为这是唯一一个可依赖的方式。正如上面表格所示，typeof 的一些返回值在标准文档中并未定义，
// 因此不同的引擎实现可能不同。

// 除非为了检测一个变量是否已经定义，我们应尽量避免使用 typeof 操作符。



// instanceof 操作符

// instanceof 操作符用来比较两个操作数的构造函数。只有在比较自定义的对象时才有意义。
// 如果用来比较内置类型，将会和 typeof 操作符 一样用处不大。

// 比较自定义对象

function Foo() {}
function Bar() {}
Bar.prototype = new Foo();

new Bar() instanceof Bar; // true
new Bar() instanceof Foo; // true

// 如果仅仅设置 Bar.prototype 为函数 Foo 本身，而不是 Foo 构造函数的一个实例
Bar.prototype = Foo;
new Bar() instanceof Foo; // false

// instanceof 比较内置类型

new String('foo') instanceof String; // true
new String('foo') instanceof Object; // true

'foo' instanceof String; // false
'foo' instanceof Object; // false

// 有一点需要注意，instanceof 用来比较属于不同 JavaScript 上下文的对象（比如，浏览器中不同的文档结构）时将会出错，
// 因为它们的构造函数不会是同一个对象。

// 结论
// instanceof 操作符应该仅仅用来比较来自同一个 JavaScript 上下文的自定义对象。
// 正如 typeof 操作符一样，任何其它的用法都应该是避免的。

// 类型转换
// JavaScript 是弱类型语言，所以会在任何可能的情况下应用强制类型转换。

// 下面的比较结果是：true
new Number(10) == 10; // Number.toString() 返回的字符串被再次转换为数字

10 == '10';           // 字符串被转换为数字
10 == '+10 ';         // 同上
10 == '010';          // 同上 
isNaN(null) == false; // null 被转换为数字 0
                      // 0 当然不是一个 NaN（译者注：否定之否定）

// 下面的比较结果是：false
10 == 010;
10 == '-10';

// 为了避免上面复杂的强制类型转换，强烈推荐使用严格的等于操作符。
// 虽然这可以避免大部分的问题，但 JavaScript 的弱类型系统仍然会导致一些其它问题。

// 内置类型的构造函数
// 内置类型（比如 Number 和 String）的构造函数在被调用时，使用或者不使用 new 的结果完全不同。

new Number(10) === 10;     // False, 对象与数字的比较
Number(10) === 10;         // True, 数字与数字的比较
new Number(10) + 0 === 10; // True, 由于隐式的类型转换

// 使用内置类型 Number 作为构造函数将会创建一个新的 Number 对象，
// 而在不使用 new 关键字的 Number 函数更像是一个数字转换器。

// 另外，在比较中引入对象的字面值将会导致更加复杂的强制类型转换。

// 最好的选择是把要比较的值显式的转换为三种可能的类型之一。

// 转换为字符串
'' + 10 === '10'; // true
// 将一个值加上空字符串可以轻松转换为字符串类型。

// 转换为数字
+'10' === 10; // true
// 使用一元的加号操作符，可以把字符串转换为数字。

// 译者注：字符串转换为数字的常用方法：

+'010' === 10
Number('010') === 10
parseInt('010', 10) === 10  // 用来转换为整数

+'010.2' === 10.2
Number('010.2') === 10.2
parseInt('010.2', 10) === 10

// 转换为布尔型
// 通过使用 否 操作符两次，可以把一个值转换为布尔型。

!!'foo';   // true
!!'';      // false
!!'0';     // true
!!'1';     // true
!!'-1'     // true
!!{};      // true
!!true;    // true

// 核心

// 为什么不要使用 eval
// eval 函数会在当前作用域中执行一段 JavaScript 代码字符串。

var foo = 1;
function test() {
    var foo = 2;
    eval('foo = 3');
    return foo;
}
test(); // 3
foo; // 1
// 但是 eval 只在被直接调用并且调用函数就是 eval 本身时，才在当前作用域中执行。

var foo = 1;
function test() {
    var foo = 2;
    var bar = eval;
    bar('foo = 3');
    return foo;
}
test(); // 2
foo; // 3
// 译者注：上面的代码等价于在全局作用域中调用 eval，和下面两种写法效果一样：

// 写法一：直接调用全局作用域下的 foo 变量
var foo = 1;
function test() {
    var foo = 2;
    window.foo = 3;
    return foo;
}
test(); // 2
foo; // 3

// 写法二：使用 call 函数修改 eval 执行的上下文为全局作用域
var foo = 1;
function test() {
    var foo = 2;
    eval.call(window, 'foo = 3');
    return foo;
}
test(); // 2
foo; // 3

// 在任何情况下我们都应该避免使用 eval 函数。99.9% 使用 eval 的场景都有不使用 eval 的解决方案。

// 伪装的 eval
// 定时函数 setTimeout 和 setInterval 都可以接受字符串作为它们的第一个参数。 
// 这个字符串总是在全局作用域中执行，因此 eval 在这种情况下没有被直接调用。

// 安全问题
// eval 也存在安全问题，因为它会执行任意传给它的代码， 在代码字符串未知或者是来自一个不信任的源时，
// 绝对不要使用 eval 函数。

// 结论
// 绝对不要使用 eval，任何使用它的代码都会在它的工作方式，性能和安全性方面受到质疑。
// 如果一些情况必须使用到 eval 才能正常工作，首先它的设计会受到质疑，这不应该是首选的解决方案， 
// 一个更好的不使用 eval 的解决方案应该得到充分考虑并优先采用。

// undefined 和 null
// JavaScript 有两个表示‘空’的值，其中比较有用的是 undefined。

// undefined 的值
// undefined 是一个值为 undefined 的类型。

// 这个语言也定义了一个全局变量，它的值是 undefined，这个变量也被称为 undefined。
// 但是这个变量不是一个常量，也不是一个关键字。这意味着它的值可以轻易被覆盖。

// 下面的情况会返回 undefined 值：

// 访问未修改的全局变量 undefined。
// 由于没有定义 return 表达式的函数隐式返回。
// return 表达式没有显式的返回任何内容。
// 访问不存在的属性。
// 函数参数没有被显式的传递值。
// 任何被设置为 undefined 值的变量。

// 处理 undefined 值的改变
// 由于全局变量 undefined 只是保存了 undefined 类型实际值的副本，
// 因此对它赋新值不会改变类型 undefined 的值。

// 然而，为了方便其它变量和 undefined 做比较，
// 我们需要事先获取类型 undefined 的值。

// 为了避免可能对 undefined 值的改变，一个常用的技巧是使用一个传递到匿名包装器的额外参数。
// 在调用时，这个参数不会获取任何值。

var undefined = 123;
(function(something, foo, undefined) {
    // 局部作用域里的 undefined 变量重新获得了 `undefined` 值

})('Hello World', 42);
// 另外一种达到相同目的方法是在函数内使用变量声明。

var undefined = 123;
(function(something, foo) {
    var undefined;
    // ...

})('Hello World', 42);
// 这里唯一的区别是，在压缩后并且函数内没有其它需要使用 var 声明变量的情况下，
//     这个版本的代码会多出 4 个字节的代码。


// null 的用处
// JavaScript 中的 undefined 的使用场景类似于其它语言中的 null，
// 实际上 JavaScript 中的 null 是另外一种数据类型。

// 它在 JavaScript 内部有一些使用场景（比如声明原型链的终结 Foo.prototype = null），
// 但是大多数情况下都可以使用 undefined 来代替。

// 译者注：这里有点绕口，其实很简单。如果此函数内没有其它需要声明的变量，
// 那么 var 总共 4 个字符（包含一个空白字符） 就是专门为 undefined 变量准备的，
//     相比上个例子多出了 4 个字节。

// 自动分号插入
// 尽管 JavaScript 有 C 的代码风格，但是它不强制要求在代码中使用分号，实际上可以省略它们。

// JavaScript 不是一个没有分号的语言，恰恰相反上它需要分号来就解析源代码。
// 因此 JavaScript 解析器在遇到由于缺少分号导致的解析错误时，会自动在源代码中插入分号。
