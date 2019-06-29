// 最简单最快

// regexp匹配string 则返回true

// 不适用g

var b = /&.+;/.test("frank&amp;beans");

// test的实现
RegExp.method("test", function(string) {
    return this.exec(string) !== null;
});
