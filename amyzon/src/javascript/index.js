require("../style/style.scss");
const cardList = require("../data/data");
const cardListView = require("./component/cardlist");
const primeCarousellItem = require("./component/primecarousell");
(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, crousellContainer } = buildMain(main);
  const { cardNames, cardDetails, cardImages } = getCardListValue(cardList);

  /*카드 만드는 부분*/
  renderCardUi(categoryCard, cardListView, cardNames);
  renderPrimeCrousellUi(crousellContainer, primeCarousellItem, cardDetails.flat());
  setCardImage(categoryCard.childNodes, cardImages);
  setCardTitle(categoryCard.childNodes, cardNames);
  addPaginationToCard(categoryCard.childNodes, cardDetails);
  setCardClickEvent(categoryCard.childNodes);
  console.log(cardDetails.flat());
})();

function buildMain(main) {
  const primeContainer = document.createElement("div");
  const categoryCard = document.createElement("div");
  const crousellContainer = document.createElement("div");

  primeContainer.classList.add("contents__primecroushell-container");
  categoryCard.classList.add("contents__primecroushell-container__category-card");
  crousellContainer.classList.add("contents__primecroushell-container__croushell");

  primeContainer.appendChild(categoryCard);
  primeContainer.appendChild(crousellContainer);
  main.appendChild(primeContainer);

  return {
    primeContainer: primeContainer,
    categoryCard: categoryCard,
    crousellContainer: crousellContainer
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

function renderPrimeCrousellUi(target, view, data) {
  const crousellUiView = data.reduce((acc, cur) => {
    acc += view(cur);
    return acc;
  }, "");
  render(target, crousellUiView);
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
      const pagination = card.childNodes[0].childNodes[1];
      categoryCard.forEach(card => {
        const pagination = card.childNodes[0].childNodes[1];
        pagination.style.display = "none";
        card.classList.remove("selected_card");
      });
      card.classList.add("selected_card");
      pagination.style.display = "flex";
    });
  });
}

function addPaginationToCard(categoryCard, cardDetails) {
  let idx = 0;
  let count = 1;
  if (categoryCard.length !== cardDetails.length) return false;
  categoryCard.forEach(element => {
    let buttons = "";
    for (let i = 0; i < cardDetails[idx].length; ++i)
      buttons += `<button class="pagination_button" data-page="${count++}"></button>`;
    element.childNodes[0].childNodes[1].innerHTML = buttons;
    ++idx;
  });
}
