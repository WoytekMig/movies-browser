import { useSelector } from "react-redux";
import { Data, DataWrapper, StyledSpecialData } from "./styled";
import { selectIsMedia } from "../../../store";

const SpecialData = ({
  profile,
  upperContent,
  lowerContent,
  mobileUpperData,
  mobileLowerData,
  desktopUpperData,
  desktopLowerData,
}) => {
  const isMobile = useSelector(selectIsMedia);

  const correctedUpperContent = Array.isArray(upperContent)
    ? upperContent.join(", ")
    : upperContent;

  return (
    <StyledSpecialData>
      <DataWrapper $profile={profile}>
        {isMobile ? mobileUpperData : desktopUpperData}
        <Data>
          {upperContent.length > 0 ? correctedUpperContent : "Unknown"}
        </Data>
      </DataWrapper>
      <DataWrapper $profileSpecial={profile} $profile={profile}>
        {isMobile ? mobileLowerData : desktopLowerData}
        <Data>{lowerContent ? lowerContent : "Unknown"}</Data>
      </DataWrapper>
    </StyledSpecialData>
  );
};

export default SpecialData;
