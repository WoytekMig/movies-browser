import PeopleList from "../../../common/PeopleList";
import MovieInfo from "./MovieInfo";
import MovieTop from "./MovieTop";
import { MoviePageWrapper } from "./styled";

const MoviePage = ({
  poster,
  posterBig,
  title,
  longTitle,
  productionYear,
  productionPlace,
  date,
  tags,
  rate,
  votes,
  description,
  personPicture,
  personName,
  personRole,
}) => {
  return (
    <>
      <MoviePageWrapper>
        <MovieTop poster={posterBig} />
        <MovieInfo
          title={longTitle ?? title}
          year={productionYear}
          production={productionPlace}
          date={date}
          tags={tags}
          rate={rate}
          votes={votes}
          description={description}
          poster={poster}
        />
      </MoviePageWrapper>
      <PeopleList
        picture={personPicture}
        name={personName}
        role={personRole}
        title={"Cast"}
      />
      <PeopleList title={"Crew"} />
    </>
  );
};

export default MoviePage;
