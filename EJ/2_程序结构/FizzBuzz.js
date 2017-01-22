/**
 * Created by Ctrlf on 17/1/22.
 */

for (var number = 1; number <= 100; number++)
    if (number % 5 == 0 && number % 3 == 0)
        console.log("FizzBuzz");
    else if (number % 5 == 0 && number % 3 != 0)
        console.log("Buzz");
    else if (number % 3 == 0)
        console.log("Fizz");
    else
        console.log(number);

for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";
    console.log(output || n);
}
