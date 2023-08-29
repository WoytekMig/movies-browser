import { Name, Picture, Role, Wrapper } from "./styled";
import { PersonImageAPI } from "../../codesAPI";

const PersonTile = ({ picture, name, role }) => (
  <Wrapper>
    <Picture src={`${PersonImageAPI}${picture}`} />
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Wrapper>
);

export default PersonTile;
