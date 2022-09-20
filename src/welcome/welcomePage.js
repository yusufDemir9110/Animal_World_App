import { loadPage } from "../helpers/loadPage.js";
import { welcomeView } from "./welcomeView.js";
import { randomLearnPage } from "../randomLearn/randomLearnPage.js";
import { memoryGamePage } from "../memoryGame/memoryGamePage.js";

export const welcomePage = () => {
  const onStartClick = (e) => {
    switch (e.target.value) {
      case "randomLearn":
        loadPage(randomLearnPage);
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
