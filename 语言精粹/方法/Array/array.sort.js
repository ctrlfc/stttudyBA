// sort 是排序的方法 ,但不能正确的排序

var n = [4, 8, 15, 16, 23, 42];
// n.sort();

// 你的比较函数一个接收2个参数, 并且如果这个两个参数相等则返回0, 如果第1个参数应该排列在前面, 则返回一个负数 第2个参数在后面 就返回一个正数

n.sort(function(a, b) {
    return a - b;
}); //冒泡排序

console.log(n);

var m = ["aa", "bb", "a", 4, 8, 15, 16, 23, 42];
m.sort(function(a, b) {
    if (a === b) {
        return 0;
    }
    if (typeof a === typeof b) {
        return a < b ? -1 : 1;
    }
    return typeof a < typeof b ? -1 : 1;
});

console.log(m);

// 可以编写对象

// by函数接收一个成员名字符串作为参数

// 并返回一个可以用来对包含该成员的对象数组进行排序的比较函数

var by = function(name) {
    return function(o, p) {
        var a, b;
        if (typeof o === "object" && typeof p === "object" && o && p) {
            a = o[name];
            b = p[name];
            if (a === b) {
                return 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            throw {
                name: "Error",
                message: "Expected an object when sorting by" + name
            };
        }
    };
};

var s = [
    { first: "Joe", last: "Besser" },
    { first: "Moe", last: "Howard" },
    { first: "Joe", last: "DeRita" },
    { first: "Joe", last: "DeRita" },
    { first: "Joe", last: "DeRita" },
    { first: "Joe", last: "DeRita" }
];

s.sort(by("first"));

// sort 是不稳定的

s.sort(by("first")).sort(by("last"));

// 如果想要正确的序列

// by函数接受一个成员名字字符串和一个可选的次要比较函数为参数

// 并返回一个可以用来对包含改成员数组进行排序的比较函数

// 当o[name]和p[name]相等,次要比较函数被用来

var by = function(name, minor) {
    return function(o, p) {
        var a, b;
        if (o && p && typeof o === "object" && typeof p === "objetc") {
            a = o[name];
            b = p[name];
            if (a === b) {
                return typeof minor === "function" ? minor(o, p) : 0;
            }
            if (typeof a === typeof b) {
                return a < b ? -1 : 1;
            }
            return typeof a < typeof b ? -1 : 1;
        } else {
            // throw {
            //     name: "Error",
            //     message: "Expected an object when sorting by" + name
            // };
        }
    };
};

s.sort(by("last", by("first")));
console.log(s);
