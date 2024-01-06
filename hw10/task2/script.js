function isPalindrome(num) {
    const reverseNum = parseInt(num.toString().split('').reverse().join(''), 10);
    return num === reverseNum;
}

function findLychrelNumber(num) {
    let steps = 0;
    let currentNum = num;

    while (steps < 10000) {  // limit
        const reverseNum = parseInt(currentNum.toString().split('').reverse().join(''), 10);
        const sum = currentNum + reverseNum;

        if (isPalindrome(sum)) {
            return { result: sum, steps: steps + 1 };
        }

        currentNum = sum;
        steps++;
    }

    return { result: null, steps: steps };
}

const result1 = findLychrelNumber(196);
console.log(result1);

const result2 = findLychrelNumber(312);
console.log(result2);