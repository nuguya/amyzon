const primeCarousellContainer = itemList => {
  return `<button class="prime-button" id="leftbtn"><i class="fas fa-chevron-left"></i></button>
  <div class="primecarousell__container">
    <ul class="primecarousell__itemlist">${itemList}</ul>
  </div>
  <button class="prime-button" id="rightbtn"><i class="fas fa-chevron-right"></i></button>`;
};

module.exports = primeCarousellContainer;
