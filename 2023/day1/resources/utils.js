const identity = (text) => text;
const reverse = (text) => text.split("").reverse().join("");

const sumOf = (values) => values.reduce((a, b) => a + b, 0);

const numbers = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
};

module.exports = { identity, reverse, numbers, sumOf };
