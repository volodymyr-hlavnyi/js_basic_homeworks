function uniqueValues(arr1, arr2) {
    const combinedArray = arr1.concat(arr2);
    return Array.from(new Set(combinedArray));
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const uniqueValuesArray = uniqueValues(array1, array2);

console.log(uniqueValuesArray);