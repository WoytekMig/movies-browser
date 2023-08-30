import {
  Wrapper,
  Poster,
  Title,
  Year,
  GenreBox,
  GenreTile,
  RatingBox,
  Rating,
  StarImage,
  Votes,
  DescriptionBox,
} from "./styled";
import { genres } from "../genreIds";

const MovieTile = ({ posterPath, title, year, tag, rating, votes }) => {
  const basePostersPath = "https://image.tmdb.org/t/p/w500";
  const fullUrl = posterPath
    ? basePostersPath + posterPath
    : "../images/logo.svg";

  return (
    <Wrapper>
      <Poster $imageUrl={fullUrl} />
      <DescriptionBox>
        <Title> {title}</Title>
        <Year>{year}</Year>
        <GenreBox>
          {tag.map((element) => {
            const matchingGenre = genres.find(
              (genreElement) => element === genreElement.id
            );
            if (matchingGenre) {
              return (
                <GenreTile key={matchingGenre.id}>
                  {matchingGenre.name}
                </GenreTile>
              );
            }
            return null;
          })}
        </GenreBox>
        <RatingBox>
          <StarImage></StarImage>
          <Rating>{rating}</Rating>
          <Votes>{votes} votes</Votes>
        </RatingBox>
      </DescriptionBox>
    </Wrapper>
  );
};

export default MovieTile;
