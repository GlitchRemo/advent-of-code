const assert = require("assert");
const { describe, it } = require("node:test");
const { countHouses } = require("../src/count-houses");

describe("countHouses", () => {
  it("should be 1 if Santa doesn't move from starting location", () => {
    assert.strictEqual(countHouses(""), 1);
  });

  it("should be 2 if Santa moves only once", () => {
    assert.strictEqual(countHouses(">"), 2);
  });
});
