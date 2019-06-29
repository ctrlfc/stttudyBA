// js的length是没有上限的 无限 无限

// length属性不一定等于数组里的属性个数

// 可以用任大于当前length属性的下标存元素

var myArray = [];
myArray.length;

myArray[1e6] = true;
myArray.length; // 1000001
// 但是myArray只有一个数

// [] 后置下标运算符把它所含的表达式转换成一个字符串,如果该表达式有toString方法,就用这个值

// 这个字符串被用作属性名算了(溢出)

// 设置大的length不会增大空间,小了会删除多余的length属性

number.length = 3;
number[number.length] = "shi"; // 后面加

number.push("go"); // 后面加
