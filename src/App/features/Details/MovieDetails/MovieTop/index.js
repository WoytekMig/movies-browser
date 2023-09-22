import Rating from "../../../../common/Rating";
import { Details, Poster, Title, Wrapper } from "./styled";

const MovieTop = ({ title, poster, rate, votes }) => (
  <Wrapper>
    <Poster $poster={poster}>
      <Details>
        <Title>{title}</Title>
        <Rating rate={rate} votes={votes} type="poster" />
      </Details>
    </Poster>
  </Wrapper>
);

export default MovieTop;
