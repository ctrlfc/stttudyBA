// array.unshift(item)

// unshift方法像push一样,用于把元素添加到数组中,但它是把添加的item放到头头上

// 返回array新的length

var a = ["a", "b", "c"];
var r = a.unshift("?", "@");

// unshift实现

Array.method("unshift", function() {
    this.splice.apply(
        this,
        [0, 0].concat(Array.prototype.slice.apply(arguments))
    );
    return this.length;
});
