require("../style/style.scss");
const cardList = require("../data/data");
const cardListView = require("./component/cardlist");

(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, crousellContainer } = buildMain(main);
  const { cardNames, cardDetails, cardImages } = getCardListValue(cardList);

  /*카드 만드는 부분*/
  renderCardUi(categoryCard, cardListView, cardNames);
  setCardImage(categoryCard.childNodes, cardImages);
  setCardClickEvent(categoryCard.childNodes);
  setCardTitle(categoryCard.childNodes, cardNames);
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
  const cardNames = cardListData.map(cur => {
    return cur.name;
  });
  const cardDetails = cardListData.map(cur => {
    return cur.feature;
  });
  const cardImages = cardListData.map(cur => {
    return cur.image;
  });

  return { cardNames, cardDetails, cardImages };
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
      categoryCard.forEach(item => {
        item.classList.remove("selected_card");
      });
      card.classList.add("selected_card");
    });
  });
}
