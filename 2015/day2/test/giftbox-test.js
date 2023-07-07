const { describe, it } = require("node:test");
const assert = require("assert");
const { GiftBox } = require("../src/giftbox");

describe("GiftBox", () => {
  describe("calculateSurfaceArea", () => {
    it("should be 0 square unit if all dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      assert.strictEqual(box.calculateSurfaceArea(), 0);
    });

    it("should be 0 square unit if any two of the dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.strictEqual(box1.calculateSurfaceArea(), 0);
      assert.strictEqual(box2.calculateSurfaceArea(), 0);
      assert.strictEqual(box3.calculateSurfaceArea(), 0);
    });

    it("should be 6 square units for 1x1x1", () => {
      const box = new GiftBox(1, 1, 1);

      assert.strictEqual(box.calculateSurfaceArea(), 6);
    });

    it("should be sum of areas of 6 rectangles for non-unit dimensions", () => {
      const box1 = new GiftBox(1, 2, 3);
      const box2 = new GiftBox(2, 3, 4);

      assert.strictEqual(box1.calculateSurfaceArea(1, 2, 3), 22);
      assert.strictEqual(box2.calculateSurfaceArea(2, 3, 4), 52);
    });
  });

  describe("calculateSlackArea", () => {
    it("should be 0 square unit if any two of the box dimensions are 0", () => {
      const box1 = new GiftBox(1, 0, 0);
      const box2 = new GiftBox(0, 1, 0);
      const box3 = new GiftBox(0, 0, 1);

      assert.strictEqual(box1.calculateSurfaceArea(), 0);
      assert.strictEqual(box2.calculateSurfaceArea(), 0);
      assert.strictEqual(box3.calculateSurfaceArea(), 0);
    });

    it("should be 1 square unit if all the box dimensions are unity", () => {
      const box = new GiftBox(1, 1, 1);

      assert.strictEqual(box.calculateSlackArea(), 1);
    });

    it("should be base area if length and width are the smallest sides", () => {
      const box = new GiftBox(1, 2, 3);

      assert.strictEqual(box.calculateSlackArea(), 2);
    });

    it("should be side area if width and height are the smallest sides", () => {
      const box = new GiftBox(3, 2, 1);

      assert.strictEqual(box.calculateSlackArea(), 2);
    });

    it("should be front area if height and length are the smallest sides", () => {
      const box = new GiftBox(2, 3, 1);

      assert.strictEqual(box.calculateSlackArea(), 2);
    });
  });

  describe("calculateWrapperArea", () => {
    it("should be equal to sum of surface area and base area of the box with smallest length and width", () => {
      const box3 = new GiftBox(1, 2, 3);

      assert.strictEqual(box3.calculateWrapperArea(), 24);
    });

    it("should be equal to sum of surface area and side area of the box with smallest width and height", () => {
      const box1 = new GiftBox(4, 2, 3);

      assert.strictEqual(box1.calculateWrapperArea(), 58);
    });
    it("should be equal to sum of surface area and front area of the box with smallest height and length", () => {
      const box2 = new GiftBox(1, 10, 1);

      assert.strictEqual(box2.calculateWrapperArea(), 43);
    });
  });

  describe("calculateWrappingRibbonLength", () => {
    it("should be 0 if giftbox dimensions are 0", () => {
      const box = new GiftBox(0, 0, 0);

      const actual = box.calculateWrappingRibbonLength();
      const expected = 0;

      assert.strictEqual(actual, expected);
    });

    it("should be twice the sum of any two sides of a box of equal dimensions", () => {
      const box = new GiftBox(1, 1, 1);

      const actual = box.calculateWrappingRibbonLength();
      const expected = 4;

      assert.strictEqual(actual, expected);
    });

    it("should be twice the sum of two smallest sides of a box of unequal dimensions", () => {
      const box = new GiftBox(2, 3, 4);

      const actual = box.calculateWrappingRibbonLength();
      const expected = 10;

      assert.strictEqual(actual, expected);
    });
  });
});
