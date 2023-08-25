import Star from "../../../../common/Star";
import {
  Details,
  Poster,
  Rate,
  Rating,
  StyledScale,
  Title,
  Votes,
  Wrapper,
} from "./styled";

const MovieTop = () => (
  <Wrapper>
    <Poster>
      <Details>
        <Title>Mulan long title</Title>
        <Rating>
          <Star poster />
          <Rate>7,8</Rate>
          <StyledScale />
        </Rating>
        <Votes>335 votes</Votes>
      </Details>
    </Poster>
  </Wrapper>
);

export default MovieTop;
