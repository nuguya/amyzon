require("../style/style.scss");
const cardList = require("../data/data");
const cardListView = require("./component/cardlist");
const primeCarousellItem = require("./component/primecarousell");
const primeCarousellContainer = require("./component/primecarousellcontainer");
const PrimeCarousell = require("./primecarousell");

(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, carousellContainer } = buildMain(main);
  const { cardNames, cardDetails, cardImages } = getCardListValue(cardList);

  /*카드 만드는 부분*/
  renderCardUi(categoryCard, cardListView, cardNames);
  setCardImage(categoryCard.childNodes, cardImages);
  setCardTitle(categoryCard.childNodes, cardNames);
  addPaginationToCard(categoryCard.childNodes, cardDetails);
  setCardClickEvent(categoryCard.childNodes);

  /*크로셀 만드는 부분 */
  renderPrimeCarousellUi(carousellContainer, primeCarousellItem, cardDetails.flat());
  window.addEventListener("load", function() {
    const itemList = document.querySelector(".primecarousell__itemlist");
    const container = document.querySelector(".primecarousell__container");

    init(categoryCard.childNodes);
    setCarousellImage(itemList, cardDetails.flat());
    primeCraousell = new PrimeCarousell(container, itemList, true);
  });

  const leftButton = document.querySelector("#leftbtn");
  const rightButton = document.querySelector("#rightbtn");

  rightButton.addEventListener("click", function() {
    primeCraousell.moveNext();
  });
  leftButton.addEventListener("click", function() {
    primeCraousell.movePrev();
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

function renderCardUi(target, view, data) {
  const cardUiView = data.reduce((acc, cur) => {
    acc += view(cur);
    return acc;
  }, "");
  render(target, cardUiView);
}

function render(target, component) {
  target.innerHTML = component;
}

function setCardImage(categoryCard, cardImages) {
  let idx = 0;
  if (categoryCard.length !== cardImages.length) return false;
  categoryCard.forEach(element => {
    element.childNodes[0].style.backgroundImage = `url("${cardImages[idx++]}")`;
  });
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

function setCardTitle(categoryCard, cardNames) {
  let idx = 0;
  if (categoryCard.length !== cardNames.length) return false;
  categoryCard.forEach(element => {
    element.childNodes[0].childNodes[0].innerHTML = `<p>${cardNames[idx++]}</p>`;
  });
}

function setCardClickEvent(categoryCard) {
  categoryCard.forEach(card => {
    card.addEventListener("click", e => {
      showCard(card, categoryCard);
      selectPage(event.target, card.childNodes[0].childNodes[1]);
    });
  });
}

function showCard(card, categoryCard) {
  const pagination = card.childNodes[0].childNodes[1];
  categoryCard.forEach(card => {
    const pagination = card.childNodes[0].childNodes[1];
    pagination.style.display = "none";
    card.classList.remove("selected_card");
  });
  card.classList.add("selected_card");
  pagination.style.display = "flex";
  selectPage(pagination.childNodes[0], pagination.childNodes);
}

function selectPage(target, tabList) {
  if (target.tagName === "BUTTON") {
    tabList.forEach(tab => {
      tab.style.opacity = "0.5";
    });
    target.style.opacity = "1";
    console.log(target.dataset.page);
  }
}

function addPaginationToCard(categoryCard, cardDetails) {
  let idx = 0;
  let count = 1;
  if (categoryCard.length !== cardDetails.length) return false;
  categoryCard.forEach(element => {
    let buttons = "";
    for (let i = 0; i < cardDetails[idx].length; ++i)
      buttons += `<button class="pagination_button" id="carousell-page${count}" data-page=${count++}></button>`;
    element.childNodes[0].childNodes[1].innerHTML = buttons;
    ++idx;
  });
}

function init(categoryCard) {
  showCard(categoryCard[0], categoryCard);
}
