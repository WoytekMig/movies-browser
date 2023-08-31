import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { getMovieImageUrl } from "./getMovieImageUrl";
import { MoviePageWrapper } from "./styled";
import { useMovieData } from "./useMovieData";

const MoviePage = ({ movieId }) => {
  const { status, data } = useMovieData(13);
  console.log(data);

  const topPoster = getMovieImageUrl(data.backdrop_path);
  const poster = getMovieImageUrl(data.poster_path);

  return (
    <>
      {status === "loading" && <Loading />}
      {status === "error" && <Error />}
      {status === "success" && (
        <MoviePageWrapper>
          <MovieTop
            poster={topPoster}
            title={data.original_title}
            rate={data.vote_average.toFixed(1)}
            votes={data.vote_count}
          />
          <MovieInfo
            title={data.title}
            // productionYear={productionYear}

            productionPlace={data.production_countries.map(({ name }) => name)}
            releaseDate={data.release_date}
            tags={data.genres}
            rate={data.vote_average.toFixed(1)}
            votes={data.vote_count}
            description={data.overview}
            poster={poster}
          />

          {/* <PeopleList
          picture={personPicture}
          name={personName}
          role={personRole}
          title={"Cast"}
          moviePage
        />
         It might require some adjustance after syncing it with API 
        <PeopleList
          picture={personPicture}
          name={personName}
          role={personRole}
          title={"Crew"}
          moviePage
        /> */}
        </MoviePageWrapper>
      )}
    </>
  );
};

export default MoviePage;
