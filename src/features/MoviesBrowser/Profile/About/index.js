import SpecialData from "../../../../common/SpecialData";
import { StyledAbout, DataWrapper, Description, Image, Name } from "./styled";

const About = ({ name, birthdate, birthplace, description, picture }) => (
  <StyledAbout>
    <Image src={picture} />
    <Name>{name}</Name>
    <DataWrapper>
      <SpecialData
        profile
        upperContent={birthdate}
        lowerContent={birthplace}
        mobileUpperData={"Birth:"}
        mobileLowerData={"Place of birth:"}
        desktopUpperData={"Date of birth:"}
        desktopLowerData={"Place of birth:"}
      />
    </DataWrapper>
    <Description>{description}</Description>
  </StyledAbout>
);

export default About;
