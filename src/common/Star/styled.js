import { css, styled } from "styled-components";
import { ReactComponent as Star } from "../../images/star.svg";

export const StyledStar = styled(Star)`
  width: 24px;
  height: 23px;

  ${({ $poster }) =>
    $poster &&
    css`
      width: 40px;
      height: 38px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 20px;
    height: 19px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 16px;
    height: 16px;
  }
`;
