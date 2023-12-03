const { numbers, sumOf, identity, reverse } = require("../resources/utils");

const getHiddenDigit = (text, transform) => {
	const actualText = transform(text);

	const hiddenDigitInWords = Object.keys(numbers).find((numberInWord) =>
		actualText.includes(numberInWord)
	);

	return numbers[hiddenDigitInWords];
};

const getDigit = (callibration, transform) => {
	let substr = "";

	for (const char of callibration) {
		substr += char;
		const number = getHiddenDigit(substr, transform);
		if (number) return number;
	}
};

const getFirstDigit = (callibration) => getDigit(callibration, identity);

const getLastDigit = (callibration) => getDigit(reverse(callibration), reverse);

const calculateCallibrationValue = (callibration) => {
	const firstDigit = getFirstDigit(callibration);
	const lastDigit = getLastDigit(callibration);

	return firstDigit * 10 + Number(lastDigit);
};

const calculateCallibrationsValue = (callibrations) => {
	const callibrationsValues = callibrations.map(calculateCallibrationValue);
	return sumOf(callibrationsValues);
};

module.exports = {
	calculateCallibrationsValue,
};
