export const memoryGameView = (props) => {
  const {
    handleNumber,
    count,
    initQuestion,
    nextQuestion,
    getHint,
    backHomePageClick,
  } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <div class="inner">
<h1>memory Game View</h1>
        <div>
         <label htmlFor="name">
          Name <input type="text" id="name"/>
         </label>
        </div>
        <div>
         <label htmlFor="age">
          Age <input type="number" id="age"/>
         </label>
        </div>
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
        <div>
          <button id="backHomePage">Back to Home Page</button>
        </div>
        </div>
        
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
        <h3>${data.name.replace("-", " ")}</h3>
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
    const name = element.querySelector("#name").value;
    const age = element.querySelector("#age").value;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = String.raw`
        <img src=${data[index].image_link} alt=${data[index].name} />
        <h4>${name} what is this animal's name?</h4>
        <div>
          <input type="text" id="userAnswer" placeholder="Write here..."/>
          <input type="submit" id="answerSubmit"/>
          <button id="nextQuestion">Next</button>
          <button id="getHint">Get Hint</button>
        </div>
        
        <div id="showHint"></div>
      `;
    cardContainer.appendChild(card);

    document.querySelector("#answerSubmit").addEventListener("click", () => {
      const userAnswer = document.querySelector("#userAnswer").value;
      userAnswer.toLowerCase() ===
      data[index].name.toLowerCase().replace("-", " ")
        ? (card.style.backgroundColor = "green")
        : (card.style.backgroundColor = "red");
    });
    const nextQuestionEl = document.querySelector("#nextQuestion");
    nextQuestionEl.addEventListener("click", () =>
      nextQuestion(data, index, name)
    );
    const getHintEl = document.querySelector("#getHint");
    getHintEl.addEventListener("click", () => getHint(data, index, age));
  };

  const showHint = (result) => {
    const showHintEl = document.querySelector("#showHint");
    showHintEl.textContent = result;
  };

  const questionFinal = (name) => {
    cardContainer.innerHTML = String.raw`
      <h1>Congratulations ${name}! You finished the game!</h1>
      
    `;
  };

  const backHomePageEl = element.querySelector("#backHomePage");
  backHomePageEl.addEventListener("click", backHomePageClick);

  return {
    element,
    showData,
    showCount,
    showQuestion,
    showHint,
    cleanCardContainer,
    gamePhaseStart,
    questionFinal,
  };
};
