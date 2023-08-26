import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { MoviePageWrapper } from "./styled";

const MoviePage = () => {
  return (
    <MoviePageWrapper>
      <MovieTop />
      <MovieInfo />
    </MoviePageWrapper>
  );
};

export default MoviePage;
