import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  align-items: start;
  max-width: 324px;
  height: 650px;
  padding: 16px;
  gap: 16px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    max-width: 100%;
    height: 201px;
    align-items: center;
    display: flex;
    flex-flow: nowrap;
  }
`;

export const Poster = styled.div`
  width: 292px;
  height: 434px;
  border-radius: 5px;
  background-color: green; // it's temporary - here will be poster from API //

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    width: 114px;
    height: 169px;
  }
`;

export const DescriptionBox = styled.div`
  display: grid;
  grid-gap: 8px;
  align-content: space-around;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    width: auto;
  }
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 500;
  ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    font-size: 13px;
  }
`;

export const GenreBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  font-size: 14px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    gap: 8px;
    font-size: 10px;
  }
`;

export const GenreTile = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};
  align-items: center;
  color: ${({ theme }) => theme.colors.woodSmoke};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    padding: 4px 8px;
  }
`;

export const RatingBox = styled.div`
  justify-self: start;
  align-self: end;
`;
