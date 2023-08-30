import { css, styled } from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-template-columns: 1fr 4fr;
  align-items: end;
  justify-items: start;
  max-width: 185px;

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 8px;
  }

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
      }
    `};
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      max-width: 126px;
      align-items: end;
    `}
`;

export const Rate = styled.span`
  font-size: 22px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-weight: 600px;
    font-size: 13px;
  }

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 30px;

      @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
        font-size: 19px;
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 14px;
        font-weight: 500;
      }
    `}
`;

export const Scale = styled.span`
  font-size: 14px;
  display: inline-block;
  width: 24px;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 12px;
  }

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 16px;
      width: 28px;

      @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        font-size: 10px;
      }
    `}
`;

export const Votes = styled.span`
  font-size: 14px;

  ${({ $type }) =>
    $type === "poster" &&
    css`
      font-size: 16px;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 10px;
    align-self: center;
    color: ${({ theme }) => theme.colors.waterloo};

    ${({ $type }) =>
      $type === "poster" &&
      css`
        margin-bottom: 1px;
        width: 150px;
        align-self: end;
        color: inherit;
      `}
  }
`;
