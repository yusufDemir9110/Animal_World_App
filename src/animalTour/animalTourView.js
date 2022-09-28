export const animalTourView = (props) => {
  const { handleChange, backHomePageClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
      <div class="inner">
        <h1>Animal Tour</h1>
        <div id="tourCardContainer"></div>         
            <button class="btn" id="getData">Start</button>          
            <button class="btn" id="backHomePage">Back to Home Page</button>
      </div>        
    `;

  const getDataBtn = element.querySelector("#getData");
  const cardContainer = element.querySelector("#tourCardContainer");

  getDataBtn.addEventListener("click", () => {
    handleChange();
    cardContainer.innerHTML = "";
  });

  const showData = (data) => {
    getDataBtn.textContent = "Change";
    const card = document.createElement("div");
    card.innerHTML = String.raw`
    <div class="tourImgContainer">
      <img src=${data.image_link} alt=${data.name} />
    </div>
    <div class="tourTableContainer">
      <table>
        <thead>
          <tr>
            <th colspan="2">${data.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Latin Name</td>
            <td>${data.latin_name}</td>
          </tr>
          <tr>
            <td>Animal Type</td>
            <td>${data.animal_type}</td>
          </tr>
          <tr>
            <td>Geo Range</td>
            <td>${data.geo_range}</td>
          </tr>
          <tr>
            <td>Habitat</td>
            <td>${data.habitat}</td>
          </tr>
          <tr>
            <td>Diet</td>
            <td>${data.diet}</td>
          </tr>
          <tr>
            <td>Lifespan</td>
            <td>${data.lifespan} years</td>
          </tr>
          <tr>
            <td>Length (feet)</td>
            <td>${data.length_min} - ${data.length_max}</td>
          </tr>
          <tr>
            <td>Weight (pounds)</td>
            <td>${data.weight_min} - ${data.weight_max}</td>
          </tr>
        </tbody>
      </table>
    </div>
      `;
    cardContainer.appendChild(card);
  };

  const showError = (message) => {
    cardContainer.innerHTML = String.raw` 
      <h3 class="center">Oops! Something went wrong! ${message}</h3>
      `;
  };

  const backHomePageEl = element.querySelector("#backHomePage");
  backHomePageEl.addEventListener("click", backHomePageClick);

  return { element, showData, showError };
};
