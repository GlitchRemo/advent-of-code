const { describe, it } = require("node:test");
const { MaterialCalculator } = require("../src/material-calculator");
const assert = require("assert");

describe("MaterialCalculator", () => {
  describe("calculateTotalWrapperArea", () => {
    it("should be 0 for if no giftBox dimension is created", () => {
      const giftBoxDimensions = [];
      const materialCalculator = new MaterialCalculator();

      materialCalculator.createGiftBoxes(giftBoxDimensions);

      const actual = materialCalculator.calculateTotalWrapperArea();
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should be the wrapper area of one giftBox if one giftBox is created", () => {
      const giftBoxDimensions = [[1, 2, 3]];
      const materialCalculator = new MaterialCalculator();

      materialCalculator.createGiftBoxes(giftBoxDimensions);

      const actual = materialCalculator.calculateTotalWrapperArea();
      const expected = 24;
      assert.strictEqual(actual, expected);
    });

    it("should be the sum of wrapper areas of all giftBoxes if multiple giftboxes are created", () => {
      const giftBoxDimensions = [
        [1, 2, 3],
        [2, 3, 4],
      ];
      const materialCalculator = new MaterialCalculator();

      materialCalculator.createGiftBoxes(giftBoxDimensions);

      const actual = materialCalculator.calculateTotalWrapperArea();
      const expected = 82;
      assert.strictEqual(actual, expected);
    });
  });

  describe("calculateTotalRibbonLength", () => {
    it("should be 0 if no box is created", () => {
      const giftBoxDimensions = [];
      const materialCalculator = new MaterialCalculator();

      materialCalculator.createGiftBoxes(giftBoxDimensions);

      const actual = materialCalculator.calculateTotalRibbonLength();
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should be the length of ribbon needed to wrap one box if one box is created", () => {
      const giftBoxDimensions = [[2, 3, 4]];
      const materialCalculator = new MaterialCalculator();

      materialCalculator.createGiftBoxes(giftBoxDimensions);

      const actual = materialCalculator.calculateTotalRibbonLength();
      const expected = 34;
      assert.strictEqual(actual, expected);
    });
  });
});
