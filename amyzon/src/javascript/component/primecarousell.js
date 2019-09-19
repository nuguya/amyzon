const primeCarousellItem = data => {
  return `<li class="primecarousell__item">
  <div class="prime__image"><img src="${data.image}"></div>
  <div class="prime__section">
    <div class="prime__section__title">${data.title}</div>
    <div class="prime__section__head">${data.head}</div>
    <div class="prime__section__body">${data.body}</div>
    <div class="prime__section__tail">${data.tail}</div>
    <div class="prime__section__link">${data.link}</div>
  </div>
</li>`;
};

module.exports = primeCarousellItem;
