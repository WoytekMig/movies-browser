import { css, styled } from "styled-components";

export const MovieDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  margin-bottom: 336px;

  ${({ $noPoster }) =>
    $noPoster &&
    css`
      margin-top: 56px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        margin-top: 23px;
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 48px;
    margin-bottom: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 32px;
    margin-bottom: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 16px;
    margin-bottom: 88px;
  }
`;
