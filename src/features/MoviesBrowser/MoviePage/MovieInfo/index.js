import {
  AdditionalData,
  DataContainer,
  Image,
  MovieDescription,
  Tag,
  TagsWrapper,
  Title,
  Wrapper,
  Year,
} from "./styled";
import poster from "../../../../images/poster.png";
import Rating from "../../../../common/Rating";
import { Main } from "../../../../common/Main";

const MovieInfo = ({
  title,
  year,
  production,
  date,
  tag,
  rate,
  votes,
  description,
}) => (
  <Main>
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
        <Rating rate="7,8" votes="335" type="info" />
        <MovieDescription>
          A young Chinese maiden disguises herself as a male warrior in order to
          save her father. Disguises herself as a male warrior in order to save
          her father. A young Chinese maiden disguises herself as a male warrior
          in order to save her father.
        </MovieDescription>
      </DataContainer>
    </Wrapper>
  </Main>
);

export default MovieInfo;
