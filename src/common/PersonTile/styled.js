import { css, styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 3fr minmax(43px, 64px);
  justify-items: center;
  height: 100%;
  max-height: 420px;
  padding: 16px;
  gap: 8px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  ${({ $moviePage }) =>
    $moviePage &&
    css`
      grid-template-rows: 3fr minmax(64px, 100px);
    `}

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
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 1.9vh;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.8vh;
  }
`;

export const Role = styled.span`
  font-size: 1.6vh;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5vh;
  }
`;
