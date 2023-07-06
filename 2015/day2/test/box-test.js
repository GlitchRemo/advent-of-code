const { describe, it } = require("node:test");
const assert = require("assert");
const { Box } = require("../src/box");

describe("calculateSurfaceArea", () => {
  it("should be 0 square unit if length, width and height are 0 unit", () => {
    const box = new Box(0, 0, 0);
    assert.strictEqual(box.calculateSurfaceArea(), 0);
  });

  it("should be 0 square unit if any two of the dimensions are 0", () => {
    const box = new Box(1, 0, 0);
    assert.strictEqual(box.calculateSurfaceArea(), 0);
  });

  it("should be sum of 6 unit areas for unit dimensions", () => {
    const box = new Box(1, 1, 1);
    assert.strictEqual(box.calculateSurfaceArea(), 6);
  });
});

describe("calculateSmallestArea", () => {
  it("should be 0 square unit if any of the dimensions are 0", () => {
    const box = new Box(1, 0, 0);
    assert.strictEqual(box.calculateSmallestArea(), 0);
  });
});
