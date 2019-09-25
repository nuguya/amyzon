const Carousell = require("./carousell");

class PrimeCarousell extends Carousell {
  constructor(container, itemList, rotateConfig = false, duration = 0.15) {
    super(container, itemList, rotateConfig, duration);
  }

  moveFowardTo(distance) {
    for (let i = 0; i < distance; ++i) {
      this.foward(i);
    }
  }

  moveBackTo(distance) {
    for (let i = 0; i < distance; ++i) {
      this.back();
    }
  }
}

module.exports = PrimeCarousell;
