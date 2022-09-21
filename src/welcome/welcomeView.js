export const welcomeView = (props) => {
  const { onStartClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
    <h1>Hello</h1>
    <button class="start" id="animalTourStart" value="animalTour">Animal Tour</button>
    <button class="start" id="comparisonStart" value="comparison">Comparison</button>
    <button class="start" id="memoryGameStart" value="memoryGame">Memory Game</button>
    `;
  Array.from(element.querySelectorAll(".start")).forEach((item) => {
    item.addEventListener("click", onStartClick);
  });
  return { element };
};
