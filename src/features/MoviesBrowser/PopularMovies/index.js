import { useState } from "react";
import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesData = useMoviesData(currentPage);

  return <MoviesList data={moviesData} />;
};

export default PopularMovies;
