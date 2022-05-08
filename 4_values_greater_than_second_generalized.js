// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. Print how many values this is. What will you do if the array is only one element long?

function valuesGreaterThanSecond(arr) {
    var count = 0;
    newArr = []
    if (arr.length < 2) {
        console.log("There isn't a second value to compare our number with.");
        return "There isn't a second value to compare our number with."
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[1]) {
            newArr.push(arr[i])
            count++;
        }
    }
    console.log("There are " + count + " values greater than " + arr[1] + " in [" + arr + "]!" + " These values are [" + newArr + "].");
    return newArr
}
valuesGreaterThanSecond([1,3,4,5,2,1,4,5]);
valuesGreaterThanSecond([2])