function formatYearsMessage(years) {
    function getYearWord(years) {
        if (years === 1) {
            return "рік";
        } else if (years >= 2 && years <= 4) {
            return "роки";
        } else {
            return "років";
        }
    }
    const yearWord = getYearWord(years);
    return `Вам ${years} ${yearWord}.`;
}

// User input for the number of years
const userInput = prompt("Enter the number of years:");
const years = parseInt(userInput);

// Check if the input is a valid integer
if (!isNaN(years)) {
    // Format and display the message based on the number of years
    const message = formatYearsMessage(years);
    console.log(message);
} else {
    console.log("Please enter a valid integer for the number of years.");
}