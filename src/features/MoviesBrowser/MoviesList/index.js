import React from "react";
import MovieTile from "../../../common/MovieTile";
import { MainContainer, StyledMainHeader } from "./styled";
import { useMoviesData } from "./useMoviesData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const MoviesList = () => {
  const moviesData = useMoviesData();

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
              <MovieTile
                posterPath={element.poster_path}
                title={element.title}
                year={new Date(element.release_date).getFullYear()}
                rating={element.vote_average}
                votes={element.vote_count}
                tag={element.genre_ids}
              />
            </React.Fragment>
          ))
        )}
      </MainContainer>
    </>
  );
};

export default MoviesList;
