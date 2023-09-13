import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { MoviePageWrapper } from "./styled";
import { useMovieData } from "./useMovieData";
import { useSelector } from "react-redux";
import { selectMovieId } from "../moviesSlice";
import { getMovieImageUrl } from "../../../codesAPI";

const MoviePage = () => {
  const movieId = useSelector(selectMovieId);

  const { status, movie, credits } = useMovieData(movieId);

  const topPoster = movie.backdrop_path
    ? getMovieImageUrl(movie.backdrop_path)
    : null;
  const poster = getMovieImageUrl(movie.poster_path);

  const modifiedReleaseDate = movie.vote_average
    ? movie.release_date.split("-").reverse().join(".")
    : "";

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "success" && (
        <MoviePageWrapper $noPoster={!topPoster}>
          {topPoster && (
            <MovieTop
              poster={topPoster}
              title={movie.original_title}
              rate={movie.vote_average}
              votes={movie.vote_count}
            />
          )}
          <MovieInfo
            title={movie.title}
            productionYear={new Date(movie.release_date).getFullYear()}
            productionPlace={movie.production_countries.map(({ name }) => name)}
            releaseDate={modifiedReleaseDate}
            tags={movie.genres}
            rate={movie.vote_average}
            votes={movie.vote_count}
            description={movie.overview}
            poster={poster}
          />
          {credits.cast && (
            <PeopleList title="Cast" data={credits.cast} moviePage />
          )}
          {credits.crew && (
            <PeopleList title={"Crew"} data={credits.crew} moviePage />
          )}
        </MoviePageWrapper>
      )}
    </>
  );
};

export default MoviePage;
