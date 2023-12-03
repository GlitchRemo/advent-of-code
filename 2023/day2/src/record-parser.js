const getNumberOfCubes = (set) => {
	const regexForBlue = /(\d+) blue/;
	const regexForRed = /(\d+) red/;
	const regexForGreen = /(\d+) green/;

	const blueCubes = set.match(regexForBlue)?.at(1) ?? 0;
	const redCubes = set.match(regexForRed)?.at(1) ?? 0;
	const greenCubes = set.match(regexForGreen)?.at(1) ?? 0;

	return {
		blue: Number(blueCubes),
		red: Number(redCubes),
		green: Number(greenCubes),
	};
};

const parseRecord = (rawRecord) => {
	const [gameInfo, rawSets] = rawRecord.split(":");

	const gameId = gameInfo.split(" ")[1];
	const sets = rawSets.split(";").map(getNumberOfCubes);

	return [gameId, sets];
};

const parseRecords = (rawRecords) =>
	rawRecords
		.trim()
		.split("\n")
		.reduce((records, rawRecord) => {
			const [gameId, sets] = parseRecord(rawRecord);
			return { ...records, [gameId]: sets };
		}, {});

module.exports = { parseRecords };
