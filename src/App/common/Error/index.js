import {
  StyledHeader,
  StyledImg,
  Wrapper,
  StyledText,
  StyledButton,
} from "./styled";

const Error = () => (
  <Wrapper>
    <StyledImg />
    <StyledHeader>Ooops! Something went wrong... </StyledHeader>
    <StyledText>Please check your network connection and try again</StyledText>
    <StyledButton to={"/"}>Back to home page</StyledButton>
  </Wrapper>
);

export default Error;
