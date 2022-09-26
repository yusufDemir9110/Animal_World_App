export const animalTourView = (props) => {
  const { handleChange, backHomePageClick } = props;
  const element = document.createElement("div");
  element.innerHTML = String.raw`
      <div class="inner">
        <h1>Animal Tour</h1>
        <div id="tourCardContainer"></div>
        <div class="buttons">
          <div class="buttonContainer dummy">
            <button class="btn"></button>
          </div>
          <div class="buttonContainer">
            <button class="btn" id="getData">Start</button>
          </div>
        
          <div class="buttonContainer">
            <button class="btn" id="backHomePage">Back to Home Page</button>
          </div>
        </div>
        
      </div>
        
    `;

  const getDataBtn = element.querySelector("#getData");
  const tourCardContainerEl = element.querySelector("#tourCardContainer");
  getDataBtn.addEventListener("click", () => {
    handleChange();
    tourCardContainerEl.innerHTML = "";
  });
  const showData = (data) => {
    getDataBtn.textContent = "Change";
    console.log(data);
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
    tourCardContainerEl.appendChild(card);
  };
  const backHomePageEl = element.querySelector("#backHomePage");
  backHomePageEl.addEventListener("click", backHomePageClick);

  return { element, showData };
};
