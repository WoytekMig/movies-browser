import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr 1fr;
  justify-items: center;
  height: 100%;
  max-height: 420px;
  padding: 16px;
  gap: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 8px;
    border-radius: 5px;
    max-height: 330px;
  }
`;

export const Picture = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 100%;
  max-height: 264px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    max-height: 200px;
  }
`;

export const Container = styled.div`
  margin-top: 4px;
  display: grid;
  row-gap: 8px;
  height: auto;
  /* 
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    min-height: 52px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    min-height: 43px;
  } */

  /* ${({ $moviePage }) =>
    $moviePage &&
    css`
      min-height: 90px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        min-height: 75px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        min-height: 60px;
      }
    `} */
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 1.9vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    margin: 0;
    font-size: 1.7vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin: 0;
    font-size: 1.5vh;
  }
`;

export const Role = styled.span`
  font-size: 1.6vh;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 1.4vh;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin: 0;
    font-size: 1.3vh;
  }
`;
