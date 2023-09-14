import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import noPoster from "../../../images/whenNoPoster.png";
import { MoviePageWrapper } from "./styled";
import { useMovieData } from "./useMovieData";
import { useSelector } from "react-redux";
import { selectMovieId } from "../moviesSlice";
import { getMovieImageUrl } from "../../../codesAPI";
import { selectIsMedia } from "../../../store";

const MoviePage = () => {
  const movieId = useSelector(selectMovieId);
  const isMobile = useSelector(selectIsMedia);

  const { status, movie, credits } = useMovieData(movieId);

  const topPoster = movie.backdrop_path
    ? getMovieImageUrl(movie.backdrop_path)
    : null;
  const poster = movie.poster_path
    ? getMovieImageUrl(movie.poster_path)
    : noPoster;

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
            productionPlace={movie.production_countries.map((country) =>
              isMobile ? country.iso_3166_1 ?? country.name : country.name
            )}
            releaseDate={modifiedReleaseDate}
            tags={movie.genres}
            rate={movie.vote_average}
            votes={movie.vote_count}
            description={movie.overview}
            poster={poster}
          />
          {credits.cast.length !== 0 && (
            <PeopleList title="Cast" data={credits.cast} moviePage />
          )}
          {credits.crew.length !== 0 && (
            <PeopleList title={"Crew"} data={credits.crew} moviePage />
          )}
        </MoviePageWrapper>
      )}
    </>
  );
};

export default MoviePage;
