const cardListView = cardName => {
  return `<div class="card-category" id="${cardName}-card" role="tablist"><div class="${cardName}-card__clickable"><div class="${cardName}-card__title"></div></div><div class="${cardName}-card__pagination"></div></div>`;
};

module.exports = cardListView;
