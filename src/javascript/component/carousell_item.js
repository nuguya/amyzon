const carousellItem = (previewImage, text) => {
  return `<div class="carousell__contents">
    <div id="image-preview">
      <img src=${previewImage}.jpg>
    </div>
  </div>
  <div class="carousell_texts">
    <h1>${text}</h1>
  </div>`;
};

module.exports = carousellItem;
