// Function to determine whether a year is a leap year
function isLeapYear(year) {
    // A year is a leap year if it is divisible by 4
    // But an exception: if the year is divisible by 100
    // If the year is divisible by 100 and
    // also divisible by 400, then it is still a leap year
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// User input for the year
const userInput = prompt("Enter the year:");
const year = parseInt(userInput);

// Check if the input is a valid integer
if (!isNaN(year)) {
    // Determine if the year is a leap year and display the result
    const result = isLeapYear(year)
        ? `${year} is a leap year.`
        : `${year} is not a leap year.`;

    console.log(result);
} else {
    console.log("Please enter a valid integer for the year.");
}