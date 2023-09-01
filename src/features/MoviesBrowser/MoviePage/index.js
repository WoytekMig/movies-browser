import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { getMovieImageUrl } from "./getMovieImageUrl";
import { MoviePageWrapper } from "./styled";
import { useMovieData } from "./useMovieData";

const MoviePage = ({ movieId }) => {
  const { status, movie, credits } = useMovieData(13);
  console.log(movie, credits);

  const topPoster = getMovieImageUrl(movie.backdrop_path);
  const poster = getMovieImageUrl(movie.poster_path);

  const modifiedRating = movie.vote_average
    ? movie.vote_average.toFixed(1).replace(".", ",")
    : "";

  const modifiedReleaseDate = movie.vote_average
    ? movie.release_date.split("-").reverse().join(".")
    : "";

  const productionYear = movie.vote_average
    ? modifiedReleaseDate.slice("6")
    : "";

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "success" && (
        <MoviePageWrapper>
          <MovieTop
            poster={topPoster}
            title={movie.original_title}
            rate={modifiedRating}
            votes={movie.vote_count}
          />
          <MovieInfo
            title={movie.title}
            productionYear={productionYear}
            productionPlace={movie.production_countries.map(({ name }) => name)}
            releaseDate={modifiedReleaseDate}
            tags={movie.genres}
            rate={modifiedRating}
            votes={movie.vote_count}
            description={movie.overview}
            poster={poster}
          />
          <PeopleList title="Cast" data={credits.cast} moviePage />
          <PeopleList title={"Crew"} data={credits.crew} moviePage />
        </MoviePageWrapper>
      )}
    </>
  );
};

export default MoviePage;
