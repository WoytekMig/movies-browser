import { Name, Picture, Role, Wrapper } from "./styled";

const PersonTile = ({ picture, name, role }) => (
  <Wrapper>
    <Picture src={picture} />
    <Name>{name}</Name>
    <Role>{role}</Role>
  </Wrapper>
);

export default PersonTile;
