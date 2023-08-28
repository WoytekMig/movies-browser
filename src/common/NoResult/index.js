import { StyledImg, Wrapper } from "./styled";
import { StyledContainer } from "../Container/styled";
import { StyledMainHeader } from "../MainHeader/styled";
export const NoResult = ({ query }) => (
  <StyledContainer>
    <StyledMainHeader title={`Sorry, there are no results for "${query}"`} />
    <Wrapper>
      <StyledImg />
    </Wrapper>
  </StyledContainer>
);
