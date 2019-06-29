// push 方法是把一个或者多个参数item附加到一个数组的尾部

// 和concat方法不同的是,它会修改array.如果参数item是一个数组,它会把参数数组作为单元数整个添加到数组中,并返回这个array的新长度值

var a = ["a", "b", "c"];
var b = ["x", "y", "z"];
var c = a.push(b, true);

// a 是["a","b","c",["x","y","z"],true]

// c 是 5

/////// 返回的是长度

// push 可以这样实现

Array.method("push", function() {
    this.splice.apply(
        this,
        [this.length, 0].concat(Array.prototype.slice.apply(arguments))
    );
    return this.length;
});
