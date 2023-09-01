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

import Rating from "../../../../common/Rating";
import { Main } from "../../../../common/Main";
import SpecialData from "../../../../common/SpecialData";

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
  return (
    <Main>
      <Wrapper>
        <Image src={poster} />
        <DataContainer>
          <Title>{title}</Title>
          <Year>{productionYear}</Year>
          <SpecialData
            upperContent={productionPlace}
            lowerContent={date}
            mobileUpperData={""}
            mobileLowerData={""}
            desktopUpperData={"Production: "}
            desktopLowerData={"Release date: "}
          />
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
