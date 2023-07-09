const total = (numbers) => numbers.reduce((a, b) => a + b, 0);
const multiply = ([a, b]) => a * b;

class GiftBox {
  #l;
  #w;
  #h;

  constructor(length, width, heigth) {
    this.#l = length;
    this.#w = width;
    this.#h = heigth;
  }

  #sidesInOrder() {
    return [this.#l, this.#w, this.#h].sort((a, b) => a - b);
  }

  smallestSideArea() {
    return multiply(this.#sidesInOrder().slice(0, 2));
  }

  smallestSidePerimeter() {
    return 2 * total(this.#sidesInOrder().slice(0, 2));
  }

  volume() {
    return this.#l * this.#w * this.#h;
  }

  surfaceArea() {
    const [l, w, h] = [this.#l, this.#w, this.#h];
    return 2 * (l * w + w * h + l * h);
  }
}

module.exports = { GiftBox };
