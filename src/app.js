import { loadPage } from "./helpers/loadPage.js";
import { welcomePage } from "./welcome/welcomePage.js";

const loadApp = () => {
  loadPage(welcomePage);
};

window.addEventListener("load", loadApp);
