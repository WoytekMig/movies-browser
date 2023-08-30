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

  return (
    <StyledSpecialData>
      <DataWrapper $profile={profile}>
        {isMedia ? mobileUpperData : desktopUpperData}
        <Data>{upperContent}</Data>
      </DataWrapper>
      <DataWrapper $profileSpecial={profile} $profile={profile}>
        {isMedia ? mobileLowerData : desktopLowerData}
        <Data>{lowerContent}</Data>
      </DataWrapper>
    </StyledSpecialData>
  );
};

export default SpecialData;
