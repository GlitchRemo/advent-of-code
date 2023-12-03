const { describe, it } = require("node:test");
const assert = require("assert");
const { calculateSumOfGameIds } = require("../src/sum-of-game-ids-calculator");

describe("sum of game ids calculator", () => {
	it("should give zero if records contains one impossible game ", () => {
		const records = {
			1: [
				{ red: 20, green: 8, blue: 6 },
				{ red: 4, green: 13, blue: 5 },
				{ red: 1, green: 5, blue: 0 },
			],
		};

		const bag = { red: 12, green: 13, blue: 14 };

		assert.strictEqual(calculateSumOfGameIds(records, bag), 0);
	});

	it("should give one if records contains one possible game of id 1", () => {
		const records = {
			1: [
				{ red: 2, green: 8, blue: 6 },
				{ red: 4, green: 13, blue: 5 },
				{ red: 1, green: 5, blue: 0 },
			],
		};

		const bag = { red: 12, green: 13, blue: 14 };

		assert.strictEqual(calculateSumOfGameIds(records, bag), 1);
	});

	it("should give sum of all game ids if records contains multiple possible games", () => {
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

		const bag = { red: 12, green: 13, blue: 14 };

		assert.strictEqual(calculateSumOfGameIds(records, bag), 8);
	});
});
