const assert = require("assert");
const { describe, it } = require("node:test");
const {
  findNextCoordinate,
  countHousesVisited,
  countHousesVisitedByTwoSantas,
  recordHousesVisited,
} = require("../src/count-houses");

describe("findNextCoordinate", () => {
  it("should give the immediate next coordinate in specified direction", () => {
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

describe("recordVisitedHouses", () => {
  it("should give initial house coordinate for no direction", () => {
    const housesVisited = new Set([JSON.stringify({ x: 0, y: 0 })]);

    assert.deepStrictEqual(recordHousesVisited(""), housesVisited);
  });

  it("should give one house coordinate for only one direction", () => {
    const housesVisited = new Set([JSON.stringify({ x: 0, y: 0 })]);
    housesVisited.add(JSON.stringify({ x: 1, y: 0 }));

    assert.deepStrictEqual(recordHousesVisited(">"), housesVisited);
  });

  it("should give multiple unique house coordinates for multiple directions", () => {
    const housesVisited = new Set([JSON.stringify({ x: 0, y: 0 })]);
    housesVisited.add(JSON.stringify({ x: 1, y: 0 }));
    housesVisited.add(JSON.stringify({ x: 1, y: 1 }));

    assert.deepStrictEqual(recordHousesVisited(">^"), housesVisited);
  });
});

describe("countHousesVisitedByTwoSantas", () => {
  it("should be 2 if both the Santas doesn't move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(""), 2);
  });

  it.skip("should be 3 if only one Santa moves", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(">"), 3);
  });
});
