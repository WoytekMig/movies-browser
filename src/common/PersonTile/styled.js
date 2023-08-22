import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-gap: 16px;
  max-width: 208px;
  max-height: 339px;
  padding: 16px;
  text-align: center;
`;

export const Picture = styled.img`
  max-width: 176px;
  max-height: 231px;
  border-radius: 5px;
`;

export const Name = styled.span`
  font-weight: 500;
  font-size: 22px;
`;

export const Role = styled.span`
  font-size: 18px;
`;
