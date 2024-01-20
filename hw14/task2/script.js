function* flatten(arr) {
    for (const item of arr) {
        if (Array.isArray(item)) {
            yield* flatten(item);
        } else {
            yield item;
        }
    }
}

const nestedArr = [1, [2, 3], [4, 5, [6, 7]]];
const flattenGen = flatten(nestedArr);

console.log([...flattenGen]);
// [1, 2, 3, 4, 5, 6, 7]
