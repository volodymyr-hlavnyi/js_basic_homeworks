function generatePermutations(arr) {
    if (arr.length === 1) {
        return [arr];
    }

    const permutations = [];

    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        const remainingElements = [...arr.slice(0, i), ...arr.slice(i + 1)];

        const partialPermutations = generatePermutations(remainingElements);

        for (const permutation of partialPermutations) {
            permutations.push([currentElement, ...permutation]);
        }
    }

    return permutations;
}


const inputArray = [1, 2, 3, 4];
const result = generatePermutations(inputArray);
console.log(result);
