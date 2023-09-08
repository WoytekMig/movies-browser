import styled from "styled-components";
import { ReactComponent as YellowStar } from "../../images/shape-star.svg";

export const Wrapper = styled.div`
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-rows: auto 100%;
    justify-content: unset;
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const Poster = styled.div`
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
    grid-column: span 1;
    grid-row: span 2;
  }
`;

export const PosterIMG = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: inherit;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-column: span 1;
    grid-row: span 1;
    padding-top: 0px;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  line-height: 130%;
  color: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-top: 8px;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
    line-height: 142%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 14px;
    line-height: 136%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
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
  margin-bottom: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 9px;
    font-size: 14px;
    line-height: 130%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 9px;
    font-size: 11px;
    line-height: 120%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 7px 13px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 5px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 4px 8px;
  }
`;

export const RatingBox = styled.div`
  margin-top: auto;
  display: flex;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    grid-column: span 1;
    grid-row: span 1;
    margin-top: 0px;
  }
`;

export const StarImage = styled(YellowStar)`
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 21px;
    height: 21px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 18px;
    height: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 16px;
    height: 16px;
  }
`;

export const Rating = styled.div`
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
    line-height: 142%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 14px;
    line-height: 136%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 15px;
    line-height: 142%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 14px;
    line-height: 136%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;
