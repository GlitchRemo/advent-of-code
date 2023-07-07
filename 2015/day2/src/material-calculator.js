const { GiftBox } = require("./giftbox");
const total = (numbers) => numbers.reduce((a, b) => a + b, 0);

class MaterialCalculator {
  #giftBoxes;

  createGiftBoxes(giftBoxesDimensions) {
    this.#giftBoxes = giftBoxesDimensions.map(
      ([l, w, h]) => new GiftBox(l, w, h)
    );
  }

  #calculateWrapperArea(giftBox) {
    return giftBox.calculateSurfaceArea() + giftBox.calculateSmallestSideArea();
  }

  #calculateRibbonLength(giftBox) {
    return giftBox.calculateSmallestSidePerimeter() + giftBox.calculateVolume();
  }

  calculateTotalWrapperArea() {
    return this.#giftBoxes.reduce(
      (totalWrapperArea, giftBox) =>
        totalWrapperArea + this.#calculateWrapperArea(giftBox),
      0
    );
  }

  calculateTotalRibbonLength() {
    return this.#giftBoxes.reduce(
      (totalRibbonLength, giftBox) =>
        totalRibbonLength + this.#calculateRibbonLength(giftBox),
      0
    );
  }
}

module.exports = { MaterialCalculator };
