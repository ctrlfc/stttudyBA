// 函数被调用 才会出现"快递"一样的参数 数组 arguments

// 它可以管理所有的"包裹",包括那些没有被收取的包裹(其实是多余的参数)

// 让一个函数不需要指定参数个数

//大量相加函数

//内部sum 和 外部sum 不会产生冲入

//该函数只会看到内部的那个变量

var sum = function() {
    var i,
        sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};

console.log(sum(4, 8, 15, 16, 23, 42));

// 不太好

