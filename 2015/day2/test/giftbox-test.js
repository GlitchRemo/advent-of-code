const { describe, it } = require("node:test");
const assert = require("assert");
const { GiftBox } = require("../src/giftbox");

describe("GiftBox", () => {
  describe("calculateSurfaceArea", () => {
    it("should give 0 if all dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      assert.strictEqual(box.calculateSurfaceArea(), 0);
    });

    it("should give 0 if any two of the dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.strictEqual(box1.calculateSurfaceArea(), 0);
      assert.strictEqual(box2.calculateSurfaceArea(), 0);
      assert.strictEqual(box3.calculateSurfaceArea(), 0);
    });

    it("should give 6 square units for an unit cube", () => {
      const box = new GiftBox(1, 1, 1);

      assert.strictEqual(box.calculateSurfaceArea(), 6);
    });

    it("should give sum of areas of 6 faces for a cuboid of positive dimensions", () => {
      const box1 = new GiftBox(1, 2, 3);
      const box2 = new GiftBox(2, 3, 4);

      assert.strictEqual(box1.calculateSurfaceArea(1, 2, 3), 22);
      assert.strictEqual(box2.calculateSurfaceArea(2, 3, 4), 52);
    });
  });

  describe("calculateSmallestSideArea", () => {
    it("should give 0 if any two dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.deepStrictEqual(box1.calculateSmallestSideArea(), 0);
      assert.deepStrictEqual(box2.calculateSmallestSideArea(), 0);
      assert.deepStrictEqual(box3.calculateSmallestSideArea(), 0);
    });

    it("should give dimension² square unit for box of equal dimensions", () => {
      const box = new GiftBox(1, 1, 1);

      assert.strictEqual(box.calculateSmallestSideArea(), 1);
    });

    it("should give base area if length and width are the smallest sides", () => {
      const box = new GiftBox(1, 2, 3);

      assert.strictEqual(box.calculateSmallestSideArea(), 2);
    });

    it("should give side area if width and height are the smallest sides", () => {
      const box = new GiftBox(3, 2, 1);

      assert.strictEqual(box.calculateSmallestSideArea(), 2);
    });

    it("should give front area if height and length are the smallest sides", () => {
      const box = new GiftBox(2, 3, 1);

      assert.strictEqual(box.calculateSmallestSideArea(), 2);
    });
  });

  describe("calculateSmallestSidePerimeter", () => {
    it("should give 0 if any two dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.deepStrictEqual(box1.calculateSmallestSidePerimeter(), 0);
      assert.deepStrictEqual(box2.calculateSmallestSidePerimeter(), 0);
      assert.deepStrictEqual(box3.calculateSmallestSidePerimeter(), 0);
    });

    it("should give base area if length and width are the smallest sides", () => {
      const box = new GiftBox(1, 2, 3);

      assert.strictEqual(box.calculateSmallestSidePerimeter(), 6);
    });

    it("should give side area if width and height are the smallest sides", () => {
      const box = new GiftBox(3, 2, 1);

      assert.strictEqual(box.calculateSmallestSidePerimeter(), 6);
    });

    it("should give front area if height and length are the smallest sides", () => {
      const box = new GiftBox(2, 3, 1);

      assert.strictEqual(box.calculateSmallestSidePerimeter(), 6);
    });
  });

  describe("calculateVolume", () => {
    it("should give 0 if giftbox dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      const actual = box.calculateVolume();
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

    it("should give dimension³ cubic units if box dimensions are equal", () => {
      const box = new GiftBox(1, 1, 1);

      const actual = box.calculateVolume();
      const expected = 1;

      assert.strictEqual(actual, expected);
    });

    it("should give product of length, width and height if box dimensions are unequal", () => {
      const box = new GiftBox(1, 2, 3);

      const actual = box.calculateVolume();
      const expected = 6;

      assert.strictEqual(actual, expected);
    });
  });
});
