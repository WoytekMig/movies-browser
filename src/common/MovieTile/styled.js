import styled from "styled-components";
import { ReactComponent as YellowStar } from "../../images/shape-star.svg";

export const Wrapper = styled.div`
  /* max-width: 324px; */
  padding: 16px;
  /*   gap: 16px; */
  /* justify-content: left; */
  /*   box-sizing: unset; */
  /*   display: grid; */
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  transition: transform 0.3s ease;
  transform-origin: center;
  border: none;
  border-radius: 5px;
  /*  align-self: stretch; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    grid-template-columns: 130px auto;
    grid-template-rows: auto 100%;
    /* justify-content: baseline; */
    /*   grid-gap: 16px; */
  }

  &:hover {
    transform: scale(105%);
  }
`;

export const Poster = styled.div`
  /* width: 292px; */
  /*   width: 100%; */
  /* height: auto; */
  /*  height: auto; */
  border-radius: 5px;
  background-repeat: no-repeat;
  /*  background-image: url(${(props) => props.$imageUrl}); */
  background-position: center center;

  /* background-size: contain; */
  /* flex-shrink: 0; */
  /* margin: 16px; */

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    /*    width: 376px;
    height: 557.4px; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    /*     width: 114px;
    height: 169px; */
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
    grid-column: span 1;
    grid-row: span 2;
    /*  border-radius: 5px; */
  }
`;

export const PosterIMG = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
`;

export const DescriptionBox = styled.div`
  /* width: 292px; */
  /*   height: 200px; */
  /* height: 100%; */
  /*  position: relative; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  padding-top: inherit;
  /* padding-bottom: inherit; */
  /*   flex-shrink: 1; */

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: auto;
    /*     height: 169px; */
    /*   position: unset; */
    padding-top: 0px;
    padding-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    /*  padding-top: 16px; */
    /*  display: grid;
    grid-template-columns: 1; */
    grid-column: span 1;
    grid-row: span 1;
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
  /* display: block; */
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
  margin-bottom: 10px;

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
  /*  position: absolute; */
  margin-top: auto;
  /* align-self: end; */
  /* bottom: 0px; */
  display: flex;
  gap: 12px;
  /* align-items: center; */

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    /* position: unset; */
    /*  padding-top: 0px; */
    /* align-items: flex-start; */
    /*  margin-top: inherit; */
    /*  margin: auto; */
    /*  align-self: flex-start; */
    grid-column: span 1;
    grid-row: span 1;
    margin-top: 0px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;

export const Votes = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 13px;
    line-height: 130%;
  }
`;
