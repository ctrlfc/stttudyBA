// 复制string的一部分构造新的字符串

// 如果strat是负数,将与length相加.end可选,默认值是string.length 如果end参数是负数,那么它将与length相加,end相当于你要去的最后一个字符串加1

// p开始的n个字符(p,p+n)

var text = "andinithesays'anydamnfoolcould";
var a = text.slice(18);
var b = text.slice(0, 3);
var c = text.slice(-5);
var d = text.slice(19, 32);
