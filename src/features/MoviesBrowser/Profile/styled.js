import { styled } from "styled-components";

export const About = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-areas:
    "pic data"
    "pic desc";
  grid-template-columns: 399px 1fr;
  margin-top: 56px;
  padding: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
`;

export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-area: pic;
    width: 168px;
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Name = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
`;

export const Description = styled.article`
  grid-area: desc;
  font-size: 20px;
  line-height: 32px;
`;
