// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valuesGreaterThanSecond(arr) {
    var count = 0;
    newArr = []
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