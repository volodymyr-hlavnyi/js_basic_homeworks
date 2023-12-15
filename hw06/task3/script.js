async function retry(fn, maxAttempts) {
    let attempts = 0;

    return new Promise(async (resolve, reject) => {
        while (attempts < maxAttempts) {
            try {
                const result = await fn();
                resolve(result);
                return;
            } catch (error) {
                attempts++;
                if (attempts === maxAttempts) {
                    reject(error);
                } else {
                    console.error(`Attempt ${attempts} failed. Retrying...`);
                }
            }
        }
    });
}

async function exampleFunction() {
    const randomNumber = Math.random();
    if (randomNumber < 0.8) {
        throw new Error('Random error');
    }
    return randomNumber;
}

const decoratedFunction = retry(exampleFunction, 6);

decoratedFunction
    .then(result => console.log('Success:', result))
    .catch(error => console.error('Failed after maximum attempts:', error.message));
