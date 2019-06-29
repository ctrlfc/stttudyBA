// 对象通过引用传值

let stooge = {};
let x = stooge;

x.nickname = "Curly";

let nick = stooge.nickname;

console.log(nick);
