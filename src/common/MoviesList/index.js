import React from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledLink, StyledMainHeader } from "./styled";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../features/MoviesBrowser/moviesSlice";

const MoviesList = ({ moviesData, title }) => {
  const dispatch = useDispatch();

  return (
    <MainContainer>
      <StyledMainHeader>{title}</StyledMainHeader>
      {moviesData.map((movie) => (
        <StyledLink
          key={movie.credit_id ?? movie.id}
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
  );
};

export default MoviesList;
