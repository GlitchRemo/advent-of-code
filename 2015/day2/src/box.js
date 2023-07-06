class Box {
  #length;
  #width;
  #height;

  constructor(length, width, height) {
    this.#length = length;
    this.#width = width;
    this.#height = height;
  }
  calculateSurfaceArea() {
    return (
      2 * this.#length * this.#width +
      2 * this.#width * this.#height +
      2 * this.#length * this.#height
    );
  }
}

module.exports = { Box };
