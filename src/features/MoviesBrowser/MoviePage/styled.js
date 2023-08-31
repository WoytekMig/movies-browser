import { styled } from "styled-components";

export const MoviePageWrapper = styled.div`
  display: grid;
  grid-gap: 64px;
  margin-bottom: 336px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 48px;
    margin-bottom: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-gap: 32px;
    margin-bottom: 150px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 16px;
    margin-bottom: 88px;
  }
`;
