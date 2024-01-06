function isPerfectNumber(number) {
    let sum = 0;
    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

function findPerfectNumbers(upToNumber) {
    const perfectNumbers = [];
    for (let i = 2; i <= upToNumber; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }
    return perfectNumbers;
}


const inputNumber = prompt("Enter a number (N):");
const N = parseInt(inputNumber);

if (isNaN(N) || N <= 0) {
    console.log("Please enter a valid positive number.");
} else {
    const perfectNumbers = findPerfectNumbers(N);
    if (perfectNumbers.length === 0) {
        console.log(`There are no perfect numbers in the range from 1 to ${N}.`);
    } else {
        console.log(`Perfect numbers in the range from 1 to ${N}: ${perfectNumbers.join(', ')}`);
    }
}