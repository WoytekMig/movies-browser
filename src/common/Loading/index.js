import MainHeader from "../MainHeader";
import { StyledImg, Wrapper } from "./styled";

const Loading = () => {
  return (
    <>
      <MainHeader title={"Search result for"} />
      <Wrapper>
        <StyledImg />
      </Wrapper>
    </>
  );
};

export default Loading;
