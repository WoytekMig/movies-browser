import { Container, Name, Picture, Role, Wrapper } from "./styled";
import { PersonImageAPI } from "../../common/ApiUrls";
import nullPersonImage from "../../images/alternativeNoPersonImage.svg";

const PersonTile = ({ picture, name, role, moviePage }) => (
  <Wrapper $moviePage={moviePage}>
    <Picture src={picture ? `${PersonImageAPI}${picture}` : nullPersonImage} />
    <Container>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Container>
  </Wrapper>
);

export default PersonTile;
