const fs = require("fs");
const { parseRecords } = require("./src/record-parser");
const { calculateSumOfGameIds } = require("./src/sum-of-game-ids-calculator");
const { calculateSumOfPowerSets } = require("./src/sum-of-power-sets");

const readRecords = () => fs.readFileSync("./resources/input.txt", "utf-8");

const main = () => {
	const rawRecords = readRecords();
	const records = parseRecords(rawRecords);

	const bag = { red: 12, green: 13, blue: 14 };
	const sumOfGameIds = calculateSumOfGameIds(records, bag);
	const sumOfPowerSets = calculateSumOfPowerSets(records);

	console.log(`Sum of game ids is ${sumOfGameIds}`);
	console.log(`Sum of power sets is ${sumOfPowerSets}`);
};

main();
