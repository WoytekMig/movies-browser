import React, { useState } from "react";
import MovieTile from "../../../common/MovieTile";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import { useMoviesData } from "./useMoviesData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import Pagination from "../../../common/Pagination";

const MoviesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesData = useMoviesData(currentPage);

  const whenNoPoster = "../images/logo.svg";

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
      /* currentPage={moviesData.page} */
      /* hookYouNeed={1} */
      /*totalPages={500}
        onFirstPage={(currentPage = 1)}
        onPrevPage={(currentPage = currentPage - 1)}
        onNextPage={(currentPage = currentPage + 1)}
        onLastPage={(currentPage = totalPages)} */
      />
    </>
  );
};

export default MoviesList;
