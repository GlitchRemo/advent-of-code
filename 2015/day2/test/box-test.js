const { describe, it } = require("node:test");
const assert = require("assert");
const { Box } = require("../src/box");

describe("calculateSurfaceArea", () => {
  it("should be 0 square unit for 0x0x0", () => {
    const box = new Box(0, 0, 0);
    assert.strictEqual(box.calculateSurfaceArea(), 0);
  });

  it("should be 0 square unit if any two of the dimensions are 0", () => {
    const box1 = new Box(1, 0, 0);
    const box2 = new Box(0, 1, 0);
    const box3 = new Box(0, 0, 1);
    assert.strictEqual(box1.calculateSurfaceArea(), 0);
    assert.strictEqual(box2.calculateSurfaceArea(), 0);
    assert.strictEqual(box3.calculateSurfaceArea(), 0);
  });

  it("should be 6 square units for 1x1x1", () => {
    const box = new Box(1, 1, 1);
    assert.strictEqual(box.calculateSurfaceArea(), 6);
  });

  it("should be sum of areas of 6 rectangles for non-unit dimensions", () => {
    const box = new Box(1, 2, 3);
    assert.strictEqual(box.calculateSurfaceArea(1, 2, 3), 22);
  });
});

describe("calculateSmallestArea", () => {
  it("should be 0 square unit if any two of the box dimensions are 0", () => {
    const box1 = new Box(1, 0, 0);
    const box2 = new Box(0, 1, 0);
    const box3 = new Box(0, 0, 1);
    assert.strictEqual(box1.calculateSurfaceArea(), 0);
    assert.strictEqual(box2.calculateSurfaceArea(), 0);
    assert.strictEqual(box3.calculateSurfaceArea(), 0);
  });

  it("should be 1 square unit if all the box dimensions are unity", () => {
    const box = new Box(1, 1, 1);
    assert.strictEqual(box.calculateSmallestArea(), 1);
  });

  it("should be 2 square units for 1x2x3 box", () => {
    const box = new Box(1, 2, 3);
    assert.strictEqual(box.calculateSmallestArea(), 2);
  });

  it("should be 2 square units for 3x2x1 box", () => {
    const box = new Box(3, 2, 1);
    assert.strictEqual(box.calculateSmallestArea(), 2);
  });

  it("should be 2 square units for 2x3x1 box", () => {
    const box = new Box(2, 3, 1);
    assert.strictEqual(box.calculateSmallestArea(), 2);
  });
});
