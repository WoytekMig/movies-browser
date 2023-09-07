import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const MainContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: stretch;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 16px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
