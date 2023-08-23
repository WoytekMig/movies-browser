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

const MovieTile = () => (

    <Wrapper>
        <Poster />
        <DescriptionBox>
            <Title> Mulan </Title>
            <Year>2020</Year>
            <GenreBox>
                <GenreTile>Action</GenreTile>
                <GenreTile>Drama</GenreTile>
                <GenreTile>Poema</GenreTile>
            </GenreBox>
            <RatingBox>
                <StarImage></StarImage>
                <Rating>7,8</Rating>
                <Votes>35 votes</Votes>
            </RatingBox>
        </DescriptionBox>
    </Wrapper>
)

export default MovieTile;