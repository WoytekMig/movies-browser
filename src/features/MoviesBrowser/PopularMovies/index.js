import { useEffect, useState } from "react";
import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Pagination from "../../../common/Pagination";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const moviesData = useMoviesData(currentPage);

  const totalPages = () =>
    moviesData.total_pages > 500 ? 500 : moviesData.total_pages;

  const whichPage = (page) => {
    if (page >= 1 && page <= totalPages()) {
      setIsLoading(true);
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [currentPage]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : moviesData.status === "error" ? (
        <Error />
      ) : (
        <Main>
          <MainHeader title="Popular movies" />
          <MoviesList moviesData={moviesData.results} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages()}
            onFirstPage={() => whichPage(1)}
            onPrevPage={() => whichPage(currentPage - 1)}
            onNextPage={() => whichPage(currentPage + 1)}
            onLastPage={() => whichPage(totalPages())}
          />
        </Main>
      )}
    </>
  );
};

export default PopularMovies;
