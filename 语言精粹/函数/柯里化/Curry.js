// 柯里化允许我们把函数与传递给它的参数相结合,产生出一个新的函数

var add1 = add.curry(1);
console.log(add1(6));

Function.method("curry", function() {
    var args = arguments,
        that = this;
    return function() {
        return that.apply(null, args.concat(arguments));
    };
}); // 好像不对

// 用concat连接2个参数 但是arguments没有啊concat方法啊

Function.method("curry", function() {
    var slice = Array.prototype.slice,
        args = slice.apply(arguments),
        that = this;
    return function() {
        return that.apply(null, args.concat(slice.apply(arguments)));
    };
});

// 必须加上数组原型slice