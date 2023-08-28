import styled from "styled-components";

export const Main = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    margin: 16px auto;
  }
`;
