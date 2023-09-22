import { useMediaQuery } from "react-responsive";
import Star from "./Star";
import { Container, Rate, RatingWrapper, Scale, Votes } from "./styled";

const Rating = ({ rate, votes, type }) => {
  const isMedia = useMediaQuery({ maxWidth: 450 });

  return (
    <Container $type={type}>
      <RatingWrapper $type={type}>
        <Star type={type} />
        <Rate $type={type}>
          {rate ? rate.toFixed(1).replace(".", ",") : rate}
        </Rate>
        {!type && isMedia ? null : <Scale $type={type}>{"/ 10"}</Scale>}
      </RatingWrapper>
      <Votes $type={type}>
        {votes > 0 ? `${votes} votes` : "no votes yet"}
      </Votes>
    </Container>
  );
};

export default Rating;
