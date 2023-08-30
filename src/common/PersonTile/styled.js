import { styled } from "styled-components";

export const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 208px;
  height: 339px;
  display: flex;
  flex-direction: column;
  place-items: center;
  grid-gap: 8px;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Picture = styled.img`
  flex-grow: 1;
  max-width: 100%;
  max-height: 231px;
  border-radius: 5px;
  flex-shrink: 1;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 22px;
  margin-top: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 14px;
    margin: 0;
  }
`;

export const Role = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
  }
`;
