import { Name, Picture, Role, Wrapper } from "./styled";
import { PersonImageAPI } from "../../codesAPI";
import nullPersonImage from "../../images/nullPersonImage.svg";

const PersonTile = ({ picture, name, role }) => (
  <Wrapper>
    <Picture src={picture ? `${PersonImageAPI}${picture}` : nullPersonImage} />
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Wrapper>
);

export default PersonTile;
