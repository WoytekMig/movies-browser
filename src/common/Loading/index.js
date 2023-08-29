import MainHeader from "../MainHeader";
import { StyledImg, Wrapper } from "./styled";

const Loading = ({ title }) => {
  return (
    <>
      <MainHeader title={title} />
      <Wrapper>
        <StyledImg />
      </Wrapper>
    </>
  );
};

export default Loading;
