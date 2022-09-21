export const animalTourView = (props) => {
  const { handleChange } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <h1>animal tour View</h1>
        <div id="tourCartContainer"></div>
        <button id="getData">Change</button>
    `;

  const getDataBtn = element.querySelector("#getData");
  const tourCartContainerEl = element.querySelector("#tourCartContainer");
  getDataBtn.addEventListener("click", () => {
    handleChange();
    tourCartContainerEl.innerHTML = "";
  });
  const showData = (data) => {
    const cart = document.createElement("div");
    cart.innerHTML = String.raw`
        <h3>${data.name}</h3>
        <img src=${data.image_link} alt=${data.name} />
      `;
    tourCartContainerEl.appendChild(cart);
  };

  return { element, showData };
};
