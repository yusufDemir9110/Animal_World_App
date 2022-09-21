import { loadPage } from "../helpers/loadPage.js";
import { welcomeView } from "./welcomeView.js";
import { comparisonPage } from "../comparison/comparisonPage.js";
import { memoryGamePage } from "../memoryGame/memoryGamePage.js";
import { animalTourPage } from "../animalTour/animalTourPage.js";

export const welcomePage = () => {
  const onStartClick = (e) => {
    switch (e.target.value) {
      case "animalTour":
        loadPage(animalTourPage);
        break;
      case "comparison":
        loadPage(comparisonPage);
        break;
      case "memoryGame":
        loadPage(memoryGamePage);
        break;
      default:
        break;
    }
  };
  const props = { onStartClick };
  return welcomeView(props);
};
