import SpecialData from "../../../common/SpecialData";
import { StyledAbout, DataWrapper, Description, Image, Name } from "./styled";
import { IMG_URL } from "../../../common/ApiUrls";
import nullPersonImage from "../../../images/alternativeNoPersonImage.svg";

const About = ({ name, birthdate, birthplace, description, picturePath }) => (
  <StyledAbout>
    <Image src={picturePath ? `${IMG_URL}${picturePath}` : nullPersonImage} />
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
