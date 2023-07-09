const assert = require("assert");
const { describe, it } = require("node:test");
const {
  findNextCoordinate,
  countHousesVisited,
} = require("../src/count-houses");

describe("countHouses", () => {
  it("should be 1 if Santa doesn't move from starting location", () => {
    assert.strictEqual(countHousesVisited(""), 1);
  });

  it("should be 2 if Santa moves only once", () => {
    assert.strictEqual(countHousesVisited(">"), 2);
  });

  it("should be the count of unique houses visited by Santa if Santa moves in multiple directions", () => {
    assert.strictEqual(countHousesVisited("^>v<"), 4);
    assert.strictEqual(countHousesVisited("^v^v^v^v^v"), 2);
  });
});

describe("findNextCoordinate", () => {
  it("should give the immediate next coordinate in East", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, ">"), {
      x: 1,
      y: 0,
    });
  });

  it("should give the immediate next coordinate in West", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "<"), {
      x: -1,
      y: 0,
    });
  });

  it("should give the immediate next coordinate in North", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "^"), {
      x: 0,
      y: 1,
    });
  });

  it("should give the immediate next coordinate in South", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "v"), {
      x: 0,
      y: -1,
    });
  });
});
