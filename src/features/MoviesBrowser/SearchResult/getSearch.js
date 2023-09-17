import axios from "axios";
import { API_KEY, API_URL } from "../../../codesAPI";

const fetchSearchToAPI = async ({ page, query, topic }) => {
  const response = await axios.get(
    `${API_URL}/search/${topic}?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`
  );
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }
  return response.data;
};
export default fetchSearchToAPI;
