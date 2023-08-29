import { css, styled } from "styled-components";
import { ReactComponent as Scale } from "../../images/scale.svg";

export const Container = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 4fr;
  align-items: end;
  justify-items: start;
  max-width: 185px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 16px;

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        grid-gap: 10px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        grid-template-columns: auto auto;
        grid-gap: 8px;
      }
    `};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  align-content: center;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      max-width: 126px;
      gap: 8px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 4px;
  }
`;

export const Rate = styled.span`
  font-size: 16px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
  }

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 30px;
      font-weight: 500;

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        font-size: 24px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 14px;
      }
    `}
`;

export const StyledScale = styled(Scale)`
  align-self: end;
  margin-bottom: 6px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 17px;
    height: 12px;
    align-self: center;
    margin: 0;
  }

  ${({ $type }) =>
    $type === "movieInfo" &&
    css`
      width: 24px;
      height: 17px;
      margin: 0px;
      align-self: center;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        width: 0px;
        height: 0px;
      }
    `}
`;

export const Votes = styled.span`
  color: ${({ theme }) => theme.colors.waterloo};
  font-size: 16px;
  width: auto;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      color: inherit;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
    display: inline-block;
    align-self: center;

    ${({ $type }) =>
      $type === "poster" &&
      css`
        margin-bottom: 1px;
        width: 150px;
        align-self: end;
      `}
  }
`;
