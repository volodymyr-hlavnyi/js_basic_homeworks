function sequence(...functions) {
    return function (...args) {
        return functions.reduce((result, fn) => fn(result), ...args);
    };
}

const addTwo = x => x + 2;
const multiplyByThree = x => x * 3;
const subtractTen = x => x - 10;

const combinedFunction = sequence(addTwo, multiplyByThree, subtractTen);

console.log(combinedFunction(5));
