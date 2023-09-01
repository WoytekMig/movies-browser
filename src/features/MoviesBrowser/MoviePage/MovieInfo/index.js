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
  date,
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
              <Text>{date}</Text>
            </DataWrapper>
          </AdditionalData>
          <TagsWrapper>
            <Tag>{tags}</Tag>
            <Tag>{tags}</Tag>
            <Tag>{"Adventure"}</Tag>
            {/* add map method later */}
          </TagsWrapper>
          <Rating rate={rate} votes={votes} />
        </DataContainer>
        <MovieDescription>{description}</MovieDescription>
      </Wrapper>
    </Main>
  );
};

export default MovieInfo;
