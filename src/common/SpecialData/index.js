import { useMediaQuery } from "react-responsive";
import { Data, DataWrapper, StyledSpecialData } from "./styled";

const SpecialData = ({
  profile,
  upperContent,
  lowerContent,
  mobileUpperData,
  mobileLowerData,
  desktopUpperData,
  desktopLowerData,
}) => {
  const isMedia = useMediaQuery({ maxWidth: 767 });

  const correctedUpperContent = Array.isArray(upperContent)
    ? upperContent.join(", ")
    : upperContent;

  return (
    <StyledSpecialData>
      <DataWrapper $profile={profile}>
        {isMedia ? mobileUpperData : desktopUpperData}
        <Data>
          {upperContent.length > 0 ? correctedUpperContent : "Unknown"}
        </Data>
      </DataWrapper>
      <DataWrapper $profileSpecial={profile} $profile={profile}>
        {isMedia ? mobileLowerData : desktopLowerData}
        <Data>{lowerContent ? lowerContent : "Unknown"}</Data>
      </DataWrapper>
    </StyledSpecialData>
  );
};

export default SpecialData;
