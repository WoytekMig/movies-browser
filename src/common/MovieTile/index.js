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
  Votes,
} from "./styled";
import { genres } from "../genreIds";
import Star from "../Rating/Star";

const MovieTile = ({ posterPath, title, year, tag, rating, votes }) => {
  const basePostersPath = "https://image.tmdb.org/t/p/w500";
  const poster1Path = posterPath;
  const fullUrl = basePostersPath + poster1Path;

  return (
    <Wrapper>
      <Poster imageurl={fullUrl} />
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
          <Star />
          <Rating>{rating}</Rating>
          <Votes>{votes}</Votes>
        </RatingBox>
      </DescriptionBox>
    </Wrapper>
  );
};

export default MovieTile;
