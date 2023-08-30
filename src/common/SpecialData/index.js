import { useMediaQuery } from "react-responsive";
import { Data, DataWrapper, StyledSpecialData } from "./styled";

const SpecialData = ({
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
      <DataWrapper>
        {isMedia ? mobileUpperData : desktopUpperData}
        <Data>{upperContent}</Data>
      </DataWrapper>
      <DataWrapper>
        {isMedia ? mobileLowerData : desktopLowerData}
        <Data>{lowerContent}</Data>
      </DataWrapper>
    </StyledSpecialData>
  );
};

export default SpecialData;
