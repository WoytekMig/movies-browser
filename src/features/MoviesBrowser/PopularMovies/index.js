import { useState } from "react";
import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesData = useMoviesData(currentPage);
  return (
    <>
      {moviesData.status === "loading" ? (
        <Loading />
      ) : moviesData.status === "error" ? (
        <Error />
      ) : (
        <MoviesList
          data={moviesData}
          currentPage={currentPage}
          goToPage={setCurrentPage}
        />
      )}
    </>
  );
};

export default PopularMovies;
