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
            <div>
              {isMedia ? "" : "Production: "}
              <Text>{productionPlace}</Text>
            </div>
            <div>
              {isMedia ? "" : "Release date: "}
              <Text>{date}</Text>
            </div>
          </AdditionalData>
          <TagsWrapper>
            <Tag>{tags}</Tag>
            <Tag>{tags}</Tag>
            <Tag>{"Adventure"}</Tag>
            {/* add map method later */}
          </TagsWrapper>
          <Rating rate={rate} votes={votes} type="movieInfo" />
        </DataContainer>
        <MovieDescription>{description}</MovieDescription>
      </Wrapper>
    </Main>
  );
};

export default MovieInfo;
