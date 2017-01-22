/**
 * Created by Ctrlf on 17/1/22.
 */
var size = 8;
var board = "";
for (var n = 1; n <= size; n++) {
    for (var m = 1; m <= size; m++) {
        if ((n + m) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);
