const fs = require("fs");
const { parseRecords } = require("./src/record-parser");
const { calculateSumOfGameIds } = require("./src/sum-of-game-ids-calculator");

const readRecords = () => fs.readFileSync("./resources/input.txt", "utf-8");

const main = () => {
	const rawRecords = readRecords();
	const records = parseRecords(rawRecords);

	const bag = { red: 12, green: 13, blue: 14 };
	const sumOfGameIds = calculateSumOfGameIds(records, bag);

	console.log(`Total callibrations value is ${sumOfGameIds}`);
};

main();
