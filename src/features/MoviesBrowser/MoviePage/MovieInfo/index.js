import {
  AdditionalData,
  DataContainer,
  Image,
  MovieDescription,
  Rating,
  RatingWrapper,
  Tag,
  TagsWrapper,
  Title,
  Votes,
  Wrapper,
  Year,
} from "./styled";
import poster from "../../../../images/poster.png";
import Star from "../../../../common/Star";

const MovieInfo = () => (
  <Wrapper>
    <Image src={poster} />
    <DataContainer>
      <Title>Mulan</Title>
      <Year>2020</Year>
      <AdditionalData>Production: </AdditionalData>
      <AdditionalData>Release date: </AdditionalData>
      <TagsWrapper>
        <Tag>Action</Tag>
        <Tag>Adventure</Tag>
        <Tag>Drama</Tag>
      </TagsWrapper>
      <RatingWrapper>
        <Star />
        <Rating>8/10</Rating>
        <Votes>335 votes</Votes>
      </RatingWrapper>
      <MovieDescription>
        A young Chinese maiden disguises herself as a male warrior in order to
        save her father.
      </MovieDescription>
    </DataContainer>
  </Wrapper>
);

export default MovieInfo;
