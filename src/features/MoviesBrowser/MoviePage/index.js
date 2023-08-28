import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { MoviePageWrapper } from "./styled";

const MoviePage = () => {
  return (
    <>
      <MoviePageWrapper>
        <MovieTop />
        <MovieInfo />
      </MoviePageWrapper>
      <PeopleList title={"Cast"} />
      <PeopleList title={"Crew"} />
    </>
  );
};

export default MoviePage;
