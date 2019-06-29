// 当一个函数不是对象的属性时, 就被当做一个函数来调用

let sum = add(3, 4);

// this绑定到全局对象(x)

myObject.double = function () {
    const that = this;
    const helper = function () {
        that.value = add(that.value, that.value);
    }
    helper();// 以函数调用helper
};

myObject.double(); // 以方法调用double
console.log(myObject.value);