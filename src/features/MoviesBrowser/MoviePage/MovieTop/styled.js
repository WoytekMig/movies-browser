import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 769px;
  background: ${({ theme }) => theme.colors.black};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 525px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    height: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    height: 148px;
  }
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
    url(${({ $poster }) => $poster});
  background-position: center;
  background-size: auto 100%;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    background-size: 100% 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    background: linear-gradient(
        192.09deg,
        rgba(0, 0, 0, 0) 65%,
        rgba(0, 0, 0, 0.106473) 69.25%,
        rgba(0, 0, 0, 0.235359) 74.4%,
        rgba(0, 0, 0, 0.492821) 82.77%,
        rgba(0, 0, 0, 0.740286) 89.82%,
        #000000 96.18%
      ),
      linear-gradient(
        269.75deg,
        #000000 8.69%,
        rgba(0, 0, 0, 0.873268) 10.09%,
        rgba(0, 0, 0, 0.720529) 12.16%,
        rgba(0, 0, 0, 0.294577) 17.19%,
        rgba(0, 0, 0, 0.159921) 19.93%,
        rgba(0, 0, 0, 0) 25.43%
      ),
      linear-gradient(
        90.09deg,
        #000000 8.05%,
        rgba(0, 0, 0, 0.984059) 9.4%,
        rgba(0, 0, 0, 0.967732) 10.59%,
        rgba(0, 0, 0, 0.865569) 11.79%,
        rgba(0, 0, 0, 0.230315) 20.89%,
        rgba(0, 0, 0, 0) 26.12%
      ),
      linear-gradient(
        180deg,
        #000000 -2.7%,
        rgba(0, 0, 0, 0.689555) 2.36%,
        rgba(0, 0, 0, 0.439033) 7.46%,
        rgba(0, 0, 0, 0.20628) 13.79%,
        rgba(0, 0, 0, 0) 23.65%
      ),
      url(${({ $poster }) => $poster});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    flex-basis: 148px;
    padding-bottom: 8px;
    background-size: 100% 100%;
  }
`;

export const Details = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 17.5px;
  margin: 0 276px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin: 0 100px;
    grid-gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    margin: 0 32px;
    grid-gap: 8px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-gap: 4px;
    margin: 0 16px;
    max-width: 214px;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Title = styled.span`
  font-size: 64px;
  font-weight: 600;
  margin-bottom: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 48px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 24px;
    margin: 0;
    grid-column: 1 / 3;
  }
`;
