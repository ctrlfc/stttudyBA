// pop和push 让数组能像堆栈一样工作

// pop方法移除array中的 最后一个元素并返回该元素

// 如果该array是empty.它会返回undefined

var a = ["a", "b", "c"];
var c = a.pop();
// a是["a","b"],c是["c"]

// pop实现

Array.method("pop", function() {
    return this.splice(this.lengeth - 1, 1)[0];
});

// 踢出长度减1的下标的1个元素,把它用新数组的[0]表示
