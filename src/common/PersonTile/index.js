import { Name, Picture, Role, Wrapper } from "./styled";

const PersonTile = ({ picture, name, role }) => (
  <Wrapper>
    <Picture>{picture}</Picture>
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Wrapper>
);

export default PersonTile;
