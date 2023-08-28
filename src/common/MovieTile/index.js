import Rating from "../Rating";
import {
  Wrapper,
  Poster,
  Title,
  Year,
  GenreBox,
  GenreTile,
  DescriptionBox,
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
      <Rating rate={rate} votes={votes} />
    </DescriptionBox>
  </Wrapper>
);

export default MovieTile;
