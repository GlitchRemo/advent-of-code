const { describe, it } = require("node:test");
const assert = require("assert");
const { calculateSumOfPowerSets } = require("../src/sum-of-power-sets");

describe("sum of power sets", () => {
	it("should give the power set of one game if one game is played", () => {
		const records = {
			1: [
				{ red: 4, green: 0, blue: 3 },
				{ red: 1, green: 2, blue: 6 },
				{ red: 0, green: 2, blue: 0 },
			],
		};

		assert.strictEqual(calculateSumOfPowerSets(records), 48);
	});

	it("should give the power set of multiple games", () => {
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

		assert.strictEqual(calculateSumOfPowerSets(records), 2286);
	});
});
