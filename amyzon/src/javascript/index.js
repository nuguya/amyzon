const cardList = require("../data/data");
const cardListView = require("./component/cardlist");

(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, crousellContainer } = buildMain(main);
  const { cardNames, cardDetails } = getCardListValue(cardList);

  renderCardUi(categoryCard, cardListView, cardNames);
})();

function buildMain(main) {
  const primeContainer = document.createElement("div");
  const categoryCard = document.createElement("div");
  const crousellContainer = document.createElement("div");

  primeContainer.classList.add("contents__croushell-container");
  categoryCard.classList.add("contents__croushell-container__category-card");
  crousellContainer.classList.add("contents__croushell-container__croushell");

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
  return { cardNames, cardDetails };
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
