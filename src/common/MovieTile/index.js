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

const MovieTile = ({ title, year, tag, rating, votes }) => (

    <Wrapper>
        <Poster />
        <DescriptionBox>
            <Title> {title}</Title>
            <Year>{year}</Year>
            <GenreBox>
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

export default MovieTile;