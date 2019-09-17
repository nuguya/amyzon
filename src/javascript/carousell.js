class Carousell {
  constructor(container) {
    this.container = container;
  }

  eventRegist() {
    this.container.addEventListener("click", function(evt) {
      console.log("asdf");
    });
  }
}

module.exports = Carousell;
