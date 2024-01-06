function summarize(num) {
    return function (value = 1) {
        return num + value;
    };
}

const addToFive = summarize(5);

console.log(addToFive(3));
console.log(addToFive());
