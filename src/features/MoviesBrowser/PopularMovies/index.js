import MoviesList from "../../../common/MoviesList";
import { useMoviesData } from "./useMoviesData";

const PopularMovies = () => {
  const moviesData = useMoviesData();

  return <MoviesList data={moviesData} />;
};

export default PopularMovies;
