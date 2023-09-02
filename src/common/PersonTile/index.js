import { Name, Picture, Role, Wrapper } from "./styled";
import { PersonImageAPI } from "../../codesAPI";
import NoImagePerson from "../../images/noimgperson.svg";

const PersonTile = ({ picture, name, role }) => {
  if (!picture) {
    return (
      <Wrapper>
        <Picture src={NoImagePerson} />
        <Name>{name}</Name>
        <Role>{role}</Role>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Picture src={`${PersonImageAPI}${picture}`} alt={name} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrapper>
  );
};

export default PersonTile;
