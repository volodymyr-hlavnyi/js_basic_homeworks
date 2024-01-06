function logArguments(fn) {
    return function (...args) {
        console.log('Arguments:', args);
        return fn(...args);
    };
}

function exampleFunction(a, b, c) {
    console.log('Executing with arguments:', a, b, c);
}

const decoratedFunction = logArguments(exampleFunction);

decoratedFunction(1, 2, 3);