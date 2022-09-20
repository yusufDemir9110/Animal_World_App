import { loadPage } from "../helpers/loadPage.js";
import { randomLearnView } from "./randomLearnView.js";

export const randomLearnPage = () => {
  const view = randomLearnView();
  return view;
};
