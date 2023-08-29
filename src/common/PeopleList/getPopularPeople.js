import axios from "axios";
import { API_KEY, ApiPopularPeople } from "../../codesAPI";

const getPopularPeople = async ({ currentPage }) => {
  const response = await axios.get(
    `${ApiPopularPeople}?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );
  if (response.status !== 200) {
    throw new Error("Request failed with status: " + response.status);
  }
  return await response.data;
};

export default getPopularPeople;
