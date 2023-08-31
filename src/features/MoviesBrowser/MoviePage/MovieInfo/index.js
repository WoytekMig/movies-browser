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
  DataWrapper,
} from "./styled";

import Rating from "../../../../common/Rating";
import { Main } from "../../../../common/Main";
import { useMediaQuery } from "react-responsive";

const MovieInfo = ({
  title,
  productionYear,
  productionPlace,
  poster,
  releaseDate,
  tags,
  rate,
  votes,
  description,
}) => {
  const isMedia = useMediaQuery({ maxWidth: 767 });

  return (
    <Main>
      <Wrapper>
        <Image src={poster} />
        <DataContainer>
          <Title>{title}</Title>
          <Year>{productionYear}</Year>
          <AdditionalData>
            <DataWrapper>
              {isMedia ? "" : "Production: "}
              <Text>{productionPlace}</Text>
            </DataWrapper>
            <DataWrapper>
              {isMedia ? "" : "Release date: "}
              <Text>{releaseDate}</Text>
            </DataWrapper>
          </AdditionalData>
          <TagsWrapper>
            {tags.map(({ id, name }) => (
              <Tag key={id}>{name}</Tag>
            ))}
          </TagsWrapper>
          <Rating rate={rate} votes={votes} />
        </DataContainer>
        <MovieDescription>{description}</MovieDescription>
      </Wrapper>
    </Main>
  );
};

export default MovieInfo;
