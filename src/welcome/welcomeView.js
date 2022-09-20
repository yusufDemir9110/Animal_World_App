export const welcomeView = (props) => {
  const { onStartClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
    <h1>Hello</h1>
    <button class="start" id="randomLearnStart" value="randomLearn">Random Learn</button>
    <button class="start" id="memoryGameStart" value="memoryGame">Memory Game</button>
    `;
  Array.from(element.querySelectorAll(".start")).forEach((item) => {
    item.addEventListener("click", onStartClick);
  });
  return { element };
};
