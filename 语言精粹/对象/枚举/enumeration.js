// for in 会遍历所有

// 用hasOwnProperty 方法除去不需要的原型值

// 用typeof 除去 可能是函数 的值

let another_stooge = [];

let name;

for (name in another_stooge) {
    if (typeof another_stooge[name] !== "function") {
        document.writeln(name + ":" + another_stooge[name]);
        console.log(name + ":" + another_stooge[name]);
    }
}

// 用 for 创建数组确保顺序 ,且不出现原型链中的属性

let i;

const properties = ["first-name", "middle-name", "last-name", "profession"];

for (i = 0; i < properties.length; i += 1) {
    document.writeln(properties[i] + ":" + another_stooge[properties[i]]);
}
