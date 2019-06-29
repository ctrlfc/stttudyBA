// new 会改变return 的行为

// 创建一个名为Quo的构造器函数. 他构造一个带status属性的对象

var Quo = function(string) {
    thsi.status = string;
};

// 给Quo的所有实例提供一个名为get_status的公共方法

Que.prototype.get_status = function() {
    return this.status;
};

// 构造一个Que实例

var myQuo = new Quo("confused");
console.log(myQuo.get_status());

// (感觉有点傻这种方式)