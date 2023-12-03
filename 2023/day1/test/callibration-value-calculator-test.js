const { describe, it } = require("node:test");
const assert = require("assert");
const {
	calculateCallibrationsValue,
} = require("../src/callibration-value-calculator");

describe("callibration value calculator", () => {
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

	it("should give the callibration value for single callibrations when callibration contains numbers in word", () => {
		assert.strictEqual(calculateCallibrationsValue(["two1nine"]), 29);
	});

	it("should give the callibration value for multiple callibrations when callibration contains numbers in word", () => {
		assert.strictEqual(
			calculateCallibrationsValue([
				"two1nine",
				"eightwothree",
				"abcone2threexyz",
				"xtwone3four",
				"4nineeightseven2",
				"zoneight234",
				"7pqrstsixteen",
			]),
			281
		);
	});
});
