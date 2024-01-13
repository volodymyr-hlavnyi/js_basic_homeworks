function randomDelayPrint(message) {
    function delayPrint(char, delay) {
        setTimeout(() => {
            console.log(char);
        }, delay);
    }

    for (let i = 0; i < message.length; i++) {
        const char = message[i];
        const delay = Math.random() * 1000;
        delayPrint(char, delay);
    }
}

randomDelayPrint("Hello my friend!");