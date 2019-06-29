// js数组又是对象了,我晕,所以可以用delete运算符号

delete number[2];

// 但是会留下一个underfined

// 我们可以用splice方法,删除并替换

number.splice(2, 1)

// 第一个是从什么序号开始,第二是删几个 后面以此重新编排 所以效率不高

