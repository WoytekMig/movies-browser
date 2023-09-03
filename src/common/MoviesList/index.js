import React from "react";
import MovieTile from "../MovieTile";
import Loading from "../Loading";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../features/MoviesBrowser/moviesSlice";

const MoviesList = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <>
      <MainContainer>
        <StyledMainHeader>Popular movies</StyledMainHeader>
        {data.status === "loading" ? (
          <Loading />
        ) : data.status === "error" ? (
          <StyledMainHeader>SOMETHING WENT WRONG, sorry.. </StyledMainHeader>
        ) : (
          data.results.map((movie) => (
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
          ))
        )}
      </MainContainer>
    </>
  );
};

export default MoviesList;
