import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import noPoster from "../../../images/whenNoPoster.png";
import { MovieDetailsWrapper } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { getMovieImageUrl } from "../../../common/Helpers/ApiUrls";
import { selectIsMedia } from "../../../../store";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import {
  fetchMovieDataById,
  selectMovieData,
} from "../../Details/detailsSlice";
import { useEffect } from "react";

const MovieDetails = () => {
  const isMobile = useSelector(selectIsMedia);
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchMovieDataById(id));
  }, [id, dispatch]);

  const { movie, credits, status } = useSelector(selectMovieData);

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
        <MovieDetailsWrapper $noPoster={!topPoster}>
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
            <PeopleList title="Cast" data={credits.cast} movieDetails />
          )}
          {credits.crew.length !== 0 && (
            <PeopleList title={"Crew"} data={credits.crew} movieDetails />
          )}
        </MovieDetailsWrapper>
      )}
    </>
  );
};

export default MovieDetails;
