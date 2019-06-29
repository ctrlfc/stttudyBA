//命名函数
function func(a,b,c) {
	// body...
}

//匿名函数
function(){}


//赋值匿名函数
var func = function(argument) {
	// body...
};

var sum = (function(x,y,z) {
	return (x+y+z);
})();

alert(sum(1,2,3));
