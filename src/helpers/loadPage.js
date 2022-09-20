export const loadPage = (initPage) => {
  const { element } = initPage();
  const rootEl = document.querySelector("#root");
  rootEl.innerHTML = "";
  rootEl.appendChild(element);
};
