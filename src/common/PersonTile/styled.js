import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 8px;
  text-align: center;
  transition: transform 0.3s ease;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  &:hover {
    transform: scale(108%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    border-radius: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mediumMobile}) {
    padding: 4vw;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tinyMobile}) {
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
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hugeMobile}) {
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tinyMobile}) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.hugeMobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
  }
`;
