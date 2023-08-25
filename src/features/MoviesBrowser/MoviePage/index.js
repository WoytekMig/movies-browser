import {
  Details,
  MovieTop,
  Poster,
  Rate,
  Rating,
  Title,
  Votes,
} from "./styled";
import { ReactComponent as Star } from "../../../images/star.svg";
import { ReactComponent as Scale } from "../../../images/rating.svg";

const MoviePage = () => {
  return (
    <MovieTop>
      <Poster>
        <Details>
          <Title>Mulan long title</Title>
          <Rating>
            <Star />
            <Rate>7,8</Rate>
            <Scale />
          </Rating>
          <Votes>335 votes</Votes>
        </Details>
      </Poster>
    </MovieTop>
  );
};

export default MoviePage;
