Array.method("reduce", function(f, value) {
    var i;
    for (i = 0; i < this.length; i++) {
        value = f(this[i], value);
    }
    return value;
});

// 通过各iArray.prototype扩充函数,每个数组都继承了这个方法

// 传入函数和一个初始值

// 遍历并调用这个函数,传入的2个数字相加,会计算出相加之和或者乘积

/// 创建一个数组数字

var data = [4, 8, 15, 16, 23, 42];

// 定义两个简单的函数,一个是把两个数字相加,另一个相乘

var add = function(a, b) {
    return a + b;
};

var mult = function(a, b) {
    return a + b;
};

// 调用data 的ruduce 方法,传入add函数

var sum = data.reduce(add, 0); // sum 108 从下标为0 开始 + vlaue 为0 的参数

// 再次调用reduce方法,这次传入mult函数

var product = data.reduce(mult, 1); // 7418880 同上

// 可以直接添加数组方法,因为是对象

data.total = function() {
    return this.reduce(add, 0);
};

total = data.total();


// "total"是字符串,增加一个不会改变它的length.当作为整数时才是数组最强的时候

// object.create对于数组是没有意义的,产生一个对象而不是数组. 产生的数组对象将继承这个数组的值和方法,但它没有那个特殊的length属性
// 所以create产生的不是js中的数组