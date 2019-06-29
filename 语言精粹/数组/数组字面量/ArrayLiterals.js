// 数组字面量提供非常方便的表示法 , 用中括号包裹0或多个逗号分隔的值得表达式

var empty = [];

var number = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
];

console.log(empty[1]);
console.log(number[1]);

console.log(empty.length);
console.log(number.length);

// 对象字面量:

var number_Object = {
    "0": "zero",
    "1": "one",
    "2": "two",
    "3": "three"
};

// number继承于Array.prototype 而objec_number继承于 object.prototype

// number有个诡异的length属性,而number_object没有

////////大多数 语言 数组类型一致 但是js呢  随意 我喜欢任意混合类型

var misc = [
    "string",
    90,
    true,
    null,
    undefined,
    ["nested", "array"],
    { object: true },
    NaN,
    Infinity,
    false
];

console.log(misc.length);
