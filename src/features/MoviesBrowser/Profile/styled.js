import { styled } from "styled-components";

export const About = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-areas:
    "pic title"
    "pic data"
    "pic desc";
  grid-template-columns: 399px 1fr;
  grid-template-rows: 2em 2em;
  margin-top: 56px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 283px 1fr;
    padding: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-rows: 32px 1fr;
    grid-template-areas:
      "pic title"
      "pic data"
      "desc desc";
    grid-template-columns: 116px 1fr;
    grid-gap: 16px;
    padding: 24px;
    box-shadow: ${({ theme }) => theme.common.boxShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 16px;
  }
`;

export const Image = styled.img`
  grid-area: pic;
  width: 399px;
  height: 564px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 283px;
    height: 400px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-area: pic;
    width: 116px;
    height: 163px;
  }
`;

export const Name = styled.span`
  grid-area: title;
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 14px;
  }
`;

export const DataWrapper = styled.div`
  grid-area: data;
`;

export const Description = styled.article`
  grid-area: desc;
  font-size: 20px;
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 17px;
    line-height: 26px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 14px;
    line-height: 22px;
  }
`;
