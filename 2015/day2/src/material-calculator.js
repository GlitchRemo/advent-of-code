const { GiftBox } = require("./giftbox");
const total = (numbers) => numbers.reduce((a, b) => a + b, 0);
const multiply = (a, b) => a * b;

class MaterialCalculator {
  #giftBoxes;

  createGiftBoxes(giftBoxesDimensions) {
    this.#giftBoxes = giftBoxesDimensions.map(
      ([l, w, h]) => new GiftBox(l, w, h)
    );
  }

  #calculateSlackArea(giftBox) {
    return multiply(...giftBox.getTwoSmallestSides());
  }

  #calculateWrappingRibbonLength(giftBox) {
    return 2 * total(giftBox.getTwoSmallestSides());
  }

  #calculateBowLength(giftBox) {
    return giftBox.calculateVolume();
  }

  calculateTotalWrapperArea() {
    const totalWrapperArea = this.#giftBoxes.map(
      (giftBox) =>
        giftBox.calculateSurfaceArea() + this.#calculateSlackArea(giftBox)
    );
    return total(totalWrapperArea);
  }

  calculateTotalRibbonLength() {
    const totalRibbonLength = this.#giftBoxes.map(
      (giftBox) =>
        this.#calculateWrappingRibbonLength(giftBox) +
        this.#calculateBowLength(giftBox)
    );
    return total(totalRibbonLength);
  }
}

module.exports = { MaterialCalculator };
