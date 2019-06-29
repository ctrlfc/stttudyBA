// 自己调用自己 直接或间接

var hanoi = function(disc, src, aux, dst) {
    if (disc > 0) {
        hanoi(disc - 1, src, dst, aux);
        console.log("Move disc" + disc + "from" + src + "to" + dst);
        hanoi(disc - 1, aux, src, dst);
    }
};

hanoi(3, "Src", "Aux", "Dst");

// 定义walk_the_DOM函数,它从某个指定的节点开始,按HTML源码中的顺序访问该树的每个节点

// 它会调用一个函数,并依次传递每个节点给它,walk_the_DOM调用自己去处理每一个子节点

var walk_the_DOM = function walk(node, func) {
    func(node);
    node = node.firstChild;
    while (node) {
        walk(node, func);
        node = node.nextSiling;
    }
};

//定义 getElementsByAttribute 函数 它以 一个属性名称字符串和一个可选的匹配作为参数

//它调用walk_the_DOM,传递一个用来查找节点属性名的函数作为参数

//匹配的节点会累加到数组中

var getElementsByAttribute = function(att, value) {
    var results = [];
    walk_the_DOM(document.body, function(node) {
        var actual = node.nodeType === 1 && node.getAttribute(att);
        if (
            typeof actual === "string" &&
            (actual === value || typeof value !== "string")
        ) {
            results.push(node);
        }
    });
    return results;
};

// 构建一个带尾递归的函数, 它会返回自己调用的结果,所以是尾递归

// js没有对此有优化

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};

console.log(factorial(4));
