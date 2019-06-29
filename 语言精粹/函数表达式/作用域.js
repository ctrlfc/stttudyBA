
function fn(){
	if(false){
		var fnVar = 2;
	}
	console.log(fnVar); // undefined??
}
fn();
//function 后面总能访问到前面的

function fn() {
	if (false) {
		var fnVar;
		fnVar = 2;
	}
}
fn();

//声明先解析 我早就知道有这个了 再赋值//
//只有函数作用域

