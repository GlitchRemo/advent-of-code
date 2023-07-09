const assert = require("assert");
const { describe, it } = require("node:test");
const {
  findNextCoordinate,
  countHousesVisited,
  countHousesVisitedByTwoSantas,
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
    const currentCoordinate = { x: 0, y: 0 };
    const eastNotation = ">";
    const nextCoordinate = { x: 1, y: 0 };

    assert.deepStrictEqual(
      findNextCoordinate(currentCoordinate, eastNotation),
      nextCoordinate
    );
  });

  it("should give the immediate next coordinate in West", () => {
    const currentCoordinate = { x: 0, y: 0 };
    const westNotation = "<";
    const nextCoordinate = { x: -1, y: 0 };

    assert.deepStrictEqual(
      findNextCoordinate(currentCoordinate, westNotation),
      nextCoordinate
    );
  });

  it("should give the immediate next coordinate in North", () => {
    const currentCoordinate = { x: 0, y: 0 };
    const northNotation = "^";
    const nextCoordinate = { x: 0, y: 1 };

    assert.deepStrictEqual(
      findNextCoordinate(currentCoordinate, northNotation),
      nextCoordinate
    );
  });

  it("should give the immediate next coordinate in South", () => {
    const currentCoordinate = { x: 0, y: 0 };
    const northNotation = "v";
    const nextCoordinate = { x: 0, y: -1 };

    assert.deepStrictEqual(
      findNextCoordinate(currentCoordinate, northNotation),
      nextCoordinate
    );
  });
});

describe("countHousesVisitedByTwoSantas", () => {
  it("should be 2 if both the Santas doesn't move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(""), 2);
  });
});
