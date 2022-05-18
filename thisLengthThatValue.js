// Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.

function thisLengthThatValue(num1, num2) {
    var arr = [];
    if (num1 == num2) {
        console.log("Jinx!");
    }
    for (var i = 0; i < num1; i++) {
        arr[i] = num2
    }
    return arr
}
console.log(thisLengthThatValue(5,5));
console.log(thisLengthThatValue(12,6));
