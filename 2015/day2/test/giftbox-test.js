const { describe, it } = require("node:test");
const assert = require("assert");
const { GiftBox } = require("../src/giftbox");

describe("GiftBox", () => {
  describe("calculateSurfaceArea", () => {
    it("should give 0 if all dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      const actual = box.surfaceArea();
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

    it("should give 0 if any two of the dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      const actual1 = box1.surfaceArea();
      const actual2 = box2.surfaceArea();
      const actual3 = box3.surfaceArea();

      const expected1 = 0;
      const expected2 = 0;
      const expected3 = 0;

      assert.strictEqual(actual1, expected1);
      assert.strictEqual(actual2, expected2);
      assert.strictEqual(actual3, expected3);
    });

    it("should give 6 square units for an unit cube", () => {
      const box = new GiftBox(1, 1, 1);

      const actual = box.surfaceArea();
      const expected = 6;

      assert.strictEqual(actual, expected);
    });

    it("should give sum of areas of 6 faces for a cuboid of valid dimensions", () => {
      const box1 = new GiftBox(1, 2, 3);
      const box2 = new GiftBox(2, 3, 4);

      const actual1 = box1.surfaceArea(1, 2, 3);
      const actual2 = box2.surfaceArea(2, 3, 4);

      const expected1 = 22;
      const expected2 = 52;

      assert.strictEqual(actual1, expected1);
      assert.strictEqual(actual2, expected2);
    });
  });

  describe("calculateSmallestSideArea", () => {
    it("should give 0 if any dimension is 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.deepStrictEqual(box1.smallestSideArea(), 0);
      assert.deepStrictEqual(box2.smallestSideArea(), 0);
      assert.deepStrictEqual(box3.smallestSideArea(), 0);
    });

    it("should give dimension² square unit for box of equal dimensions", () => {
      const box = new GiftBox(1, 1, 1);

      assert.strictEqual(box.smallestSideArea(), 1);
    });

    it("should give base area if length and width are the smallest sides", () => {
      const box = new GiftBox(1, 2, 3);

      assert.strictEqual(box.smallestSideArea(), 2);
    });

    it("should give side area if width and height are the smallest sides", () => {
      const box = new GiftBox(3, 2, 1);

      assert.strictEqual(box.smallestSideArea(), 2);
    });

    it("should give front area if height and length are the smallest sides", () => {
      const box = new GiftBox(2, 3, 1);

      assert.strictEqual(box.smallestSideArea(), 2);
    });
  });

  describe("calculateSmallestSidePerimeter", () => {
    it("should give 0 if any two dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.deepStrictEqual(box1.smallestSidePerimeter(), 0);
      assert.deepStrictEqual(box2.smallestSidePerimeter(), 0);
      assert.deepStrictEqual(box3.smallestSidePerimeter(), 0);
    });

    it("should give base perimeter if length and width are the smallest sides", () => {
      const box = new GiftBox(1, 2, 3);

      assert.strictEqual(box.smallestSidePerimeter(), 6);
    });

    it("should give side perimeter if width and height are the smallest sides", () => {
      const box = new GiftBox(3, 2, 1);

      assert.strictEqual(box.smallestSidePerimeter(), 6);
    });

    it("should give front perimeter if height and length are the smallest sides", () => {
      const box = new GiftBox(2, 3, 1);

      assert.strictEqual(box.smallestSidePerimeter(), 6);
    });
  });

  describe("calculateVolume", () => {
    it("should give 0 if giftbox dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      const actual = box.volume();
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

    it("should give dimension³ cubic units if box dimensions are equal", () => {
      const box = new GiftBox(1, 1, 1);

      const actual = box.volume();
      const expected = 1;

      assert.strictEqual(actual, expected);
    });

    it("should give product of length, width and height if box dimensions are unequal", () => {
      const box = new GiftBox(1, 2, 3);

      const actual = box.volume();
      const expected = 6;

      assert.strictEqual(actual, expected);
    });
  });
});
