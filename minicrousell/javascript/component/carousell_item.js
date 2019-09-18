const carousellItem = (previewImage, text) => {
  return `<li class="carousell__item">
      <img src=${previewImage}.jpg class="previewImage">
  </li>`;
};

module.exports = carousellItem;
