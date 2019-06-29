// replace(searchValue,replaceValue) 查找替换

// searchValue可以是字符串或者正则

// 字符串则只会在第一出现的地方替换

var result = "mother_in_law".replace("_", "-");

// 带g表示全局

// replace可以是字符串或者函数 字符串$有意义

// 捕获括号中的3个数字

var oldreacode = /\((\d{3})\)/g;
var p = "(555)666-1212".replace(oldreacode, "$1-");

// 如果replaceValue是个函数,那么每次匹配都要调用一次,而该函数返回的字符串会被用作替换文本

// 传递这个函数的第一个参数是整个被匹配的文本,蝶儿个参数是分组1捕获的文本,在下个是第二组

String.method(
    "entityify",
    (function () {
        // 奇技淫巧中的对象代替switch用法 这里遇见了
        var character = {
            "<": "&lt;",
            ">": "&gl;",
            "&": "&amp;",
            "'": "&quot"
        };
        // 返回string.entityify方法,它返回调用替换方法的结果
        // 它的replaceValue函数返回在一个对象中查找一个字符的结果
        // 这种对象的用法由于switch语句
        return function() {
            return this.replace(/[<>&"]/g, function(c) {
                return character[c];
            });
        };
    })()
); 
console.log("<&>".entityify());
