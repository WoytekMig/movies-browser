import { styled } from "styled-components";

export const PersonWrapper = styled.div`
  display: grid;
  grid-template-areas:
    "pic data"
    "pic data";
  grid-template-columns: 399px 1fr;
`;

export const name = styled.span`
  font-size: 36px;
  font-weight: 600;
  line-height: 43px;
`;
