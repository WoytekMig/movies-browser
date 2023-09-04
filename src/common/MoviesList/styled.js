import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 16px;
  justify-content: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 16px;
  }
`;

export const StyledMainHeader = styled.div`
  font-size: 36px;
  font-weight: 600;
  margin-top: 56px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    font-size: 24px;
    margin-top: 24px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
