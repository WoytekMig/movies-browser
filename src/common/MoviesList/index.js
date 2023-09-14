import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledLink } from "./styled";
import { useDispatch } from "react-redux";
import { setMovieId } from "../../features/MoviesBrowser/moviesSlice";

const MoviesList = ({ moviesData, profile }) => {
  const dispatch = useDispatch();

  return (
    <MainContainer>
      {moviesData.map((movie) => {
        const year = new Date(movie.release_date).getFullYear();
        const roleAndYear = `${movie.character ?? movie.job} ${
          year ? `(${year})` : ""
        }`;

        return (
          <StyledLink
            key={movie.credit_id ?? movie.id}
            onClick={() => dispatch(setMovieId(movie.id))}
            to={`/movie/${movie.id}`}
          >
            <MovieTile
              posterPath={movie.poster_path}
              title={movie.title}
              year={profile ? roleAndYear : year}
              rating={movie.vote_average}
              votes={movie.vote_count}
              tag={movie.genre_ids}
            />
          </StyledLink>
        );
      })}
    </MainContainer>
  );
};

export default MoviesList;
