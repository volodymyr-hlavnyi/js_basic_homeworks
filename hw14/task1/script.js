function* fibonacci(n) {
    let a = 0;
    let b = 1;

    for (let i = 0; i < n; i++) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fibGen = fibonacci(10);

console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8
console.log(fibGen.next().value); // 13

