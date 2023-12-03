const isNumber = (value) => !isNaN(Number(value));

const sumOf = (values) => values.reduce((a, b) => a + b);

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
};

module.exports = { isNumber, sumOf, numbers };
