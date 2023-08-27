import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.common.breakpoint}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style: none;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
`;