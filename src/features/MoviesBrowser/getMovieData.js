import axios from "axios";

const MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/11?api_key=baca1cc9462be3b73a5e5722d6854eb5";

const getMovieData = async () => {
  const response = await axios.get(MOVIES_API_URL);

  return response.data;
};

export { getMovieData };
