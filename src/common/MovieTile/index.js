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
    Votes
} from "./styled";

const MovieTile = () => (

    <Wrapper>
        <Poster />
        <Title> Mulan </Title>
        <Year>2020</Year>
        <GenreBox>
            <GenreTile>Action</GenreTile>
            <GenreTile>Drama</GenreTile>
        </GenreBox>
        <RatingBox>
            <StarImage></StarImage>
            <Rating>7,8</Rating>
            <Votes>35 votes</Votes>
        </RatingBox>
    </Wrapper>
);

export default MovieTile;