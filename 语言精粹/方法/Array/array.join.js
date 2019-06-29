// join 方法把一个array构造成一个字符串.

// 先把array 每个元素构造成一个字符串

// 接着用一个separator 分隔符 把它们拼接在一起 默认是逗号, 无间隔得用""

// 水都知道join 比 + 快呀

// .... 现在 + 比 join 快了 我的天 日了狗

var a = ["a", "b", "c"];
a.push("d");
var c = a.join("");
