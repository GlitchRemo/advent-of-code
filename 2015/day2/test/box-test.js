const { describe, it } = require("node:test");
const assert = require("assert");
const { Box } = require("../src/box");

describe("calculateSurfaceArea", () => {
  it("should be 0 unit square if length, width and height are 0 unit", () => {
    const box = new Box(0, 0, 0);
    assert.strictEqual(box.calculateSurfaceArea(), 0);
  });

  it("should be 0 if any two of the dimensions are 0", () => {
    const box = new Box(1, 0, 0);
    assert.strictEqual(box.calculateSurfaceArea(), 0);
  });
});
