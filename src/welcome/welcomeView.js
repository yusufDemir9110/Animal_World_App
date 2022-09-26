export const welcomeView = (props) => {
  const { onStartClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
  <div className="inner">
    <h1 id="welcomeTitle">Welcome to Animal World App</h1>
    <div class="buttonContainer">
      <h3>Start a funny and informative journey through the animal world</h3>
      <button class="start btn" id="animalTourStart" value="animalTour">Animal Tour</button>
     
    </div>
    <div class="buttonContainer">
      <h3>Compare animals and learn</h3>
      <button class="start btn" id="comparisonStart" value="comparison">Comparison</button>
    </div>
    <div class="buttonContainer">
      <h3>Play the memory game about animals</h3>
      <button class="start btn" id="memoryGameStart" value="memoryGame">Memory Game</button>
    </div>
  </div>
    
    
    
    `;
  Array.from(element.querySelectorAll(".start")).forEach((item) => {
    item.addEventListener("click", onStartClick);
  });
  return { element };
};
