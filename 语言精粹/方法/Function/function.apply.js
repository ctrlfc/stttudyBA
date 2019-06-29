// apply方法调用function ,传递一个会被绑定到this 上的的对象的一个可以选择的数组作为参数

// apply 方法被用在apply调用模式

Function.method("bind", function(that) {
    // 返回一个函数,调用这个函数就像调用那个对象的一个方法
    var method = this,
        slice = Array.prototype.slice,
        args = slice.apply(arguments, [1]);
    return function() {
        return method.apply(that, args.concat(slice.apply(arguments, [0])));
    };
});

var x = function() {
    return this.value;
}.bind({
    value: 666
});
console.log(x());
