import { loadPage } from "../helpers/loadPage.js";
import { memoryGameView } from "./memoryGameView.js";
import { welcomePage } from "../welcome/welcomePage.js";

export const memoryGamePage = () => {
  const handleNumber = (number) => {
    fetchData(number);
  };

  const fetchData = async (number) => {
    try {
      const response = await fetch(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      const data = await response.json();
      showSlide(data, number - 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  let count = 2;
  const showSlide = (data, number) => {
    view.showData(data[number]);
    let intervalId = null;
    const counterRender = () => {
      if (count > 0) {
        count--;
        view.showCount(count);
      } else {
        count = 2;
        view.showCount(count);
        clearInterval(intervalId);
        view.cleanCardContainer();
        if (number > 0) {
          showSlide(data, number - 1);
        } else {
          view.gamePhaseStart(data);
        }
      }
    };
    intervalId = setInterval(counterRender, 1000);
  };
  const initQuestion = (data) => {
    const index = data.length - 1;
    view.showQuestion(data, index);
  };

  const nextQuestion = (data, index, name) => {
    index--;
    if (index >= 0) {
      view.cleanCardContainer();
      view.showQuestion(data, index);
    } else {
      view.questionFinal(name);
    }
  };

  const getHint = (data, index, age) => {
    let hint = data[index].name.replace("-", " ");
    let hintWords = hint.split(" ");
    let result = "";
    if (age > 10) {
      for (let i = 0; i < hintWords.length; i++) {
        let hintWordArr = hintWords[i].split("");
        hintWordArr.sort(() => {
          return 0.5 - Math.random();
        });
        hintWords[i] = hintWordArr.join("");
        result += hintWords[i] + " ";
      }
    } else {
      for (let i = 0; i < hintWords.length; i++) {
        let hintWordArrLast = hintWords[i]
          .slice(2, hintWords[i].length)
          .split("");

        hintWordArrLast.sort(() => {
          return 0.5 - Math.random();
        });
        hintWords[i] = hintWords[i].slice(0, 2) + hintWordArrLast.join("");

        result += hintWords[i] + " ";
      }
    }
    view.showHint(result);
  };

  const backHomePageClick = () => {
    loadPage(welcomePage);
  };

  const props = {
    handleNumber,
    count,
    initQuestion,
    nextQuestion,
    getHint,
    backHomePageClick,
    showSlide,
  };
  const view = memoryGameView(props);
  return view;
};
