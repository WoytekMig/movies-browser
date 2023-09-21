import {
  DataContainer,
  Image,
  MovieDescription,
  Tag,
  TagsWrapper,
  Title,
  Wrapper,
  Year,
} from "./styled";

import Rating from "../../../common/Rating";
import { Main } from "../../../common/Main";
import SpecialData from "../../../common/SpecialData";

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
  return (
    <Main>
      <Wrapper>
        <Image src={poster} />
        <DataContainer>
          <Title>{title}</Title>
          <Year>{productionYear}</Year>
          <SpecialData
            upperContent={productionPlace}
            lowerContent={releaseDate}
            mobileUpperData={""}
            mobileLowerData={""}
            desktopUpperData={"Production:"}
            desktopLowerData={"Release date:"}
          />
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
