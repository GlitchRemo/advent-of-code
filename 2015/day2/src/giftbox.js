const total = (numbers) => numbers.reduce((a, b) => a + b, 0);
const multiply = ([a, b]) => a * b;

class GiftBox {
  #l;
  #w;
  #h;
  #sidesInOrder;

  constructor(length, width, heigth) {
    this.#l = length;
    this.#w = width;
    this.#h = heigth;
    this.#sidesInOrder = [this.#l, this.#w, this.#h].sort((a, b) => a - b); // rethink!! not so fond of having logic in constructor
  }

  calculateSmallestSideArea() {
    return multiply(this.#sidesInOrder.slice(0, 2));
  }

  calculateSmallestSidePerimeter() {
    return 2 * total(this.#sidesInOrder.slice(0, 2));
  }

  calculateVolume() {
    return this.#l * this.#w * this.#h;
  }

  calculateSurfaceArea() {
    const [l, w, h] = [this.#l, this.#w, this.#h];
    return 2 * (l * w + w * h + l * h);
  }
}

module.exports = { GiftBox };
