// array.dim 可以预设值

Array.dim = function(dimension, initial) {
    var a = [],
        i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

// 创建一个包含10个0的整数

var myArray = Array.dim(10, 0);

// js无多维数组 , 支持元素为数组的数组

var matrix = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

matrix[2][1]; //7

// 为了创建一个二维数组或者数组的数组,必须自己去创建那个数组的数组

for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}
// Array.dim不能用的 d

// 一个空的矩阵的每个单元会拥有一个初始值undefined,如果你希望它们有不同的初始值,你必须明确地设置它们,js应该对矩阵提供更好的支持

Array.matrix = function(m, n, initial) {
    var a,
        i,
        j,
        mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// 构造一个0填充 4*4矩阵

var myMatrix = Array.matrix(4, 4, 0);

// 用来构造一个单位矩阵的方法

Array.identity = function(n) {
    var i,
        mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);

console.log(myMatrix[3][3]);
