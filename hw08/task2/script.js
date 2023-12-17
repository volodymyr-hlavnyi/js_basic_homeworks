function counter(startValue, step) {
    let currentValue = startValue;

    const increment = () => {
        currentValue += step;
        return currentValue;
    };

    const decrement = () => {
        currentValue -= step;
        return currentValue;
    };

    const reset = () => {
        currentValue = startValue;
        return currentValue;
    };

    return {
        increment,
        decrement,
        reset,
        getCurrentValue: () => currentValue,
    };
}

const myCounter = counter(0, 2);

console.log(myCounter.increment());
console.log(myCounter.increment());
console.log(myCounter.decrement());
console.log(myCounter.reset());
console.log(myCounter.getCurrentValue());
