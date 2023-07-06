class Box {
  #l;
  #w;
  #h;

  constructor(length, width, heigth) {
    this.#l = length;
    this.#w = width;
    this.#h = heigth;
  }

  calculateSurfaceArea() {
    const [l, w, h] = [this.#l, this.#w, this.#h];
    return 2 * l * w + 2 * w * h + 2 * l * h;
  }

  calculateSmallestArea() {
    const dimensions = [this.#l, this.#w, this.#h].sort((a, b) => a - b);
    return dimensions[0] * dimensions[1];
  }
}

module.exports = { Box };
