function intervalRace(functions, t) {
    const results = [];
    let index = 0;

    function runNextFunction() {
        if (index < functions.length) {
            const result = functions[index]();
            results.push(result);
            index++;
            setTimeout(runNextFunction, t);
        }
    }

    runNextFunction();

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(results);
        }, functions.length * t);
    });
}

// Приклад використання:
const function1 = () => "Function 1 executed";
const function2 = () => "Function 2 executed";
const function3 = () => "Function 3 executed";

const functions = [function1, function2, function3];
const interval = 1000;

intervalRace(functions, interval).then((results) => {
    console.log(results);
});