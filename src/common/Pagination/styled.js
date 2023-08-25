import { styled } from "styled-components";
import { ReactComponent as IconRight } from "../../images/vectorRight.svg";
import { ReactComponent as IconLeft } from "../../images/vectorLeft.svg";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 400px 0 103px 0; // 400px na potrzeby wizualizacji :-)
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    gap: 8px;
    margin: 16.5px 0 31.5px 0;
  }
`;

export const Button = styled.button`
  padding: 8px 16px;
  background-color: ${({ theme }) => theme.colors.pattensBlue};
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: 1s;

  &:hover {
    filter: brightness(103%);
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.mystic};
    &:hover {
      filter: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    padding: 8px 12px;
    gap: 4px;
  }
`;

export const ButtonText = styled.span`
  font-size: 14px;
  line-height: 140%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    display: none;
  }
`;

export const ArrowLeft = styled(IconLeft)`
  color: ${({ theme }) => theme.colors.scienceBlue};

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    width: 5px;
    height: 8px;
  }
`;

export const ArrowRight = styled(IconRight)`
  color: ${({ theme }) => theme.colors.scienceBlue};

  ${Button}:disabled & {
    color: ${({ theme }) => theme.colors.darkerGrey};
  }

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    width: 5px;
    height: 8px;
  }
`;

export const PageCounter = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  gap: 8px;
  color: ${({ theme }) => theme.colors.darkerGrey};
  margin: 0 12px 0 12px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    gap: 2px;
    font-size: 10px;
    margin: 0;
  }
`;

export const PageNumber = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodSmoke};
`;
