function isPalindrome(str) {

    const cleanStr = str.toLowerCase().replace(/ /g, '');
    // Compare
    return cleanStr === cleanStr.split('').reverse().join('');
}

const inputString = prompt("Enter a string:");

if (isPalindrome(inputString)) {
    console.log(`${inputString} - this is a palindrome.`);
} else {
    console.log('${inputString} - this is not a palindrome.');
}