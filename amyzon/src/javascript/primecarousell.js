const Carousell = require("./carousell");

class PrimeCarousell extends Carousell {
  constructor(container, itemList, rotateConfig = false, duration = 0.3) {
    super(container, itemList, rotateConfig, duration);
  }

  moveFowardTo(distance) {
    for (let i = 0; i < distance; ++i) {
      this.foward();
    }
  }
  //   findDirection(distance){

  //   }
}

module.exports = PrimeCarousell;
