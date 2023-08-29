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
import { useEffect, useState } from "react";

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Main>
      <Wrapper>
        <Image src={poster} />
        <DataContainer>
          <Title>{title}</Title>
          <Year>{productionYear}</Year>
          <AdditionalData>
            <div>
              {screenWidth < 768 ? "" : "Production: "}
              <Text>{productionPlace}</Text>
            </div>
            <div>
              {screenWidth < 768 ? "" : "Release date: "}
              <Text>{date}</Text>
            </div>
          </AdditionalData>
          <TagsWrapper>
            <Tag>{tags}</Tag>
            <Tag>{tags}</Tag>
            <Tag>{"Adventure"}</Tag>
            {/* add map method later */}
          </TagsWrapper>
          <Rating rate={rate} votes={votes} type="info" />
        </DataContainer>
        <MovieDescription>{description}</MovieDescription>
      </Wrapper>
    </Main>
  );
};

export default MovieInfo;
