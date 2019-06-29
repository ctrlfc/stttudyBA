// 有些方法没有返回值
// 让那些不反回任何值得的方法返回this 而不是 underfined 就是级联

getElement("myBoxDiv")
    .move(350, 150)
    .width(100)
    .height(100)
    .color("red")
    .border("10px outset")
    .padding("4px")
    .appendText("Please stand by")
    .on("mousedown", function(m) {
        this.startDrag(m, this, getNinth(m));
    })
    .om("mousemove", "drag")
    .on("mousemove", "stopDrag")
    .later(2000, function() {
        this.color("yellow")
            .setHTML("What hath God wraught?")
            .slide(400, 40, 200, 200);
    })
    .tip("This box is resizeable");

// 就是链式啊 我晕
