/**
 * Created by Ctrlf on 17/1/22.
 */
var abc = "abc";
console.log(abc.length);


/*for (var line = 0; line < 7; line = line + 1) {
    for (var number = 0; number < 7; number = number + 1) {
        console.log("*")
    }
}*/

for(var line = "*"; line.length < 7;line+="*")
    console.log(line);
