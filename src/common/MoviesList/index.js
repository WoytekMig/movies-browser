import React, { useState } from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import { useMoviesData } from "../../features/MoviesBrowser/PopularMovies/useMoviesData";
import Loading from "../Loading";
import Error from "../Error";
import Pagination from "../Pagination";

const MoviesList = ({ data }) => {
  /* const moviesData = useMoviesData(currentPage); */
  const moviesData = data;
  const whenNoPoster = "../images/logo.svg";
  const currentPage = moviesData.page;
  const totalPages = 500;

  return (
    <>
      <MainContainer>
        <StyledMainHeader>Popular movies</StyledMainHeader>
        {moviesData.status === "loading" ? (
          <Loading />
        ) : moviesData.status === "error" ? (
          <Error />
        ) : (
          moviesData.results.map((element) => (
            <React.Fragment key={element.id}>
              <StyledLink to={`/movie/${element.id}`}>
                <MovieTile
                  posterPath={
                    element.poster_path ? element.poster_path : whenNoPoster
                  }
                  title={element.title}
                  year={new Date(element.release_date).getFullYear()}
                  rating={element.vote_average}
                  votes={element.vote_count}
                  tag={element.genre_ids}
                />
              </StyledLink>
            </React.Fragment>
          ))
        )}
      </MainContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onFirstPage={() => (currentPage = 1)}
        onPrevPage={() => (currentPage = currentPage - 1)}
        onNextPage={() => (currentPage = currentPage + 1)}
        onLastPage={() => (currentPage = totalPages)}
      />
    </>
  );
};

export default MoviesList;
