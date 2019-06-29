// 模块大发好
// 就用函数和闭包啊
// 只提供接口 隐藏自身和实现的 函数或者对象

// 一个变量放外面不安全 放里面又有损耗 真tam麻烦

// 所以闭包出来了

String.method(
    "deentityify",
    (function() {
        // 字符实体表, 映射字符实体的名字到对应的字符

        var entity = {
            quot: '""',
            lt: "<",
            gt: ">"
        };

        // 返回deentityify方法

        return function() {
            // 这才是deentityif方法 它调用字符串的repalce方法
            //查找 & 和 ; 结束的子字符串 如果这些字符可以在字符实体表中找到,
            // 那么久降该字符实体替换为映射中的值

            return this.replace(/&([^&;]+);/g, function(a, b) {
                var r = entity[b];
                return typeof r === "string" ? r : a;
            });
        };
    })()
);

console.log("&lt;&quot;&gt".deentityify());

// kanbudogn

// 模块模式 一般: 一个定义了私有变量和函数的函数;利用闭包创建可以访问私有变量和函数的特权函数,最后返回了这个特权函数,或者把它保存到一个可访问的地方

// 模块模式用来产生安全对象

var serial_maker = function() {
    // 返回一个用来产生唯一字符串的对象
    // 唯一字符串由两部分组成:前缀+序列号
    // 该对象包含一个设置前缀的方法,一个设置序列号的方法
    // 和一个产生唯一字符串gensym方法

    var prefix = "";
    var seq = 0;
    return {
        set_prefix: function(p) {
            prefix = String(p);
        },
        set_seq: function(s) {
            seq = s;
        },
        gensym: function() {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    };
};

var seqer = serial_maker();
seqer.set_prefix("Q");
seqe.set_seq(1e3);
var unique = seqer.gensym();

// 保护return 之前的 不是全局的变量 不能改变prefix和seq