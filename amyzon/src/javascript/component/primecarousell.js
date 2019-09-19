const primeCarousellItem = (data, count) => {
  return `<li class="primecarousell__item" id="prime_item${count}">
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
