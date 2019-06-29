// 说道函数式了,所有函数有方法


// apply方法让我们构建一个参数数组传递给调用函数

// 构建一个包含两个数字的数组,并将它们相加

var array = [3, 4];
var sum = add.apply(null, array); // sum 值为7

// 构造一个包含status成员对象

var statusObject = {
    status: "A-OK"
};

// statusObject 斌没有继承来至Que.prototype,但可以在statusObject上调用
// 用get_status方法,尽管statusObject并没有一个名为get_status的方法

var status = Que.prototype.get_status.apply(statusObject);
// a-ok