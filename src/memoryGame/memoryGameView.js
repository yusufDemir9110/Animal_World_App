export const memoryGameView = (props) => {
  const {
    handleNumber,
    count,
    initQuestion,
    nextQuestion,
    getHint,
    backHomePageClick,
    showSlide,
  } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <div class="inner">
          <h1>Memory Game</h1>
          <div id="startPage">
          <form>
            <p>1. Enter your name and age</p>
            <div class="labels center">
            <label for="name">
              <input class="nameAge" type="text" id="name" placeholder="Enter your name*..."/>
            </label>
            <label for="age">
              <input class="nameAge" type="number" id="age" placeholder="Enter your age*..."/>
            </label>
            </div>
          </form>
          <form class="disabled" id="secondP">
            <p>2. Depending on the number you choose, some animals will be shown to you. 
              You have 4 seconds to memorize the name of each animal. 
              The game will start when you choose the number</p>
              <label for="gotIt">
                <input type="checkBox" id="gotIt"/>Got it!
              </label>
              
          </form>
          <div class="disabled" id="thirdP">
            <h3>How many animals do you want to play with?</h3>
            <div class="chooseNumber ">
              <div class="chooseItem">6</div>
              <div class="chooseItem">7</div>
              <div class="chooseItem">8</div>
              <div class="chooseItem">9</div>
              <div class="chooseItem">10</div>
            </div>     
          </div>
          </div>
          
          
          <div id="showCount">${count}</div>
          <div id="memoryCardContainer"></div>
        
          <button class="btn" id="backHomePage">Back to Home Page</button>
          
        </div>
        
    `;
  const cardContainer = element.querySelector("#memoryCardContainer");
  const chooseItems = Array.from(element.querySelectorAll(".chooseItem"));
  const showCountEl = element.querySelector("#showCount");
  const nameAgeInputs = Array.from(element.querySelectorAll(".nameAge"));
  const secondP = element.querySelector("#secondP");
  const gotIt = element.querySelector("#gotIt");
  const thirdP = element.querySelector("#thirdP");
  const startPage = element.querySelector("#startPage");
  chooseItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      handleNumber(parseInt(e.target.innerText));
      cleanCardContainer();
    });
  });

  nameAgeInputs.forEach((item) => {
    item.addEventListener("change", () => {
      nameAgeInputs[0].value !== "" && nameAgeInputs[1].value !== ""
        ? secondP.classList.remove("disabled")
        : secondP.classList.add("disabled");
    });
  });

  const cleanCardContainer = () => {
    cardContainer.innerHTML = "";
  };

  gotIt.addEventListener("change", () => {
    gotIt.checked
      ? thirdP.classList.remove("disabled")
      : thirdP.classList.add("disabled");
  });

  const showData = (data) => {
    startPage.style.display = "none";
    showCountEl.style.display = "flex";
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = String.raw`
        <img class="memorizingImg" src=${data.image_link} alt=${data.name} />
        <h3>${data.name.replace("-", " ")}</h3>
      `;
    cardContainer.appendChild(card);
  };
  const showCount = (count) => {
    showCountEl.textContent = count;
  };

  const gamePhaseStart = (data) => {
    showCountEl.style.display = "none";
    cardContainer.innerHTML = String.raw`
      <div class="buttonContainer">
        <h3>Memorizing is over! Are you ready for the questions?</h3>
        <button class="btn" id="yesBtn">YES</button>
        <button class="btn" id="noBtn">NO, MEMORIZE AGAIN!</button>
      </div>
      
    `;
    document
      .querySelector("#yesBtn")
      .addEventListener("click", () => initQuestion(data));
    document.querySelector("#noBtn").addEventListener("click", () => {
      cleanCardContainer();
      showSlide(data, data.length - 1);
    });
  };

  const showQuestion = (data, index) => {
    cleanCardContainer();
    const name = element.querySelector("#name").value;
    const age = element.querySelector("#age").value;
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = String.raw`
      <div>
        <div class="questionContainer center">
          <img class="memorizingImg" src=${data[index].image_link} alt=${data[index].name} />
          <div class="inner">
            <h3 id="questionText">${name} what is this animal's name?</h3>
            <input type="text" id="userAnswer" placeholder="Write here..."/>
            <div class="queButtons">
              
                <button class="btn queBtn" id="answerSubmit">Check</button>
              
              
                <button class="btn queBtn" id="getHint">Get Hint</button>
              
                <div id="showHint"></div>
              
                <button class="btn queBtn disabled" id="nextQuestion">Next</button>
              
            </div>
          </div> 
        </div>
      </div>
        
        
      `;
    cardContainer.appendChild(card);
    const answerSubmitEl = document.querySelector("#answerSubmit");

    const userAnswer = document.querySelector("#userAnswer");
    const questionText = document.querySelector("#questionText");
    const nextQuestionEl = document.querySelector("#nextQuestion");
    answerSubmitEl.addEventListener("click", () => {
      nextQuestionEl.classList.remove("disabled");
      if (
        userAnswer.value.toLowerCase() ===
        data[index].name.toLowerCase().replace("-", " ")
      ) {
        questionText.textContent = `Congratulations! The answer is ${data[index].name}`;
        questionText.style.color = "green";
      } else {
        questionText.textContent = `The answer must be ${data[index].name}`;
        questionText.style.color = "red";
      }
    });

    nextQuestionEl.addEventListener("click", () => {
      nextQuestion(data, index, name);
    });
    const getHintEl = document.querySelector("#getHint");
    getHintEl.addEventListener("click", () => {
      getHint(data, index, age);
      getHintEl.classList.add("disabled");
    });
  };

  const showHint = (result) => {
    const showHintEl = document.querySelector("#showHint");
    showHintEl.textContent = result;
  };

  const questionFinal = (name) => {
    cardContainer.innerHTML = String.raw`
      <h2 class="center">Congratulations ${name}! You finished the game!</h2>
      
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
