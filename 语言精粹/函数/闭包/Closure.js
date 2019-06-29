// 作用域用来访问它外部的函数参数和变量, (this和argument这两个孤儿不一样)

// 内部函数比外部的函数更持久

// 用函数的方式初始化一个对象 和 用对象字面量来初始化不同

//函数作用域对于value来说 在函数外是不可见的

var myobject = (function() {
    var value = 0;

    return {
        increment: function(inc) {
            value += typeof inc === "number" ? inc : 1;
        },
        getValue: function() {
            return value;
        }
    };
})();

// 以上不是把一个函数赋值给myobject // 而是把调用 该函数 后 返回的return 里的对象字面量 返回给了 myobject

// 然后这样的话myobject就可以访问increment了 比如 myobject.increment

// 和下面的构造函数调用比较

var Quo = function(string) {
    thsi.status = string;
};

// 给Quo的所有实例提供一个名为get_status的公共方法

Que.prototype.get_status = function() {
    return this.status;
};

// 构造一个Que实例

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

// 创建一个名为quo的够着函数

// 它构造出带有get_status方法和status私有属性的一个对象

var quo = function(status) {
    return {
        get_status: function() {
            return status;
        }
    };
};

// 然后构造一个实例

var myQuo = quo("amazed");
console.log(myQuo.get_status());

// 老是假设status 是私有的 是为了保护status参数数据 设计成闭包模式

// 但是呢 函数quo 被设计成无须在前面加上new 就能使用, 所以名字也没首字母大写

// 该对象的一个引用保存在myQuo中, 即使quo已经返回了 但get_status方法仍然享有访问quo对象的status属性的特权

// get_status并不是访问该参数的副本,它方位的就是参数本身 可以访问它被创建时所处上下文环境

// 定义一个函数,它设置一个DOM节点为黄色,然后把它渐变白色
var fade = function(node) {
    var level = 1;
    var step = function() {
        var hax = level.toString(16);
        node.style.backgroundColor = "#FFF" + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(setp, 100);
};

fade(document.body);

// 异步操作,会一点点变化

// 构造一个函数,用正确的方式给一个数组中的节点设置事件处理程序

// 点击一个节点,将会弹出一个对话框显示节点序号

var add_the_handkers = function(nodes) {
    var helper = function(i) {
        return function(e) {
            alert(i);
        };
        var i;
        for (i = 0; i < nodes.length; i += 1) {
            nodes[i].onclick = helper(i);
        }
    };
};
