function findGCD(a, b) {

    a = Math.abs(Math.floor(a));
    b = Math.abs(Math.floor(b));

    // Euclidean algorithm to find GCD
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

const num1 = prompt("Enter the 1st number:");
const num2 = prompt("Enter the 2nd number:");

const gcd = findGCD(num1, num2);

console.log(`The GCD (НСД) of ${num1} and ${num2} is: ${gcd}`);