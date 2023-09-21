import axios from "axios";
import { getMovieApiUrls } from "../common/ApiUrls";

const getMovie = async (movieId) => {
  const { MOVIE_API_URL, CREDITS_API_URL } = getMovieApiUrls(movieId);

  const movieResponse = await axios.get(MOVIE_API_URL);
  const creditsResponse = await axios.get(CREDITS_API_URL);

  const movie = movieResponse.data;
  const credits = creditsResponse.data;

  const movieData = { movie, credits };

  return movieData;
};

export { getMovie };
