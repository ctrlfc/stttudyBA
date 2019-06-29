// 和indexof差不多,但是增search是以正则为参数

// search(regexp)

// 如果匹配到返回第一个匹配的首字符位置,没有则返回-1,会忽略g 就是没有全局 只会返回一个

var text = "ant in it he says 'Any damn fool could";
var pos = text.search(/["']/);
