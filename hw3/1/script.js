function isPrime(number) {
    // Check if the number is less than or equal to 1
    if (number <= 1) {
        return false;
    }

    // Check for factors from 2 to the square root of the number
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // If any factor is found, the number is not prime
            return false;
        }
    }

    // If no factors are found, the number is prime
    return true;
}

function checkNumberStatus(number) {
    if (isPrime(number)) {
        console.log(`The number ${number} is a prime number.`);
    } else {
        console.log(`The number ${number} is not a prime number; it is composite.`);
    }
}

const inputNumber = prompt("Enter a number:");
const number = parseInt(inputNumber);

if (isNaN(number)) {
    console.log("Please enter a valid number.");
} else {
    checkNumberStatus(number);
}