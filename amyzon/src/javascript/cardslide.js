class CardSlide {
  constructor(cards, cardListView, cardsData, carousell) {
    this.cards = cards;
    this.cardListView = cardListView;
    this.cardNames = cardsData[0];
    this.cardImages = cardsData[1];
    this.cardDetails = cardsData[2];
    this.carousell = carousell;
    this.currentCard = 0;
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
        this.showCard(card, cards);
        this.currentCard = card.dataset.card;
        let tabContainer = card.childNodes[0].childNodes[1];
        this.selectTab(event.target, tabContainer.childNodes);
      });
    });
  }

  selectTab(target, tabs) {
    if (target.tagName === "BUTTON") {
      tabs.forEach(tab => {
        tab.style.opacity = "0.5";
      });
      target.style.opacity = "1";
      this.currentTab = target;
    }
  }

  showCard(card, cards) {
    if (this.currentCard == card.dataset.card) return;
    const tabContainer = card.childNodes[0].childNodes[1];
    cards.forEach(card => {
      const tabContainer = card.childNodes[0].childNodes[1];
      tabContainer.style.display = "none";
      card.classList.remove("selected_card");
    });
    card.classList.add("selected_card");
    tabContainer.style.display = "flex";
    let firstIndexTab = tabContainer.childNodes[0];
    this.selectTab(firstIndexTab, tabContainer.childNodes, primeCraousell);
  }

  moveTab() {}

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
}

module.exports = CardSlide;
