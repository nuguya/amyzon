require("../../../stylesheets/adminpage/regist/style.scss");

(function() {
  const showingCard = document.querySelector(".show__prime-card__container");
  const registButton = document.querySelector(".primecardform__submit");
  const primeCardForm = document.querySelector(".primecardform");
  let formList = [];

  for (let i of primeCardForm) formList.push(i);

  showingCard.addEventListener("click", function(e) {
    if (e.target.className === "modify_button") {
      const title = e.target.previousSibling.previousSibling.textContent;
      formList[0].value = title;
    }
  });
})();
