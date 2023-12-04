const sumOf = (numbers) => numbers.reduce((a, b) => a + b);

const getGreater = (a, b) => (a > b ? a : b);

const findPowerSet = (sets) => {
	let minNoOfRedCubes = 0;
	let minNoOfBlueCubes = 0;
	let minNoOfGreenCubes = 0;

	for (const set of sets) {
		minNoOfRedCubes = getGreater(set.red, minNoOfRedCubes);
		minNoOfBlueCubes = getGreater(set.blue, minNoOfBlueCubes);
		minNoOfGreenCubes = getGreater(set.green, minNoOfGreenCubes);
	}

	return minNoOfRedCubes * minNoOfBlueCubes * minNoOfGreenCubes;
};

const calculateSumOfPowerSets = (records) => {
	const powerSets = Object.values(records).map(findPowerSet);
	return sumOf(powerSets);
};

module.exports = { calculateSumOfPowerSets };
