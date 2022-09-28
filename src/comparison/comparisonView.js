export const comparisonView = (props) => {
  const { handleNumber, handleSort, backHomePageClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
        <div class="inner">
          <h1>Comparison</h1>       
          <h3>How many animals would you like to compare?</h3>
          <div class="chooseNumber">
            <div class="chooseItem">2</div>
            <div class="chooseItem">3</div>
            <div class="chooseItem">4</div>
            <div class="chooseItem">5</div>
          </div>       
          <div id="cardContainer"></div>  
              <select class="btn" id="sortSelect">
                <option id="selectedOp" value="sortBy" disabled selected>Sort by</option>
                <option value="lifespan">lifespan</option>
                <option value="weight_max">weight</option>
                <option value="length_max">length</option>
              </select> 
              <button class="btn" id="backHomePage">Back to Home Page</button>
        </div>    
    `;
  const cardContainer = element.querySelector("#cardContainer");
  const chooseItems = Array.from(element.querySelectorAll(".chooseItem"));
  const sortSelectEl = element.querySelector("#sortSelect");

  chooseItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      handleNumber(parseInt(e.target.innerText));
      cleanCardContainer();
      document.querySelector("#selectedOp").selected = true;
    });
  });

  const cleanCardContainer = () => {
    cardContainer.innerHTML = "";
  };

  const showData = (data) => {
    sortSelectEl.style.display = "block";
    data.forEach((data) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.innerHTML = String.raw`
        <img src=${data.image_link} alt=${data.name} />
        <div id="comparisonTableContainer">
        <table>
          <thead>
            <tr>
              <th colspan="2">${data.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Animal Type</td>
              <td>${data.animal_type}</td>
            </tr>
            <tr>
              <td>Lifespan</td>
              <td>${data.lifespan} years</td>
            </tr>
            <tr>
              <td>Max. Length</td>
              <td>${data.length_max} ft.</td>
            </tr>
            <tr>
              <td>Max Weight</td>
              <td>${data.weight_max} lb.</td>
            </tr>
          </tbody>
        </table>
        </div>
      `;
      cardContainer.appendChild(card);
    });
    sortSelectEl.addEventListener("change", (e) =>
      handleSort(e.target.value, data)
    );
  };

  const showError = (message) => {
    console.log(message);
    cardContainer.innerHTML = String.raw`
      <h3 class="center">Oops! Something went wrong! ${message}</h3>
    `;
  };

  const backHomePageEl = element.querySelector("#backHomePage");
  backHomePageEl.addEventListener("click", backHomePageClick);

  return { element, showData, showError, cleanCardContainer };
};
