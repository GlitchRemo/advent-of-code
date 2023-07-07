class GiftBox {
  #l;
  #w;
  #h;
  #sidesInOrder;

  constructor(length, width, heigth) {
    this.#l = length;
    this.#w = width;
    this.#h = heigth;
    this.#sidesInOrder = [this.#l, this.#w, this.#h].sort((a, b) => a - b);
  }

  getTwoSmallestSides() {
    return this.#sidesInOrder.slice(0, 2);
  }

  calculateVolume() {
    return this.#l * this.#w * this.#h;
  }

  calculateSurfaceArea() {
    const [l, w, h] = [this.#l, this.#w, this.#h];
    return 2 * (l * w + w * h + l * h);
  }

  calculateSlackArea() {
    return this.#sidesInOrder[0] * this.#sidesInOrder[1];
  }

  calculateWrapperArea() {
    return this.calculateSlackArea() + this.calculateSurfaceArea();
  }

  calculateWrappingRibbonLength() {
    return 2 * (this.#sidesInOrder[0] + this.#sidesInOrder[1]);
  }

  calculateBowLength() {
    return this.#l * this.#w * this.#h;
  }
}

module.exports = { GiftBox };
