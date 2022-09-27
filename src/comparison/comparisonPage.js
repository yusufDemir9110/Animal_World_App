import { loadPage } from "../helpers/loadPage.js";
import { comparisonView } from "./comparisonView.js";
import { welcomePage } from "../welcome/welcomePage.js";

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
      view.showData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleSort = (sortValue, data) => {
    const sortedData = data.sort((a, b) => a[sortValue] - b[sortValue]);
    view.cleanCardContainer();
    view.showData(sortedData);
  };
  const backHomePageClick = () => {
    loadPage(welcomePage);
  };

  const props = { handleNumber, handleSort, backHomePageClick };
  const view = comparisonView(props);
  return view;
};
