const carousellItem = (previewImage, text) => {
  return `<li class="carousell__item">
      <img src=${previewImage}.jpg class="previewImage">
    
  <div class="carousell_texts">
    <p>${text}</p>
    </div>
  </li>`;
};

module.exports = carousellItem;
