function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else {
        return num.toString();
    }
}

const userInput = prompt("Enter number:");
const number = parseInt(userInput);

if (!isNaN(number)) {
    const result = fizzBuzz(number);
    console.log(result);
} else {
    console.log("Sorry, but is not a number.");
}