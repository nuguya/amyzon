const minicarousellItem = require("./component/minicarousell_item.js");
const minicarousellText = require("./component/minicarousell_text.js");
const Carousell = require("./carousell");
const { Data, Text } = require("./data/mini_data.js");

const miniCarousell = function() {
  const container = document.querySelector(".minicarousell__container");
  const itemList = document.querySelector(".minicarousell__list");
  const leftButton = document.querySelector("#mini_leftbtn");
  const rightButton = document.querySelector("#mini_rightbtn");
  const textArea = document.querySelector(".minicarousell__textarea");

  renderminicarousell(itemList);
  renderTextArea(textArea);
  let minicarousell;
  window.addEventListener("load", function() {
    minicarousell = new Carousell(container, itemList, true);
    minicarousell.autoSlide();
  });

  rightButton.addEventListener("click", function() {
    minicarousell.stopSlide();
    minicarousell.moveNext();
  });

  leftButton.addEventListener("click", function(e) {
    minicarousell.stopSlide();
    minicarousell.movePrev();
  });
};

function renderminicarousell(itemList) {
  const currentItem = Data;
  let renderView = "";

  currentItem.forEach(cur => {
    let previewImg = cur.img;
    let link = cur.link;
    renderView += minicarousellItem(previewImg, link);
  });
  itemList.innerHTML = renderView;
}

function renderTextArea(textArea) {
  const textData = Text;
  let renderView = "";

  renderView += minicarousellText(textData.title, textData.section, textData.navigation);
  textArea.innerHTML = renderView;
}

module.exports = miniCarousell;
