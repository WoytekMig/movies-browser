import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  ${({ $moviePage }) =>
    $moviePage &&
    css`
      margin: 0;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoints.defaultMobile}) {
    gap: 16px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
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
