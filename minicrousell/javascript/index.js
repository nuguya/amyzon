require("../style/style.scss");
const carousellItem = require("./component/carousell_item.js");
const carousellText = require("./component/carousell_text.js");
const Carousell = require("./carousell.js");
const { Data, Text } = require("../data/data.js");

(function() {
  const container = document.querySelector(".carousell__container");
  const itemList = document.querySelector(".carousell__list");
  const leftButton = document.querySelector("#leftbtn");
  const rightButton = document.querySelector("#rightbtn");
  const textArea = document.querySelector(".carousell__textarea");

  renderCarousell(itemList);
  renderTextArea(textArea);
  window.addEventListener("load", function() {
    carousell = new Carousell(container, itemList, true);
    carousell.autoSlide();
  });

  rightButton.addEventListener("click", function() {
    carousell.stopSlide();
    carousell.moveNext();
  });

  leftButton.addEventListener("click", function(e) {
    carousell.stopSlide();
    carousell.movePrev();
  });
})();

function renderCarousell(itemList) {
  const currentItem = Data;
  let renderView = "";

  currentItem.forEach(cur => {
    let previewImg = cur.img;
    let link = cur.link;
    renderView += carousellItem(previewImg, link);
  });
  itemList.innerHTML = renderView;
}

function renderTextArea(textArea) {
  const textData = Text;
  let renderView = "";

  renderView += carousellText(textData.title, textData.section, textData.navigation);
  textArea.innerHTML = renderView;
}
