import MovieTile from "../../common/MovieTile";
import MoviePage from "./MoviePage";

const MoviesBrowser = () => (
  <>
    <MoviePage />
    <MovieTile
      title={"Mulan"}
      year={"2020"}
      tag={"Action"}
      rate={"7,8"}
      votes={"657"}
    />
  </>
);

export default MoviesBrowser;
