// Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!"; if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".

function fitTheFirstValue(arr) {
    if (arr[0] > arr.length) {
        console.log("Too big!!!");
    }
    else if (arr[0] < arr.length) {
        console.log("Too small!!!");
    }
    else {
        console.log("Just right!");
    }
}
fitTheFirstValue([1, 2, 3, 4, 5])
fitTheFirstValue([6, 2, 3, 4, 5])
fitTheFirstValue([5, 2, 3, 4, 5])