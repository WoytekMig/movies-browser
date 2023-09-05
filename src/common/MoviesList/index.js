import React from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import Pagination from "../Pagination";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../features/MoviesBrowser/moviesSlice";

const MoviesList = ({ data, currentPage, goToPage }) => {
  const dispatch = useDispatch();
  const moviesData = data;
  const totalPages = () =>
    moviesData.total_pages > 500 ? 500 : moviesData.total_pages;
  const whichPage = (page) => {
    if (page >= 1 && page <= totalPages()) {
      goToPage(page);
    }
  };
  return (
    <>
      <MainContainer>
        <StyledMainHeader>Popular movies</StyledMainHeader>
        {moviesData.results.map((movie) => (
          <StyledLink
            key={movie.id}
            onClick={() => dispatch(setMovieId(movie.id))}
            to={`/movie/${movie.id}`}
          >
            <MovieTile
              posterPath={movie.poster_path}
              title={movie.title}
              year={new Date(movie.release_date).getFullYear()}
              rating={movie.vote_average}
              votes={movie.vote_count}
              tag={movie.genre_ids}
            />
          </StyledLink>
        ))}
      </MainContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages()}
        onFirstPage={() => whichPage(1)}
        onPrevPage={() => whichPage(currentPage - 1)}
        onNextPage={() => whichPage(currentPage + 1)}
        onLastPage={() => whichPage(totalPages())}
      />
    </>
  );
};

export default MoviesList;
