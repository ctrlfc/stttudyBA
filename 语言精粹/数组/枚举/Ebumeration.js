// forin语句可以遍历数组 因为是对象嘛

// for in 无法保证顺序

// 可以用常规的for循环 规避这个问题

var i;

for (i = 0; i < array.length; i++) {
    var element = array[i];
    console.log(element);
}
