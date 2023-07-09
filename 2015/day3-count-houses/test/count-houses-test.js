const assert = require("assert");
const { describe, it } = require("node:test");
const {
  findNextCoordinate,
  countHousesVisited,
  countHousesVisitedByTwoSantas,
  recordHousesVisited,
} = require("../src/count-houses");

describe("findNextCoordinate", () => {
  it("should give the adjacent coordinate to the given coordinate towards East, if > is provided", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, ">"), {
      x: 1,
      y: 0,
    });
  });

  it("should give the adjacent coordinate to the given coordinate towards West, if < is provided", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "<"), {
      x: -1,
      y: 0,
    });
  });

  it("should give the adjacent coordinate to the given coordinate towards North, if ^ is provided", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "^"), {
      x: 0,
      y: 1,
    });
  });

  it("should give the adjacent coordinate to the given coordinate towards South, if v is provided", () => {
    assert.deepStrictEqual(findNextCoordinate({ x: 0, y: 0 }, "v"), {
      x: 0,
      y: -1,
    });
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
  it("should give initial house coordinate if no direction is provided", () => {
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
  it("should be 1 if both the Santas doesn't move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(""), 1);
  });

  it("should be 2 if only one Santa makes a move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(">"), 2);
  });
});
