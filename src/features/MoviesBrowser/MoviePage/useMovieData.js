import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "api_key=baca1cc9462be3b73a5e5722d6854eb5";

const useMovieData = (movieId) => {
  const [movieData, setMovieData] = useState({
    status: "loading",
    movie: [],
    credits: [],
  });

  const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?${API_KEY}`;
  const CREDITS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&${API_KEY}`;

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const movieResponse = await axios.get(MOVIE_API_URL);
        const creditsResponse = await axios.get(CREDITS_API_URL);

        const movie = movieResponse.data;
        const credits = creditsResponse.data;

        setMovieData({ status: "success", movie, credits });
      } catch (error) {
        console.error(error);
        setMovieData({ status: "error", movie: [], credits: [] });
      }
    };

    setTimeout(fetchMovieData, 1000);
  }, [MOVIE_API_URL, CREDITS_API_URL]);

  return movieData;
};

export { useMovieData };
