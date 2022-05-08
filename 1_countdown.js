// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    var arr = [];
    for (var i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log("Length of Array:" + " " + arr.length);
    return arr;
}

console.log(countdown(20));