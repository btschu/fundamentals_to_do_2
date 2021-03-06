// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(arr){
    return arr[0] + arr.length;
}

console.log(firstPlusLength([1,2,3,4]));// returns 5
console.log(firstPlusLength(["what?",2,3,4]));// returns what?4
console.log(firstPlusLength([false,2,3,4]));// returns 4

