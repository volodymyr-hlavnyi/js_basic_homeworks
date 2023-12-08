function reverseArray(arr) {
    return arr.slice().reverse();
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reversedArray = reverseArray(originalArray);


console.log(reversedArray);