function drawTree(height) {
    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Example usage:
const inputHeight = prompt("Enter the height of the Tree:");
const treeHeight = parseInt(inputHeight);

if (isNaN(treeHeight) || treeHeight <= 0) {
    console.log("Please enter a valid positive number for the height of the Tree.");
} else {
    drawTree(treeHeight);
}