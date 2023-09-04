import styled from "styled-components";
import { ReactComponent as YellowStar } from "../../images/shape-star.svg";

export const Wrapper = styled.div`
  max-width: 324px;
  padding: 16px;
  gap: 16px;
  justify-content: left;
  box-sizing: unset;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;

  &::before {
    content: "";
    display: block;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 100%;
    height: 201px;
    align-items: center;
    display: flex;
    flex-flow: nowrap;
    padding: 0 16px;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const Poster = styled.div`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.$imageUrl});
  background-position: center center;
  background-size: cover;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionBox = styled.div`
  width: 292px;
  height: 200px;
  position: relative;
  padding-top: inherit;
  padding-bottom: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: auto;
    height: 169px;
    position: unset;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-top: 8px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const GenreBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  padding-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 8px;
    font-size: 10px;
    line-height: 110%;
  }
`;

export const GenreTile = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};
  align-items: center;
  color: ${({ theme }) => theme.colors.woodSmoke};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 4px 8px;
  }
`;

export const RatingBox = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  gap: 12px;
  align-items: center;
  padding-top: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 8px;
    position: unset;
    padding-top: 0px;
    align-items: flex-start;
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

export const Rating = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    font-size: 13px;
    line-height: 130%;
  }
`;
