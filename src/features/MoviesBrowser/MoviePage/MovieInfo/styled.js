import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.common.boxShadow};
  padding: 40px;
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  display: block;
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Title = styled.span`
  font-size: 36px;
  font-weight: 600;
`;

export const Year = styled.span`
  font-size: 22px;
`;

export const AdditionalData = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.stormGray};
`;

export const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  gap: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 8px;
    font-size: 10px;
  }
`;

export const Tag = styled.div`
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.mystic};
  align-items: center;
  color: ${({ theme }) => theme.colors.woodSmoke};
  padding: 8px 16px;
  max-height: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    padding: 4px 8px;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const Rating = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.woodSmoke};

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    font-size: 13px;
  }
`;

export const Votes = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.waterloo};
  margin-left: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}px) {
    font-size: 13px;
  }
`;

export const MovieDescription = styled.article`
  font-size: 20px;
  line-height: 32px;
`;
