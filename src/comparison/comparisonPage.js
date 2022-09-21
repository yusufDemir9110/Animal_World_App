import { loadPage } from "../helpers/loadPage.js";
import { comparisonView } from "./comparisonView.js";

export const comparisonPage = () => {
  const handleNumber = (number) => {
    fetchData(number);
  };

  const fetchData = async (number) => {
    try {
      const response = await fetch(
        `https://zoo-animal-api.herokuapp.com/animals/rand/${number}`
      );
      const data = await response.json();
      console.log(data);
      view.showData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const props = { handleNumber };
  const view = comparisonView(props);
  return view;
};