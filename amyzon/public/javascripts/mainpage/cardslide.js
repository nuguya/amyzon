const NAMES = 0,
  IMAGES = 1,
  DETAILS = 2;
const START = 1;

class CardSlide {
  constructor(container, cardListView, cardsData, carousell) {
    this.container = container;
    this.cardListView = cardListView;
    this.carousell = carousell;
    this.cards = this.renderCardUi(cardsData[NAMES], cardsData[IMAGES], cardsData[DETAILS]);
    this.TabBars = document.querySelectorAll(".card__pagination");
    this.slideOffset = START;
    this.currentCard = START;
    this.currnetTabBar;
  }

  render(target, component) {
    target.innerHTML = component;
  }

  renderCardUi(names, images, detais) {
    let cardID = 1;
    const cards = this.container.childNodes;
    const cardUiView = names.reduce((categorys, cardName) => {
      categorys += this.cardListView(cardName, cardID++);
      return categorys;
    }, "");
    this.render(this.container, cardUiView);
    this.setCardImage(cards, images);
    this.setCardName(cards, names);
    this.setCardDetais(cards, detais);
    this.setCardClickEvent(cards);

    return cards;
  }

  setCardImage(cards, cardImages) {
    let idx = 0;
    if (cards.length !== cardImages.length) return false;
    cards.forEach(card => {
      let cardArea = card.childNodes[0];
      cardArea.style.backgroundImage = `url("${cardImages[idx++]}")`;
    });
  }
  setCardName(cards, cardNames) {
    let idx = 0;
    if (cards.length !== cardNames.length) return false;
    cards.forEach(card => {
      let cardTitleArea = card.childNodes[0].childNodes[0];
      cardTitleArea.innerHTML = `<p>${cardNames[idx++]}</p>`;
    });
  }
  setCardDetais(cards, cardDetails) {
    let idx = 0;
    let count = START;
    if (cards.length !== cardDetails.length) return false;
    cards.forEach(card => {
      let buttons = "";
      let cardTabArea;
      for (let i = 0; i < cardDetails[idx].length; ++i) {
        cardTabArea = card.childNodes[0].childNodes[1];
        buttons += `<button class="pagination_button" id="carousell-page${count}" data-page=${count++}></button>`;
      }
      cardTabArea.innerHTML = buttons;
      ++idx;
    });
  }
  setCardClickEvent(cards) {
    cards.forEach(card => {
      card.addEventListener("click", e => {
        const previousOffset = this.slideOffset;
        switch (e.target.tagName) {
          case "BUTTON":
            this.slideOffset = this.selectTab(e.target);
            this.jumpTab(previousOffset, this.slideOffset);
            break;
          default:
            if (!this.checkCardMove(card)) {
              break;
            }
            this.slideCard(card);
            this.jumpCard(previousOffset, this.slideOffset);
            break;
        }
      });
    });
  }

  getShortestDistance(previousOffset, currentOffset) {
    let fowardDistance;
    let backwardDistance;

    if (previousOffset < currentOffset) {
      fowardDistance = Math.abs(currentOffset - previousOffset);
      backwardDistance = previousOffset + (this.getSlidesLength() - currentOffset);
    } else {
      fowardDistance = this.getSlidesLength() - previousOffset + currentOffset;
      backwardDistance = Math.abs(previousOffset - currentOffset);
    }
    return { fowardDistance, backwardDistance };
  }

  jumpTab(previousOffset, currentOffset) {
    const distance = currentOffset - previousOffset;

    if (distance > 0) {
      for (let _ = 0; _ < Math.abs(distance); ++_) {
        this.carousell.foward();
      }
    } else if (distance < 0) {
      for (let _ = 0; _ < Math.abs(distance); ++_) {
        this.carousell.back();
      }
    } else {
      return;
    }
  }

  jumpCard(previousOffset, currentOffset) {
    const { fowardDistance, backwardDistance } = this.getShortestDistance(
      previousOffset,
      currentOffset
    );
    const shortest = fowardDistance < backwardDistance ? fowardDistance : backwardDistance;
    const moveTo = fowardDistance < backwardDistance ? this.slideNext : this.slidePrev;
    for (let _ = 0; _ < shortest; ++_) {
      moveTo.bind(this);
    }
    if (shortest == fowardDistance) this.carousell.moveFowardTo(shortest);
    else this.carousell.moveBackTo(shortest);
  }

  checkCardMove(card) {
    const previousCard = this.currentCard;
    this.currentCard = this.selectCard(card);
    if (previousCard === this.currentCard) {
      return false;
    }
    return true;
  }

  slideCard(card = this.getCard(this.currentCard - 1)) {
    this.currentCard = this.selectCard(card);
    const firstTab = this.TabBars[this.currentCard - 1].childNodes[0];
    this.slideOffset = this.selectTab(firstTab);
    this.currentTabBar = this.showTabBar();
  }

  slideNext() {
    let offset = this.slideOffset + 1;
    if (offset > this.getSlidesLength()) {
      offset = START;
      this.slideOffset = START;
      this.currentCard = START;
      this.slideCard();
    }
    if (offset > this.getAbsoluteTabsLength()) {
      this.currentCard += 1;
      this.slideCard();
    }
    const tabArray = this.getTabArray();
    const currnetTab = tabArray[offset - 1];
    this.slideOffset = this.selectTab(currnetTab);
  }

  slidePrev() {
    let offset = this.slideOffset - 1;
    if (offset < START) {
      offset = this.getSlidesLength();
      this.slideOffset = this.getSlidesLength();
      this.currentCard = this.getCardLength();
      this.slideCard();
    }
    if (offset <= this.getAbsoluteTabsLength() - this.getRelativeTabsLength()) {
      this.currentCard -= 1;
      this.slideCard();
    }
    const tabArray = this.getTabArray();
    const currnetTab = tabArray[offset - 1];
    this.slideOffset = this.selectTab(currnetTab);
  }

  selectTab(tab) {
    const tabs = tab.parentNode.childNodes;
    tabs.forEach(tab => {
      tab.style.opacity = "0.5";
    });
    tab.style.opacity = "1.0";
    return parseInt(tab.dataset.page);
  }

  selectCard(card) {
    this.cards.forEach(cur => {
      cur.classList.remove("selected_card");
    });
    card.classList.add("selected_card");

    return parseInt(card.dataset.card);
  }

  showTabBar() {
    this.TabBars.forEach(cur => {
      cur.style.display = "none";
    });
    const selectedCard = document.querySelector(".selected_card");

    let currentTabBar = selectedCard.childNodes[0].childNodes[1];
    currentTabBar.style.display = "flex";
    return currentTabBar;
  }

  getSlidesLength() {
    const arrayTabBars = Array.prototype.slice.call(this.TabBars);
    const slideLength = arrayTabBars.reduce((len, tabBar) => {
      len += tabBar.childNodes.length;
      return len;
    }, 0);
    return slideLength;
  }

  getTabArray() {
    const arrayTabBars = Array.prototype.slice.call(this.TabBars);
    const slideElements = arrayTabBars.reduce((elements, tabBar) => {
      const childArray = Array.prototype.slice.call(tabBar.childNodes);
      const childs = childArray.map(child => {
        return child;
      });
      elements.push(childs);
      return elements;
    }, []);
    return slideElements.flat();
  }

  getCardLength() {
    return this.cards.length;
  }

  getRelativeTabsLength() {
    return this.TabBars[this.currentCard - 1].childNodes.length;
  }

  getAbsoluteTabsLength() {
    let relativeLength = 0;

    for (let i = 0; i <= this.currentCard - 1; ++i) {
      relativeLength += this.TabBars[i].childNodes.length;
    }
    return relativeLength;
  }

  getCard(offset) {
    return this.cards[offset];
  }

  checkRange() {
    if (this.slideOffset + 1 > this.getSlidesLength()) {
      return false;
    }
    if (this.slideOffset - 1 < START) {
      return false;
    }
    if (this.currentCard > this.getCardLength()) {
      return false;
    }
    if (this.currentCard < START) {
      return false;
    }
    return true;
  }
}

module.exports = CardSlide;
