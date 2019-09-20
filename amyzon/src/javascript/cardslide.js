class CardSlide {
  constructor(cards, cardListView, cardsData, carousell) {
    this.cards = cards;
    this.cardListView = cardListView;
    this.cardNames = cardsData[0];
    this.cardImages = cardsData[1];
    this.cardDetails = cardsData[2];
    this.carousell = carousell;
    this.currentCard = 0;
    this.currentTab = 1;
    this.offsetTab = 1;
    this.prevIndex = 1;
  }

  render(target, component) {
    target.innerHTML = component;
  }

  renderCardUi() {
    let count = 1;
    const cardUiView = this.cardNames.reduce((acc, cur) => {
      acc += this.cardListView(cur, count++);
      return acc;
    }, "");
    this.render(this.cards, cardUiView);
    this.cards = this.cards.childNodes;
    this.setCardImage(this.cards, this.cardImages);
    this.setCardName(this.cards, this.cardNames);
    this.setCardTab(this.cards, this.cardDetails);
    this.setCardClickEvent(this.cards);
    this.init(this.cards);
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
  setCardTab(cards, cardDetails) {
    let idx = 0;
    let count = 1;
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
      card.addEventListener("click", event => {
        //this.selectTab(event.target, this.tabContainer);
        if (event.target.tagName === "BUTTON") {
          this.prevTab = this.currentTab;
          this.currentTab = parseInt(event.target.dataset.page);
          let distance = this.currentTab - this.prevTab;
          if (distance > 0) {
            this.currentTab = this.prevTab;
            for (let i = 0; i < distance; ++i) {
              this.moveNextTab();
            }
            this.carousell.moveFowardTo(distance);
          } else {
            this.currentTab = this.prevTab;
            for (let i = 0; i < Math.abs(distance); ++i) {
              this.movePrevTap();
            }
            this.carousell.moveBackTo(Math.abs(distance));
          }
        } else {
          this.prevCard = this.currentCard;
          this.currentCard = parseInt(card.dataset.card - 1);
          if (this.currentCard != this.prevCard) {
            this.showCard(card, cards);
            this.getDistance();
          }
        }
      });
    });
  }

  selectTab(target, tabs) {
    if (target.tagName === "BUTTON") {
      tabs.forEach(tab => {
        tab.style.opacity = "0.5";
      });
      target.style.opacity = "1";
    }
  }

  showCard(card, cards) {
    console.log("asdffs");
    const tabContainer = card.childNodes[0].childNodes[1];
    cards.forEach(card => {
      const tabContainer = card.childNodes[0].childNodes[1];
      tabContainer.style.display = "none";
      card.classList.remove("selected_card");
    });
    card.classList.add("selected_card");
    tabContainer.style.display = "flex";

    this.tabContainer = tabContainer.childNodes;
    if (this.firstIndexTab !== undefined) this.prevIndex = this.firstIndexTab.dataset.page;
    this.firstIndexTab = tabContainer.childNodes[0];
    let target = this.firstIndexTab.dataset.page;

    this.selectTab(this.firstIndexTab, this.tabContainer);
  }

  moveTab(tabNum) {
    const target = document.querySelector(`#carousell-page${tabNum}`);
    this.selectTab(target, this.tabContainer);
  }

  init(cards) {
    let firstCard = cards[0];
    this.showCard(firstCard, cards);
  }

  getCurrentCard() {
    return this.currentCard;
  }

  getCurrentTab() {
    return this.currentTab;
  }

  setCurrentTab(number) {
    if (number > 17) {
      number = 1;
    } else if (number < 1) {
      number = 17;
    }
    this.currentTab = parseInt(number);
  }

  moveNextTab() {
    console.log(this.currentTab);
    if (this.currentTab > 16) {
      this.currentTab = 0;
      this.currentCard = -1;
    }
    this.offsetTab++;
    this.setCurrentTab(this.currentTab + 1);

    if (this.tabContainer.length < this.offsetTab) {
      this.currentCard += 1;
      this.showCard(this.cards[this.currentCard], this.cards);
      this.offsetTab = 1;
    }
    this.moveTab(this.currentTab);
  }

  movePrevTap() {
    if (this.currentTab < 2) {
      this.currentTab = 18;
      this.currentCard = 5;
    }
    this.offsetTab--;
    this.setCurrentTab(this.currentTab - 1);
    if (0 >= this.offsetTab) {
      this.currentCard -= 1;
      this.showCard(this.cards[this.currentCard], this.cards);
      this.offsetTab = this.tabContainer.length;
    }
    this.moveTab(this.currentTab);
  }

  getDistance() {
    // this.prevTab = this.prevIndex;
    // this.currentTab = parseInt(this.firstIndexTab.dataset.page);

    const distance = parseInt(this.firstIndexTab.dataset.page) - parseInt(this.prevIndex);
    this.currentTab = parseInt(this.prevIndex);
    // console.log(distance);
    for (let i = 0; i < distance; ++i) {
      // this.moveNextTab();
    }
  }
}

module.exports = CardSlide;
