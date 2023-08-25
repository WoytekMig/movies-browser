import { styled } from "styled-components";
import mulan from "../../../../images/mulan.jpg";

import { ReactComponent as Scale } from "../../../../images/rating.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 81vh;
`;

export const Poster = styled.div`
  display: grid;
  align-content: end;
  padding-bottom: 56px;
  flex-grow: 1;
  background: linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106473) 63.17%,
      rgba(0, 0, 0, 0.235359) 68.85%,
      rgba(0, 0, 0, 0.492821) 78.08%,
      rgba(0, 0, 0, 0.740286) 85.86%,
      #000000 92.87%
    ),
    linear-gradient(
      270deg,
      #000000 14.11%,
      rgba(0, 0, 0, 0.873268) 15.08%,
      rgba(0, 0, 0, 0.720529) 16.51%,
      rgba(0, 0, 0, 0.294577) 19.99%,
      rgba(0, 0, 0, 0.159921) 21.88%,
      rgba(0, 0, 0, 0) 25.68%
    ),
    linear-gradient(
      90deg,
      #000000 13.6%,
      rgba(0, 0, 0, 0.984059) 14.58%,
      rgba(0, 0, 0, 0.967732) 15.44%,
      rgba(0, 0, 0, 0.865569) 16.3%,
      rgba(0, 0, 0, 0.230315) 22.87%,
      rgba(0, 0, 0, 0) 26.64%
    ),
    linear-gradient(
      180deg,
      #000000 0%,
      rgba(0, 0, 0, 0.689555) 4.66%,
      rgba(0, 0, 0, 0.439033) 9.34%,
      rgba(0, 0, 0, 0.20628) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    url(${mulan});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-gap: 17.5px;
  max-width: 503px;
  margin: 0 276px;
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 8px;
`;

export const Rating = styled.div`
  max-width: 126px;
  display: flex;
  align-items: center;
  align-content: center;
`;

export const Rate = styled.span`
  font-size: 30px;
  font-weight: 500;
  margin: 0 8px;
  line-height: 39px;
`;

export const StyledScale = styled(Scale)`
  align-self: end;
  margin-bottom: 6px;
`;

export const Votes = styled.span`
  font-size: 16px;
`;
