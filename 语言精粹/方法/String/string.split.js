// split(分割)分割片段来创建一个字符串数组

// limit限制数量

// separator字符串或者正则

// 如果separator为空

var digits = "0123456789";
var a = digits.split("", 5);

// 否则,此方法会在string 中查找所有separator出现的地方. 分割符两边的每个单元文本会被复制到该数组中 忽略g标识

var ip = "192.168.1.0";
var b = ip.split(".");
// 所有的

var c = "|a|b|c".split("|");

var text = "last,first,middle";
var d = text.split(/\s*,\s*/);

// 有一些特例需要注意.来自分组捕获的文本被包含在被分割后的数组中

var e = text.split(/\s*(,)\s*/);

var f = "a|b|c".split(/\|/);
