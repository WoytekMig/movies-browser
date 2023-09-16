import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Pagination from "../../../common/Pagination";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import usePageQueryParam from "../usePageQueryParam";

const PopularMovies = () => {
  const [currentPage, setCurrentPage] = usePageQueryParam();
  const { moviesData, setMoviesData } = useMoviesData(currentPage);

  const totalPages = () =>
    moviesData.total_pages > 500 ? 500 : moviesData.total_pages;

  const onPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages()) {
      setMoviesData({ status: "loading" });
      setCurrentPage(newPage);
    }
  };

  return (
    <>
      {moviesData.status === "loading" ? (
        <Loading />
      ) : moviesData.status === "error" ? (
        <Error />
      ) : (
        <Main>
          <MainHeader title="Popular movies" />
          <MoviesList moviesData={moviesData.results} title="Popular movies" />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages()}
            onPageChange={onPageChange}
          />
        </Main>
      )}
    </>
  );
};

export default PopularMovies;
