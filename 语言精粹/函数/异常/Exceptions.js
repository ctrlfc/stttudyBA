var add = function(a, b) {
    if (typeof a !== " number" || typeof b !== "number") {
        throw {
            name: "TypeError",
            message: "add needs numbers"
        };
    }
    return a + b;
};

// 传说中的手动报错?

// 该 exception 对象被传递到一个try语句的catch从句

// false就会触发

var try_it = function() {
    try {
        add("seven");
    } catch (e) {
        console.log(e.name + ":" + e.message);
    }
};
try_it();

// 处理异常用