import { loadPage } from "../helpers/loadPage.js";
import { memoryGameView } from "./memoryGameView.js";

export const memoryGamePage = () => {
  const view = memoryGameView();
  return view;
};
