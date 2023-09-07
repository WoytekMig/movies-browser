import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;

  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 12px;
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Picture = styled.img`
  border-radius: 5px;
  flex-grow: 1;
  flex-shrink: 1;
  max-width: 100%;
`;

export const Container = styled.div`
  display: grid;
  place-items: center;
  min-height: 64px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: calc(22px - 0.5vh);
  margin-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    margin: 0;
    font-size: calc(22px - 0.9vh);
  }
`;

export const Role = styled.span`
  font-size: 1.9vh;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.7vh;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 1.5vh;
  }
`;
