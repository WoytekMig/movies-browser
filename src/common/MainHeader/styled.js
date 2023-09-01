import styled, { css } from "styled-components";

export const StyledMainHeader = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-top: 60px;

  ${({ $moviePage }) =>
    $moviePage &&
    css`
      margin: 0 0 32px 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 24px;
    margin-top: 24px;

    ${({ $moviePage }) =>
      $moviePage &&
      css`
        margin: 0;
        margin: 0 0 12px 0;
      `}
  }
`;
