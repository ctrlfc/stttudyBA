// localeCompare(that) 比较2个字符串 String比that小则为负数 相等则为0

var m = ["AAA", "A", "aa", "a", "Aa", "aaa"];
m.sort(function (a, b) {
    return a.localeCompare(b)
})
