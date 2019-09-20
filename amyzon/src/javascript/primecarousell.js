const Carousell = require("./carousell");

class PrimeCarousell extends Carousell {
  constructor(container, itemList, rotateConfig = false, duration = 0.1) {
    super(container, itemList, rotateConfig, duration);
  }

  moveFowardTo(distance) {
    for (let i = 0; i < distance; ++i) {
      this.foward();
    }
  }

  moveBackTo(distance) {
    for (let i = 0; i < distance; ++i) {
      this.back();
    }
  }
}

module.exports = PrimeCarousell;
