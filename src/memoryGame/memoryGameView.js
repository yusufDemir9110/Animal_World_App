export const memoryGameView = (props) => {
  const { handleNumber, count, initQuestion, nextQuestion } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <h1>memory Game View</h1>
        <div>
          <h2>How many animals</h2>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div id="showCount">${count}</div>
        <div id="cardContainer"></div>
    `;
  const cardContainer = element.querySelector("#cardContainer");
  const spans = Array.from(element.querySelectorAll("span"));
  const showCountEl = element.querySelector("#showCount");
  spans.forEach((span) => {
    span.addEventListener("click", (e) => {
      handleNumber(parseInt(e.target.innerText));
      cleanCardContainer();
    });
  });
  const cleanCardContainer = () => {
    cardContainer.innerHTML = "";
  };
  const showData = (data) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = String.raw`
        <img src=${data.image_link} alt=${data.name} />
        <h3>${data.name}</h3>
        <h4>${data.animal_type}</h4>
        <h4>${data.habitat}</h4>
        <h4>${data.geo_range}</h4>
        <h4>${data.diet}</h4>
      `;
    cardContainer.appendChild(card);
  };
  const showCount = (count) => {
    showCountEl.textContent = count;
  };

  const gamePhaseStart = (data) => {
    cardContainer.innerHTML = String.raw`
      <h1>Memory is over! Are you ready for game?</h1>
      <button id="yesBtn">YES</button>
    `;
    document
      .querySelector("#yesBtn")
      .addEventListener("click", () => initQuestion(data));
  };

  const showQuestion = (data, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = String.raw`
        <img src=${data[index].image_link} alt=${data[index].name} />
        <h4>What is this animal's name?</h4>
        <input type="text" id="userAnswer" placeholder="Write here..."/>
        <input type="submit" id="answerSubmit"/>
        <button id="nextQuestion">Next</button>
      `;
    cardContainer.appendChild(card);

    document.querySelector("#answerSubmit").addEventListener("click", () => {
      const userAnswer = document.querySelector("#userAnswer").value;
      userAnswer.toLowerCase() === data[index].name.toLowerCase()
        ? (card.style.backgroundColor = "green")
        : (card.style.backgroundColor = "red");
    });
    const nextQuestionEl = document.querySelector("#nextQuestion");
    nextQuestionEl.addEventListener("click", () => nextQuestion(data, index));
  };
  const questionFinal = () => {
    cardContainer.innerHTML = String.raw`
      <h1>Congratulations</h1>
      
    `;
  };

  return {
    element,
    showData,
    showCount,
    showQuestion,
    cleanCardContainer,
    gamePhaseStart,
    questionFinal,
  };
};
