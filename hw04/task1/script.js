function reverseString(str) {
    return str.split('').reverse().join('');
}


const inputString = prompt("Input string:");
const reversedString = reverseString(inputString);

console.log(`Revers string: ${reversedString}`);