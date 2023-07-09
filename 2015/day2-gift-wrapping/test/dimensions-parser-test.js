const { describe, it } = require("node:test");
const assert = require("assert");
const { parseDimensions } = require("../src/dimensions-parser");

describe("parseDimensions", () => {
  it("should give an empty list if we pass nothing", () => {
    assert.deepStrictEqual(parseDimensions(""), []);
  });

  it("should give dimensions of boxes for multiple boxes", () => {
    assert.deepStrictEqual(parseDimensions("1x1x1"), [[1, 1, 1]]);
    assert.deepStrictEqual(parseDimensions("1x1x1\n1x2x3"), [
      [1, 1, 1],
      [1, 2, 3],
    ]);
  });
});
