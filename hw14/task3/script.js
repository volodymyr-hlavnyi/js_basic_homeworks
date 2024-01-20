async function* asyncGenerator(promises) {
    const results = await Promise.allSettled(promises);

    for (const result of results) {
        if (result.status === 'fulfilled') {
            yield result.value;
        } else {
            yield Promise.reject(result.reason);
        }
    }
}

const promises = [
    new Promise(resolve => setTimeout(() => resolve(1), 1500)),
    new Promise(resolve => setTimeout(() => resolve(2), 500)),
    new Promise((_, reject) => setTimeout(() => reject('Error'), 1000)),
];

const generator = asyncGenerator(promises);

(async () => {
    for await (const result of generator) {
        console.log(result);
    }
})()
    .catch(error => console.error(error));
