function multiplyBy2(n, callback) {
    return callback(n * 2);
}

function subtract3(n, callback) {
    return callback(n - 3);
}

function add10(n, callback) {
    return callback(n + 10);
}

// Now chaining the operations:
const result = multiplyBy2(5, (res1) => {
    return subtract3(res1, (res2) => {
        return add10(res2, (res3) => {
            return res3;
        });
    });
});

console.log(result);
