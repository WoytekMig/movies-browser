import {
  AdditionalData,
  Text,
  DataContainer,
  Image,
  MovieDescription,
  Tag,
  TagsWrapper,
  Title,
  Wrapper,
  Year,
} from "./styled";

import Rating from "../../../../common/Rating";
import { Main } from "../../../../common/Main";

const MovieInfo = ({
  title,
  productionYear,
  productionPlace,
  poster,
  date,
  tags,
  rate,
  votes,
  description,
}) => (
  <Main>
    <Wrapper>
      <Image src={poster} />
      <DataContainer>
        <Title>{title}</Title>
        <Year>{productionYear}</Year>
        <AdditionalData>
          Production: <Text>{productionPlace}</Text>
        </AdditionalData>
        <AdditionalData>
          Release date: <Text>{date}</Text>
        </AdditionalData>
        <TagsWrapper>
          <Tag>{tags}</Tag>
          {/* add map method later */}
        </TagsWrapper>
        <Rating rate={rate} votes={votes} type="info" />
      </DataContainer>
      <MovieDescription>{description}</MovieDescription>
    </Wrapper>
  </Main>
);

export default MovieInfo;
