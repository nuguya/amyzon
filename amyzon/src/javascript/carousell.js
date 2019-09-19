const INIT = 0;

/**
 * make Carousell UI
 *
 * @constructor {container,itemList} container is where want to insert DOM object
 * itemlist that made custom caroushell
 * @method {}
 */

class Carousell {
  constructor(container, itemList, rotateConfig = false, duration = 0.3) {
    this.container = container;
    this.itemList = itemList;
    this.init();
    this.config(rotateConfig, 1);
    this.intervalId = undefined;
    this.sleepCheckId = undefined;
  }

  init() {
    this.container.style.width = this.itemList.childNodes[INIT].offsetWidth + "px";
    this.container.style.height = this.itemList.childNodes[INIT].offsetHeight + "px";
    this.itemListWidth = this.itemList.childNodes[INIT].offsetWidth;
    this.itemListHeight = this.itemList.childNodes[INIT].offsetHeight;
    this.itemLength = this.itemList.childNodes.length;
    this.location = 1;
    this.offset = 0;
    this.Istransition = false;
    this.eventRegister();
  }

  eventRegister() {
    this.itemList.addEventListener(
      "transitionend",
      function() {
        this.Istransition = false;
      }.bind(this)
    );
    this.container.addEventListener("click", this.stopSlide.bind(this));
  }

  config(rotateConfig, duration) {
    this.duration = duration;
    if (rotateConfig) {
      const firstItem = this.itemList.childNodes[INIT];
      const lastItem = this.itemList.childNodes[this.itemLength - 1];
      this.itemList.insertBefore(lastItem.cloneNode(true), this.itemList.firstChild);
      this.itemList.appendChild(firstItem.cloneNode(true));
      this.offset -= this.itemListWidth;
      this.rotate();
      this.isRotate = true;
    } else {
      this.isRotate = false;
    }
  }

  setConfig(isRotate, duration) {
    this.isRotate = isRotate;
    this.duration = duration;
    this.config(isRotate, duration);
  }

  moveNext() {
    if (this.Istransition) return;
    this.offset -= this.itemListWidth;
    this.move();
    this.location++;
    if (this.isRotate) {
      if (this.location == this.itemLength + 1) {
        this.offset += this.itemLength * this.itemListWidth;
        setTimeout(() => this.rotate(), this.duration * 1000);
        this.location = this.location - this.itemLength;
      }
    }
  }

  movePrev() {
    if (this.Istransition) return;
    this.offset += this.itemListWidth;
    this.move();
    this.location--;
    if (this.isRotate) {
      if (this.location == INIT) {
        this.offset -= this.itemLength * this.itemListWidth;
        setTimeout(() => this.rotate(), this.duration * 1000);
        this.location = this.location + this.itemLength;
      }
    }
  }

  rotate() {
    this.itemList.style.transition = "none";
    this.itemList.style.transform = `translateX(${this.offset}px)`;
    this.Istransition = false;
  }

  move() {
    this.Istransition = true;
    this.itemList.style.transition = `${this.duration}s`;
    this.itemList.style.transform = `translateX(${this.offset}px)`;
  }

  autoSlide() {
    this.intervalId = setInterval(() => {
      this.moveNext();
    }, 3000);
  }

  stopSlide() {
    if (this.sleepCheckId !== undefined) {
      clearTimeout(this.sleepCheckId);
    }
    if (this.intervalId !== undefined) {
      clearInterval(this.intervalId);
      this.sleepCheckId = setTimeout(() => {
        this.moveNext();
        this.autoSlide();
      }, 10000);
    }
  }
}

module.exports = Carousell;
