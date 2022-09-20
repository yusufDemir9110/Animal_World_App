export const memoryGameView = () => {
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <h1>memory Game View</h1>
    `;
  return { element };
};
