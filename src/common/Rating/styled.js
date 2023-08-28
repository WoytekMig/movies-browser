import { styled } from "styled-components";
import { ReactComponent as YellowStar } from "../../../images/star.svg";

export const RatingBox = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  gap: 12px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 8px;
    position: inherit;
  }
`;

export const StarImage = styled(YellowStar)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;
