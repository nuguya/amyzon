(function() {
  const main = document.querySelector(".contents");
  const { primeContainer, categoryCard, crousellContainer } = initMain(main);
})();

function bulldMain(main) {
  const primeContainer = document.createElement("div");
  const categoryCard = document.createElement("div");
  const crousellContainer = document.createElement("div");

  primeContainer.classList.add("contents__croushell-container");
  categoryCard.classList.add("contents__croushell-container__category-card");
  crousellContainer.classList.add("contents__croushell-container__croushell");

  primeContainer.appendChild(categoryCard);
  primeContainer.appendChild(crousellContainer);
  main.appendChild(primeContainer);

  return {
    primeContainer: primeContainer,
    categoryCard: categoryCard,
    crousellContainer: crousellContainer
  };
}
