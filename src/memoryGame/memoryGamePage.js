import { loadPage } from "../helpers/loadPage.js";
import { memoryGameView } from "./memoryGameView.js";

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
      console.log(data);
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

  const nextQuestion = (data, index) => {
    index--;
    if (index >= 0) {
      view.cleanCardContainer();
      view.showQuestion(data, index);
    } else {
      view.questionFinal();
    }
  };

  const props = { handleNumber, count, initQuestion, nextQuestion };
  const view = memoryGameView(props);
  return view;
};
