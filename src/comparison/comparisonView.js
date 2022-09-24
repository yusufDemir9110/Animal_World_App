export const comparisonView = (props) => {
  const { handleNumber } = props;

  const element = document.createElement("div");

  element.innerHTML = String.raw`
        <h1>random Learn View</h1>
        <div>
          <h2>How many animals</h2>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        <div id="cardContainer"></div>
        
        
    `;
  const cardContainer = element.querySelector("#cardContainer");
  const spans = Array.from(element.querySelectorAll("span"));
  spans.forEach((span) => {
    span.addEventListener("click", (e) => {
      handleNumber(parseInt(e.target.innerText));
      cardContainer.innerHTML = "";
    });
  });

  const showData = (data) => {
    data.forEach((data) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = String.raw`
        <img src=${data.image_link} alt=${data.name} />
        <h3>${data.name}</h3>
        <h4>${data.animal_type}</h4>
        <h4>${data.habitat}</h4>
        <h4>${data.geo_range}</h4>
        <h4>${data.diet}</h4>
      `;
      cardContainer.appendChild(card);
    });
  };

  return { element, showData };
};
