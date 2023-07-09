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
    return giftBox.surfaceArea() + giftBox.smallestSideArea();
  }

  #calculateRibbonLength(giftBox) {
    return giftBox.smallestSidePerimeter() + giftBox.volume();
  }

  calculateWrapperArea() {
    const wrapperAreas = this.#giftBoxes.map(this.#calculateWrapperArea);
    return total(wrapperAreas);
  }

  calculateRibbonLength() {
    const ribbonsLength = this.#giftBoxes.map(this.#calculateRibbonLength);
    return total(ribbonsLength);
  }
}

module.exports = { MaterialCalculator };
