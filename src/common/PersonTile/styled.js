import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 16px;
  max-width: 208px;
  max-height: 339px;
  padding: 16px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    max-width: 136px;
    max-height: 245px;
    padding: 8px;
    border-radius: 5px;
  }
`;

export const Picture = styled.img`
  max-width: 176px;
  max-height: 231px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    max-width: 120px;
    max-height: 178px;
  }
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
  }
`;
