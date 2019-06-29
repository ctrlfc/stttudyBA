// charAt(pos)

// 返回在string中pos位置的字符

// 如果小于0或者大于等于长度 返回空字符串

// js没字符类型

var name = "Curly";
var initial = name.charAt(0);

// 实现

String.method("charAt", function(pos) {
    return this.slice(pos, pos + 1);
    // 浅复制出来 从哪个位置 复制几个
});

