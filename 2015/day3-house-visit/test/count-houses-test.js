const assert = require("assert");
const { describe, it } = require("node:test");
const {
  findNextCoordinate,
  countHousesVisited,
  countHousesVisitedByTwoSantas,
  recordHousesVisited,
  divideDirections,
  partitionBy,
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

describe("recordVisitedHouses", () => {
  it("should give initial house coordinate if no direction is provided", () => {
    const housesVisited = new Set(["0_0"]);

    assert.deepStrictEqual(recordHousesVisited(""), housesVisited);
  });

  it("should give one house coordinate for only one direction", () => {
    const housesVisited = new Set(["0_0"]);
    housesVisited.add("1_0");

    assert.deepStrictEqual(recordHousesVisited(">"), housesVisited);
  });

  it("should give multiple house coordinates for multiple directions when all houses are visited once", () => {
    const housesVisited = new Set(["0_0"]);
    housesVisited.add("1_0");
    housesVisited.add("1_1");

    assert.deepStrictEqual(recordHousesVisited(">^"), housesVisited);
  });

  it("should give multiple unique house coordinates for multiple directions when houses are visited more than once", () => {
    const housesVisited = new Set(["0_0"]);
    housesVisited.add("1_0");
    housesVisited.add("1_1");
    housesVisited.add("1_0");

    assert.deepStrictEqual(recordHousesVisited(">^v"), housesVisited);
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

describe("countHousesVisitedByTwoSantas", () => {
  it("should be 1 if both the Santas doesn't move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(""), 1);
  });

  it("should be 2 if only one Santa makes a move", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas(">"), 2);
  });

  it("should be the count of unique houses visited by both Santas if both of them move in multiple directions", () => {
    assert.strictEqual(countHousesVisitedByTwoSantas("^v"), 3);
    assert.strictEqual(countHousesVisitedByTwoSantas("^>v<"), 3);
    assert.strictEqual(countHousesVisitedByTwoSantas("^v^v^v^v^v"), 11);
  });
});

describe("partitionBy", () => {
  it("should give an empty list as both evens and odds, if an empty list is provided", () => {
    assert.deepStrictEqual(
      partitionBy([], (index) => index % 2 === 0),
      { evens: [], odds: [] }
    );
  });

  it("should give a singleton list as evens and an empty list as odds, if a singleton list is provided", () => {
    assert.deepStrictEqual(
      partitionBy([1], (index) => index % 2 === 0),
      { evens: [1], odds: [] }
    );
  });

  it("should give a singleton list as both evens and odds, if a list of two elements is provided", () => {
    assert.deepStrictEqual(
      partitionBy([1, 2], (index) => index % 2 === 0),
      { evens: [1], odds: [2] }
    );
  });

  it("should divide the provided list based on the predicate", () => {
    assert.deepStrictEqual(
      partitionBy([1, 2, 3, 4, 5], (index) => index % 2 === 0),
      { evens: [1, 3, 5], odds: [2, 4] }
    );
  });
});
