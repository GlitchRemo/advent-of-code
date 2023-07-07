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
    const wrapperAreas = this.#giftBoxes.map(this.#calculateWrapperArea);
    return total(wrapperAreas);
  }

  calculateTotalRibbonLength() {
    const ribbonLengths = this.#giftBoxes.map(this.#calculateRibbonLength);
    return total(ribbonLengths);
  }
}

module.exports = { MaterialCalculator };
