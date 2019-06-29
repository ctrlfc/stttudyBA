// match(regexp) 字符串和正则匹配 根据g来决定匹配与否

// 没有g则match和exec结果一样,如果有则成一个包含所有匹配的数组

var text =
    "<html><body bgcolor = linen><p>" +
    "This is <b>bold</b>!</p></body></html>";
var tags = /[^<>]+|<\/?>([A-Za-z]+)([^<>]*)>/g;

var a, i;

a = text.match(tags);

for (i = 0; i < a.length; i++) {
    // var element = array[i];
    console.log(("// [" + i + "]" + a[i]));
}
