require("../style/style.scss");
const Item = require("./component/carousell_item.js");
const Carousell = require("./carousell.js");
const Data = require("../data/data.js");

(function() {
  const container = document.querySelector(".carousell__container");
  const itemList = document.querySelector(".carousell__list");
  const leftButton = document.querySelector("#leftbtn");
  const rightButton = document.querySelector("#rightbtn");

  render(itemList);

  window.addEventListener("load", function() {
    carousell = new Carousell(container, itemList);
  });

  // console.log(container.offsetHeight);
  rightButton.addEventListener("click", function() {
    carousell.moveNext();
  });

  leftButton.addEventListener("click", function(e) {
    carousell.movePrev();
  });
})();

function render(itemList) {
  const currentItem = Data;
  let renderView = "";

  currentItem.forEach(cur => {
    let previewImg = cur.img;
    let text = cur.text;
    renderView += Item(previewImg, text);
  });
  itemList.innerHTML = renderView;
}
