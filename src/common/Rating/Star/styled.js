import { css, styled } from "styled-components";
import { ReactComponent as Star } from "../../../images/shape-star.svg";

export const StyledStar = styled(Star)`
  ${({ $type }) =>
    $type !== "poster" &&
    css`
      width: 24px;
      height: 24px;
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
