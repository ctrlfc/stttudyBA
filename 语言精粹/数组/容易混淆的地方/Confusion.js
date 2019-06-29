// 当属性名是小而连续的整数时候 用数组

// js对数组和对象的区别很混乱 我能感觉到

// 居然自己定义函数区别

var is_array = function() {
    return value && typeof value === "object" && value.constructor === Array;
};

var is_Array = function() {
    return Object.prototype.toString.apply(value) === "[object Array]";
};
// 通过原型判断就没了窗口和frme的失效问题

