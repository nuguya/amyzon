require("../style/style.scss");
const cardList = require("../data/data");
const cardListView = require("./component/cardlist");
const primeCarousellItemView = require("./component/primecarousellItem");
const primeCarousellContainer = require("./component/primecarousellcontainer");
const PrimeCarousell = require("./primecarousell");
const CardSlide = require("./cardslide");

(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, carousellContainer } = buildMain(main);
  const { cardNames, cardDetails, cardImages } = getCardListValue(cardList);
  const dataList = [cardNames, cardImages, cardDetails];

  renderPrimeCarousellUi(carousellContainer, primeCarousellItemView, cardDetails.flat());
  const itemList = document.querySelector(".primecarousell__itemlist");
  const container = document.querySelector(".primecarousell__container");
  setCarousellImage(itemList, cardDetails.flat());

  primeCraousell = new PrimeCarousell(container, itemList, true);
  const cardSlide = new CardSlide(categoryCard, cardListView, dataList, primeCraousell);
  cardSlide.renderCardUi();

  const leftButton = document.querySelector("#leftbtn");
  const rightButton = document.querySelector("#rightbtn");

  rightButton.addEventListener("click", function() {
    primeCraousell.moveNext();
    cardSlide.moveNextTab();
  });
  leftButton.addEventListener("click", function() {
    primeCraousell.movePrev();
    cardSlide.movePrevTap();
  });
})();

function buildMain(main) {
  const primeContainer = document.createElement("div");
  const categoryCard = document.createElement("div");
  const carousellContainer = document.createElement("div");

  primeContainer.classList.add("contents__primecaroushell-container");
  categoryCard.classList.add("contents__primecaroushell-container__category-card");
  carousellContainer.classList.add("contents__primecaroushell-container__caroushell");

  primeContainer.appendChild(categoryCard);
  main.appendChild(primeContainer);
  main.appendChild(carousellContainer);

  return {
    primeContainer: primeContainer,
    categoryCard: categoryCard,
    carousellContainer: carousellContainer
  };
}

function getCardListValue(cardListData) {
  const cardNames = [];
  let idx = 0;
  for (let i in cardListData) {
    cardNames.push(Object.keys(cardListData[i])[0]);
  }
  const cardDetails = cardListData.map(cur => {
    return cur[cardNames[idx++]];
  });
  const cardImages = cardListData.map(cur => {
    return cur.image;
  });

  return { cardNames, cardDetails, cardImages };
}

function renderPrimeCarousellUi(target, view, data) {
  let count = 1;
  const crousellUiView = data.reduce((acc, cur) => {
    acc += view(cur, count++);
    return acc;
  }, "");
  render(target, primeCarousellContainer(crousellUiView));
}

function render(target, component) {
  target.innerHTML = component;
}

function setCarousellImage(itemList, data) {
  let idx = 0;
  const images = data.map(cur => {
    return cur.image;
  });
  itemList.childNodes.forEach(item => {
    item.style.backgroundImage = `url("${images[idx++]}")`;
  });
}
