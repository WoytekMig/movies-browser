import { styled } from "styled-components";

export const StyledSpecialData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 12px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const Data = styled.span`
  color: ${({ theme }) => theme.colors.black};
`;
