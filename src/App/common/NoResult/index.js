import { StyledImg, Wrapper } from "./styled";
import { Main } from "../Main";
import { StyledMainHeader } from "../MainHeader/styled";

const NoResult = ({ query }) => (
  <Main>
    <StyledMainHeader title={`Sorry, there are no results for "${query}"`} />
    <Wrapper>
      <StyledImg />
    </Wrapper>
  </Main>
);

export default NoResult;
