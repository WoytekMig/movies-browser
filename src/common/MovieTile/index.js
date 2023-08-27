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
    DescriptionBox
} from "./styled";

const MovieTile = ({ posterPath, title, year, tag, rating, votes }) => {

    const basePostersPath = "https://image.tmdb.org/t/p/w500";
    const poster1Path = posterPath;
    const fullUrl = basePostersPath + poster1Path;

    return (
        <Wrapper>
            <Poster imageUrl={fullUrl} />
            <DescriptionBox>
                <Title> {title}</Title>
                <Year>{year}</Year>
                <GenreBox >
                    <GenreTile>{tag}</GenreTile>
                </GenreBox>
                <RatingBox>
                    <StarImage></StarImage>
                    <Rating>{rating}</Rating>
                    <Votes>{votes}</Votes>
                </RatingBox>
            </DescriptionBox>
        </Wrapper>
    )
};

export default MovieTile;