require("../../stylesheets/mainpage/style.scss");
const cardList = require("./data/data");
const cardListView = require("./component/cardlist");
const primeCarousellItemView = require("./component/primecarousellItem");
const primeCarousellContainer = require("./component/primecarousellcontainer");
const PrimeCarousell = require("./primecarousell");
const CardSlide = require("./cardslide");
const miniCarousell = require("./minicarousell");
const usingAPI = require("./data/api");

(async function() {
  const header = document.querySelector(".header");
  header.style.backgroundImage = `url("https://t1.daumcdn.net/cfile/tistory/992E8D395B078FF713")`;
  const main = document.querySelector(".main__contents");
  const api = new usingAPI();
  const {
    primeContainer,
    categoryCard,
    primeCarousellContainer,
    miniCarousellContainer
  } = buildMain(main);
  const { cardNames, cardDetails, cardImages } = await getCardListValue(api);
  const dataList = [cardNames, cardImages, cardDetails];
  renderPrimeCarousellUi(primeCarousellContainer, primeCarousellItemView, cardDetails.flat());
  renderMiniCraousell(miniCarousellContainer, miniCarousell);
  const itemList = document.querySelector(".primecarousell__itemlist");
  const container = document.querySelector(".primecarousell__container");
  setCarousellImage(itemList, cardDetails.flat());

  const primeCraousell = new PrimeCarousell(container, itemList, true);
  const cardSlide = new CardSlide(categoryCard, cardListView, dataList, primeCraousell);
  const leftButton = document.querySelector("#leftbtn");
  const rightButton = document.querySelector("#rightbtn");

  init(cardSlide);
  rightButton.addEventListener("click", function() {
    const isTransiton = primeCraousell.moveNext();
    if (!isTransiton) cardSlide.slideNext();
  });
  leftButton.addEventListener("click", function() {
    const isTransition = primeCraousell.movePrev();
    if (!isTransition) cardSlide.slidePrev();
  });
})();

function buildMain(main) {
  const primeContainer = document.createElement("div");
  const categoryCard = document.createElement("div");
  const primeCarousellContainer = document.createElement("div");
  const miniCarousellContainer = document.createElement("div");

  primeContainer.classList.add("contents__primecaroushell-container__cards");
  categoryCard.classList.add("contents__primecaroushell-container__category-card");
  primeCarousellContainer.classList.add("contents__primecaroushell-container__caroushell");
  miniCarousellContainer.classList.add("contents__minicaroushell__container");
  primeContainer.appendChild(categoryCard);
  main.appendChild(primeContainer);
  main.appendChild(primeCarousellContainer);
  main.appendChild(miniCarousellContainer);

  return {
    primeContainer: primeContainer,
    categoryCard: categoryCard,
    primeCarousellContainer: primeCarousellContainer,
    miniCarousellContainer: miniCarousellContainer
  };
}

async function getCardListValue(api) {
  const cardListData = await api.getAllPrimeData();
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

function renderMiniCraousell(target, view) {
  console.log(target);
  const comp = `<button class="minicarousell__button" id="mini_leftbtn"><i class="fas fa-chevron-left"></i></button>
      <div class="minicarousell__container">
        <ul class="minicarousell__list"></ul>
      </div>
      <button class="minicarousell__button" id="mini_rightbtn"><i class="fas fa-chevron-right"></i></button>
      <div class="minicarousell__textarea"></div>`;
  render(target, comp);
  view();
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

function init(cardSlide) {
  const firstCard = document.querySelector(".card-category");

  firstCard.classList.add("selected_card");
  cardSlide.showTabBar();
}
