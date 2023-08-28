import Rating from "../Rating";
import {
  Wrapper,
  Poster,
  Title,
  Year,
  GenreBox,
  GenreTile,
  DescriptionBox,
  RatingBox,
} from "./styled";

const MovieTile = ({ title, year, tag, rate, votes }) => (
  <Wrapper>
    <Poster />
    <DescriptionBox>
      <Title> {title}</Title>
      <Year>{year}</Year>
      <GenreBox>
        <GenreTile>{tag}</GenreTile>
      </GenreBox>
    </DescriptionBox>
    <RatingBox>
      <Rating rate={rate} votes={votes} type="tile" />
    </RatingBox>
  </Wrapper>
);

export default MovieTile;
