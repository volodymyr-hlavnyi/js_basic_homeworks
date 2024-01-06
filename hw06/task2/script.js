function validate(fn, validator) {
    return function (...args) {
        if (validator(args)) {
            return fn(...args);
        } else {
            throw new Error('Arguments validation failed.');
        }
    };
}

function sum(a, b) {
    return a + b;
}

// Example with validator -> number
const validator = (args) => args.every(arg => typeof arg === 'number');

const validatedSum = validate(sum, validator);


// Corrected args
console.log(validatedSum(2, 3));


// Uncorrected args
try {
    validatedSum(2, '3');
} catch (error) {
    console.error(error.message);
}