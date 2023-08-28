import { Votes } from "../MovieTile/styled";
import { RatingBox, StarImage } from "./styled";

const Rating = ({ rating, votes }) => (
  <RatingBox>
    <StarImage></StarImage>
    <Rating>{rating}</Rating>
    <Votes>{votes}</Votes>
  </RatingBox>
);

export default Rating;
