// 函数可以记忆之前操作  记录在对象中,从而避免无谓的重复运算这就是记忆

// 专为对象和数组使用

// 递归函数Fibonacci数列  一个F数字是之前两个F数字之和.最前面两个数字是0和1

var Fibonacci = function (n) {
    return n < 2 ? n : Fibonacci(n - 1) + Fibonacci(n - 2);
};

// 优化一下

var Fibonacci = (function () {
    var memo = [0, 1];
    var fib = function (n) {
        var result = memo[n];
        if (typeof result !== "number") {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    };
    return fib;
})(i);

// 在一个名为memo的数组里保存我们的存储结果,存储结果看隐藏在闭包中,当函数被调用时,这个函数首先检查结果是否已经存在,如果存在,就立即返回结果

// 保存了前2个....

for (var i = 0; i <= 10; i += 1) {
    console.log("//" + i + ":" + Fibonacci(i));
}

// 做一个推广 变成一个带记忆的函数

var memoizer = function (memo, formula) {
    var recur = function (n) {
        var result = memo[n];
        if (typeof result !== "number") {
            result = formula(recur, n);
            memo[n] = result;
        }
        return result;
    };
    return recur;
};
// 把这个recur函数和它的参数传递给formula函数

// 用memoizer定义fibonacci函数,给它一个memo数组和一个formla函数就行

var fibonacci = memoizer([0, 1], function (recur, n) {
    return recur(n - 1) + recur(n - 2);
});

console.log(fibonacci);

// 极大的方便了我们 这样就可以提取一个公式
var factorial = memoizer([1, 1], function (recur, n) {
    return n * recur(n - 1);
});

// var memoizer = function ([0, 1], (recur(n - 1) + recur(n - 2))) {
//     var recur = function ([0, 1]) {
//         var result = [0, 1][n];
//         if (typeof result !== "number") {
//             result = formula(recur, n);
//             memo[n] = result;
//         }
//         return result;
//     };
//     return recur;
// };


// 不知道是回调 还是 递归 感觉有点麻烦