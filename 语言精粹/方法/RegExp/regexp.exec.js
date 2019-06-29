// exec 是正则当中最强大但是是最慢的方法

// 如果成功匹配就会返回一个数组

// 数组下标为0则返回正则表达式regexp匹配的字字符串

// 下标为1则是分钟1捕获的文本

// 下标2的元素是分组2捕获的文本

// so 失败则返回null

// 如果regexp带有一个g标识(全局标识),事情变得非常复杂

// lastIndex初始为0, 匹配成功lastIndexN被设置为该匹配后第一个字符,不成功则为0

// 利用exec去查询一个匹配模式在一个字符串中发生了几次

// 提前退出则需要重置,而且因子匹配lastIndex为0的情况

////把一个简单的HTML文本分解为标签和文本

//// (entityify方法请参加string.replace)

//// 对诶个标签和文本,都产生一个数组包含如下元素

// [0]整个

// [1]/斜杠.如果有

// [2]标签名

// [3]属性,如果有任何属性的话

var text =
    "<html><body bgcolor=linen><p>" + "This is<b>bold</b>!</p></body></html>";
var tags = /[^<>]+|<(\/?)([A-Za-z]+)([^<>]*)>/g;

var a, i;

while ((a = tags.exec(text))) {
    for (i = 0; i < a.length; i += 1) {
        console.log(("//[" + i + "]" + a[i]).entityify());
    }
    console.log();
}
