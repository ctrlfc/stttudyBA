function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i)
    } else {
        for (let i = start; i >= end; i += step) array.push(i)
    }

    return array
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value
    };
    return total;
}
console.log(range(10, 1));
console.log(range(2, 5, 1));
console.log(sum(range(1, 10)));


// sum=> (start,end) {

// }
// for (let i of 10) {

// }