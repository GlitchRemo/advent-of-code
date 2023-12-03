const fs = require("fs");
const {
	findCallibrationValue,
	calculateCallibrationsValue,
} = require("./src/callibration-value-calculator");

const readCallibrations = () =>
	fs.readFileSync("./resources/input.txt", "utf-8");

const main = () => {
	const rawCallibrations = readCallibrations();
	const callibrations = rawCallibrations.trim().split("\n");
	const callibrationsValue = calculateCallibrationsValue(callibrations);

	console.log(`Total callibrations value is ${callibrationsValue}`);
};

main();
