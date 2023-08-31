import { useState, useEffect } from "react";
import axios from "axios";

const useMovieData = () => {
  const [movieData, setMovieData] = useState({ status: "loading", data: [] });

  const MOVIE_API_URL =
    "https://api.themoviedb.org/3/movie/11?api_key=baca1cc9462be3b73a5e5722d6854eb5";

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await axios.get(MOVIE_API_URL);

        const data = response.data;

        setMovieData({ status: "success", data });
      } catch (error) {
        console.error(error);
        setMovieData({ status: "error", data: [] });
      }
    };

    setTimeout(fetchMovieData, 1000);
  }, []);

  return movieData;
};

export { useMovieData };
