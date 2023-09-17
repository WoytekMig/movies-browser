import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 24px;
  grid-template-areas:
    "pic data"
    "pic desc"
    "pic desc"
    "pic desc"
    "pic desc"
    "pic desc"
    "pic desc"
    "pic desc"
    "pic desc";
  grid-template-columns: 312px 1fr;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  padding: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 283px 1fr;
    padding: 32px;
    grid-row-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-rows: 32px 1fr;
    grid-template-areas:
      "pic data"
      "pic data"
      "desc desc";
    grid-template-columns: 168px 1fr;
    grid-gap: 16px;
    padding: 24px;
    box-shadow: ${({ theme }) => theme.common.boxShadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 16px;
    grid-template-columns: 114px 1fr;
  }
`;

export const Image = styled.img`
  grid-area: pic;
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    width: 283px;
    height: 421px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    width: 168px;
    height: 250px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 114px;
    height: 169px;
  }
`;

export const DataContainer = styled.div`
  grid-area: data;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 12px;
    justify-content: space-evenly;
    margin: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    justify-content: space-between;
  }
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 600;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 20px;
    margin-bottom: -6px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 16px;
    margin-bottom: -4px;
  }
`;

export const Year = styled.span`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.stormGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: 13px;
  }
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 12px;
    gap: 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    gap: 8px;
    font-size: 10px;
    margin-bottom: 4px;
  }
`;

export const Tag = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};
  color: ${({ theme }) => theme.colors.woodSmoke};
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 6px 12px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    padding: 4px 8px;
  }
`;

export const MovieDescription = styled.article`
  grid-area: desc;
  font-size: 20px;
  line-height: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    line-height: 26px;
    font-size: 17px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    line-height: 22px;
    font-size: 14px;
  }
`;
