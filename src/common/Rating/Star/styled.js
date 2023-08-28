import { css, styled } from "styled-components";
import { ReactComponent as Star } from "../../../images/star.svg";

export const StyledStar = styled(Star)`
  width: 24px;
  height: 24px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      width: 40px;
      height: 40px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 20px;
    height: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 16px;
    height: 16px;
  }
`;
