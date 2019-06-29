// 做浅复制

// 首先 复制array[start],一直复制到array[end]为止

// 默认值是该数组的长度array.length

// 如果两个参数的任何一个是负数,array.length会和他们相加,试图变为非负数

// 如果start大于等于array.length,得到的是一个新的空数组

// 千万把slice和splice弄混了

var a = ["a", "b", "c"];
var b = a.slice(0, 1);
var c = a.slice(1);
var d = a.slice(1, 2);
console.log(a, b, c, d);
