import { loadPage } from "../helpers/loadPage.js";
import { animalTourView } from "./animalTourView.js";

export const animalTourPage = () => {
  const handleChange = () => {
    fetchData();
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://zoo-animal-api.herokuapp.com/animals/rand/`
      );
      const data = await response.json();
      view.showData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const props = { handleChange };
  const view = animalTourView(props);

  return view;
};
