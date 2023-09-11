import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
    padding: 4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Picture = styled.img`
  border-radius: 5px;
  width: 100%;
  flex-grow: 0;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    max-height: 285px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    max-height: 230px;
  }
`;

export const Container = styled.div`
  margin-top: 4px;
  flex-grow: 1;
  display: grid;
  row-gap: 8px;
  min-height: 43px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 1.9vh;

  @media (min-width: 1921px) and (min-height: 1081px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    margin: 0;
    font-size: 1.5vh;
  }
`;

export const Role = styled.span`
  font-size: 1.6vh;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (min-width: 1921px) and (min-height: 1081px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 1.3vh;
  }
`;
