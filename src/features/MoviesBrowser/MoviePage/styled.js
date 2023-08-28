import { styled } from "styled-components";

export const MoviePageWrapper = styled.div`
  display: grid;
  grid-gap: 64px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 16px;
  }
`;
