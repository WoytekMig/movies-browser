import React from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import Loading from "../Loading";
import Error from "../Error";
import Pagination from "../Pagination";

const MoviesList = ({ data, currentPage, goToPage }) => {
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
        {moviesData.status === "loading" ? (
          <Loading />
        ) : moviesData.status === "error" ? (
          <Error />
        ) : (
          moviesData.results.map((element) => (
            <React.Fragment key={element.id}>
              <StyledLink to={`/movie/${element.id}`}>
                <MovieTile
                  posterPath={element.poster_path}
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
