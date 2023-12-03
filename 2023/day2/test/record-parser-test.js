const assert = require("assert");
const { describe, it } = require("node:test");
const { parseRecords } = require("../src/record-parser");

describe("record parser", () => {
	it("should parse one record in specified format", () => {
		const rawRecord = "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green";
		const record = {
			1: [
				{ blue: 3, red: 4, green: 0 },
				{ red: 1, green: 2, blue: 6 },
				{ green: 2, red: 0, blue: 0 },
			],
		};

		assert.deepStrictEqual(parseRecords(rawRecord), record);
	});

	it("should parse multiple records in specified format", () => {
		const rawRecords =
			"Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

		const records = {
			1: [
				{ blue: 3, red: 4, green: 0 },
				{ red: 1, green: 2, blue: 6 },
				{ green: 2, red: 0, blue: 0 },
			],
			2: [
				{ blue: 1, green: 2, red: 0 },
				{ green: 3, blue: 4, red: 1 },
				{ green: 1, blue: 1, red: 0 },
			],
			3: [
				{ green: 8, blue: 6, red: 20 },
				{ blue: 5, red: 4, green: 13 },
				{ green: 5, red: 1, blue: 0 },
			],
			4: [
				{ green: 1, red: 3, blue: 6 },
				{ green: 3, red: 6, blue: 0 },
				{ green: 3, blue: 15, red: 14 },
			],
			5: [
				{ red: 6, blue: 1, green: 3 },
				{ blue: 2, red: 1, green: 2 },
			],
		};

		assert.deepStrictEqual(parseRecords(rawRecords), records);
	});
});
