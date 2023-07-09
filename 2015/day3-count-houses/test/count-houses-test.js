const assert = require("assert");
const { describe, it } = require("node:test");
const { countHouses, nextCoordinateInEast } = require("../src/count-houses");

describe("countHouses", () => {
  it("should be 1 if Santa doesn't move from starting location", () => {
    assert.strictEqual(countHouses(""), 1);
  });

  it("should be 2 if Santa moves only once", () => {
    assert.strictEqual(countHouses(">"), 2);
  });
});

describe("nextCoordinateInEast", () => {
  it("should shift the coodinate in east", () => {
    const coordinate = { x: 0, y: 0 };
    const nextCoordinate = { x: 1, y: 0 };

    assert.deepStrictEqual(
      nextCoordinateInEast(coordinate, ">"),
      nextCoordinate
    );
  });
});
