const carousellItem = (previewImage, link) => {
  return `<li class="carousell__item"><a href=${link}><img src=${previewImage}.jpg class="previewImage"></a></li>`;
};

module.exports = carousellItem;
