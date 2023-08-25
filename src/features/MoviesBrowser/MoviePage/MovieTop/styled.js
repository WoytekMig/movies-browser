import { styled } from "styled-components";
import mulan from "../../../../images/mulan.jpg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.black};
`;

export const Poster = styled.div`
  display: grid;
  align-content: end;
  padding-bottom: 56px;
  flex-basis: 1368px;
  height: 769px;
  margin: 0 276px;
  background: url(${mulan});
  background-size: cover;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 100px 92px ${({ theme }) => theme.colors.black},
    inset 0px 0px 48px 20px ${({ theme }) => theme.colors.black};
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-gap: 16px;
  max-width: 503px;
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Rating = styled.div`
  max-width: 126px;
  display: flex;
  place-items: center;
`;

export const Rate = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin: 0 8px;
`;

export const Votes = styled.span`
  font-size: 16px;
`;
