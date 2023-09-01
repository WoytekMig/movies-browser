import React from "react";
import MovieTile from "../MovieTile";
import Loading from "../Loading";
import { MainContainer, StyledMainHeader } from "./styled";

const MoviesList = ({ data }) => {
  return (
    <>
      <MainContainer>
        <StyledMainHeader>Popular movies</StyledMainHeader>
        {data.status === "loading" ? (
          <Loading />
        ) : data.status === "error" ? (
          <StyledMainHeader>SOMETHING WENT WRONG, sorry.. </StyledMainHeader>
        ) : (
          data.results.map((element) => (
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
