import { styled } from "styled-components";

export const ProfileWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
  margin: 56px 0 220px 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-gap: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 16px;
    margin: 23px 0 220px 0;
  }
`;
