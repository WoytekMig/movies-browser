import Rating from "../../../../common/Rating";
import { Details, Poster, Title, Wrapper } from "./styled";

const MovieTop = () => (
  <Wrapper>
    <Poster>
      <Details>
        <Title>Mulan long title</Title>
        <Rating rate={"7,5"} votes={"445"} type="poster" />
      </Details>
    </Poster>
  </Wrapper>
);

export default MovieTop;
