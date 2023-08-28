import styled from "styled-components";

export const StyledMainHeader = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-top: 60px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 24px;
    margin-top: 24px;
  }
`;
