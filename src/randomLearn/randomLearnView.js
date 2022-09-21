export const randomLearnView = (props) => {
  const { handleNumber } = props;

  const element = document.createElement("div");

  element.innerHTML = String.raw`
        <h1>random Learn View</h1>
        <div>
          <h2>How many animals</h2>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div id="cartContainer"></div>
        
        
    `;
  const spans = Array.from(element.querySelectorAll("span"));
  spans.forEach((span) => {
    span.addEventListener("click", (e) => {
      handleNumber(parseInt(e.target.innerText));
    });
  });
  const cartContainer = element.querySelector("#cartContainer");
  console.log(cartContainer);
  const showData = (data) => {
    data.forEach((data) => {
      const cart = document.createElement("div");
      cart.innerHTML = String.raw`
        <h3>${data.name}</h3>
        <img src=${data.image_link} alt=${data.name} />
      `;
      cartContainer.appendChild(cart);
    });
  };

  return { element, showData };
};
