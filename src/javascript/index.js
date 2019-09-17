require("../style/style.scss");
const Carousell = require("./carousell.js");
const Item = require("./component/carousell_item.js");

const container = document.querySelector(".carousell__container");

carousell = new Carousell(container);
carousell.eventRegist();
