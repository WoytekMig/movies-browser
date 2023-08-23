import styled from "styled-components";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-basis: 520px;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 14px;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.woodSmoke};
  height: 94px;
  padding: 0px 24px;
  gap: 150px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 142px;
    display: grid;
    gap: 0px;
  }
`;
export const StyledLogo = styled(Logo)`
  width: 220px;
  height: auto;
  border-top: 23px;
  border-left: 293px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 150px;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 50px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  max-width: 1218px;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;
  line-height: 21px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.woodSmoke};
  text-transform: uppercase;
  text-decoration: none;
  

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 8px 12px;
  }

  &:hover {
    filter: brightness(90%);
  }

  &.active {
    outline: 1px solid ${({ theme }) => theme.colors.white};
    border-radius: 24px;
  }
`;
