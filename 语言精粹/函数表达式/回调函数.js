function fn(arg1, arg2, callback) {
    var num = Math.ceil(Math.random() * (arg1 - arg2) + arg2);
    callback(num); //传递结果
}

fn(10, 20, function(num) {
    console.log("iam callback!" + num); //随机数
});

function foo() {
    var a = 10;
    return function() {
        a *= 2;
        return a;
    };
}

var f = foo();
f(); //20
f(); //40
