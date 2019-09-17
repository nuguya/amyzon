class Carousell {
  constructor(container, itemList) {
    this.container = container;
    this.itemList = itemList;
    this.location = 1;
    this.offset = 0;
    this.init();
    this.infinityConfig();
  }

  init() {
    this.container.style.width = this.itemList.childNodes[0].offsetWidth + "px";
    this.container.style.height = this.itemList.childNodes[0].offsetHeight + "px";
    this.itemListWidth = this.itemList.childNodes[0].offsetWidth;
    this.itemListHeight = this.itemList.childNodes[0].offsetHeight;
    this.itemLength = this.itemList.childNodes.length;
  }

  moveNext() {
    if (this.location == 5) {
      this.offset += this.itemLength * this.itemListWidth;
      setTimeout(() => this.moveWithoutAnimation(), 1000);
      this.location = this.location - this.itemLength;
    } else {
      this.offset -= this.itemListWidth;
      this.move();
      this.location++;
    }
  }

  movePrev() {
    if (this.location == 0) {
      this.offset -= this.itemLength * this.itemListWidth;
      setTimeout(() => this.moveWithoutAnimation(), 1000);
      this.location = this.location + this.itemLength;
    } else {
      this.offset += this.itemListWidth;
      this.move();
      this.location--;
    }
  }

  infinityConfig() {
    const firstItem = this.itemList.childNodes[0];
    const lastItem = this.itemList.childNodes[this.itemLength - 1];

    this.itemList.insertBefore(lastItem.cloneNode(true), this.itemList.firstChild);
    this.itemList.appendChild(firstItem.cloneNode(true));
    this.offset -= this.itemListWidth;
    this.moveWithoutAnimation();
  }

  moveWithoutAnimation() {
    this.itemList.style.transition = "none";
    this.itemList.style.transform = `translateX(${this.offset}px)`;
  }

  move() {
    this.itemList.style.transition = "1s";
    this.itemList.style.transform = `translateX(${this.offset}px)`;
  }
}

module.exports = Carousell;
