const carousellText = (title, section, navigation) => {
  return `<div class="carousell__title"><h2>${title}</h2></div>
          <div class="carousell__section"><p>${section}</p></div>
          <div class="carousell__navigation"><p>${navigation}</p></div> `;
};

module.exports = carousellText;
