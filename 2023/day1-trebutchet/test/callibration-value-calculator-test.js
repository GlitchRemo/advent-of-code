const { describe, it } = require("node:test");
const assert = require("assert");
const {
	calculateCallibrationsValue,
	calculateCallibrationsValuePart2,
} = require("../src/callibration-value-calculator");

describe("callibration value calculator part 1", () => {
	it("should give the callibration value for one callibration with first and last digit present in extremes", () => {
		assert.strictEqual(calculateCallibrationsValue(["1abc2"]), 12);
	});

	it("should give the callibration value for one callibration with first and last digit present in between", () => {
		assert.strictEqual(calculateCallibrationsValue(["pqr3stu8vwx"]), 38);
		assert.strictEqual(calculateCallibrationsValue(["treb7uchet"]), 77);
		assert.strictEqual(calculateCallibrationsValue(["a1b2c3d4e5f"]), 15);
	});

	it("should give the callibration value for multiple callibrations", () => {
		assert.strictEqual(
			calculateCallibrationsValue([
				"1abc2",
				"pqr3stu8vwx",
				"a1b2c3d4e5f",
				"treb7uchet",
			]),
			142
		);
	});
});
