new Promise((resolve) => {
    console.log(1);
    resolve();
}).then(() => {
    console.log(2);
});

setTimeout(() => {
    console.log(3);
});
console.log(4); // 1 4 2 3