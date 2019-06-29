// shift 移除数组 array中的 第一个元素并返回该元素

// 如果是空 则返回 undefined

// shift比pop慢很多

var a = ["a", "b", "c"];
var c = a.shift();

// a是["b","c"]&c是"a"

// shift实现

Array.method("shift", function() {
    return this.splice(0, 1)[0];
});
