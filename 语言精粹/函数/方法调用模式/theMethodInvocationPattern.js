// 当函数被保存到对象里的时候 , 一个属性被称为方法

// 包含一个 . 或者 []下标表达式,那么它就是被当做一个方法来调用

const myObject = {
    value: 0,
    increment: function(inc) {
        this.value += typeof inc === "number" ? inc : 1;
    }
};


// value 属性 和 increment 方法

// myObject.increment();
// console.log(myObject.value);

myObject.increment(2)
console.log(myObject.value);