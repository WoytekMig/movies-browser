import Star from "./Star";
import { Container, Rate, RatingWrapper, StyledScale, Votes } from "./styled";

const Rating = ({ rate, votes, type }) => {
  return (
    <Container $type={type}>
      <RatingWrapper>
        <Star type={type} />
        <Rate $type={type}>{rate}</Rate>
        {<StyledScale $type={type} />}
      </RatingWrapper>
      <Votes $type={type}>{votes} votes</Votes>
    </Container>
  );
};

export default Rating;
