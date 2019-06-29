// js 允许给语言的基本类型扩充功能
// 给Object.prototype添加方法,可以让该方法对所有对象都可用.
// 对基本类型都适用

Function.prototype.method = function(name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
    }
    return this;
};

Number.method("integer", function() {
    return Math[this < 0 ? "ceil" : "floor"](this);
});

console.log((-10 / 3).integer());

String.method("trim", function() {
    return this.replace(/^s+|\s+$/g, "");
});

console.log("''" + "   neat".trim() + "''");


// 新方法会立即适用 , 就算对象已经被建立了 因为是在原型上加的 他老汉儿