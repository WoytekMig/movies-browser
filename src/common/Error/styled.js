import { styled } from "styled-components";
import { ReacComponent as ErrorIcon } from "../../images";
import { Link } from "react-router-dom"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 195px 0 0 0;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    margin: 100px 0 0px 0;
  }
`;
export const StyledImg = styled(ErrorIcon)`
  display: grid;
  justify-self: center;
  margin: 0px 0 38px 0;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    margin: 0px 0 25px 0;
  }
`;

export const StyledHeader = styled.h3`
  font-weight: 600;
  font-size: 36px;
  line-height: 120%;
  font-style: normal;
  margin: 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 20px;
  }
`;

export const StyledText = styled.p`
  display: flex;
  justify-self: center;
  text-align: center;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 24px 0 24px 0;
  max-width: 426px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 17px;
    max-width: 350px;
  }
`;

export const StyledButton = styled(Link)`
  display: grid;
  justify-self: center;
  gap: 10px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  padding: 16px 24px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.scienceBlue};
`;
