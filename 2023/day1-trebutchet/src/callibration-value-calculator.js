const { numbers, sumOf, isNumber } = require("../resources/utils");

const getFirstDigit = (callibration) => [...callibration].find(isNumber);

const getLastDigit = (callibration) =>
	[...callibration].reverse().find(isNumber);

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
