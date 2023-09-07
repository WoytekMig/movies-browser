import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const MainContainer = styled.div`
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-content: stretch;
  /* flex-direction: row;
  flex-wrap: wrap; */
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  display: grid;
  text-decoration: none;
  color: inherit;
`;
