// 作用域 控制 变量和参数的可见性及其生命周期

// 自动内存管理+减少名称冲突=自己的地盘自己做主

// 有函数作用域 es6有块级作用域

// 最好在顶部声明所有的变量

var foo = function() {
    var a = 3,
        b = 5;
    var bar = function() {
        var b = 8,
            c = 11;
        // 此时, a3 b8 c11
        a += b + c;
        // 此时, a22 b8 c11
    };
    //此时,a3,b5,c无
    bar();
    ///此时,a22,b5,
    console.log(a);
};

foo();
