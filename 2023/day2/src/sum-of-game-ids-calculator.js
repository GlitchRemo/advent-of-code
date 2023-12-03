const sumOfNumbers = (numbers) =>
	numbers.reduce((a, b) => Number(a) + Number(b), 0);

const isPossibleSet = (set, bag) =>
	set.red <= bag.red && set.blue <= bag.blue && set.green <= bag.green;

const isPossibleGame = (sets, bag) =>
	sets.every((set) => isPossibleSet(set, bag));

const calculateSumOfGameIds = (records, bag) => {
	const possibleGameIds = Object.keys(records).filter((gameId) =>
		isPossibleGame(records[gameId], bag)
	);

	return sumOfNumbers(possibleGameIds);
};

module.exports = { calculateSumOfGameIds };
