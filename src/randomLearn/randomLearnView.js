export const randomLearnView = () => {
  const element = document.createElement("div");
  const optionNumbers = [5, 6, 7, 8, 9, 10];

  element.innerHTML = String.raw`
        <h1>random Learn View</h1>
        <h2>How many animals</h2>
        <select id="#selectNumber"></select>
    `;
  const selectEl = document.querySelector("#selectNumber");
  console.log(selectEl);
  return { element };
};
