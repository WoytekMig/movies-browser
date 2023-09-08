import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 24px;
  padding: 0;
  margin: 0 0 24px 0;
  list-style: none;

  ${({ $moviePage }) =>
    $moviePage &&
    css`
      margin: 0;
    `}

  @media (max-width: 1300px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 850px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 605px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ListItem = styled.li`
  list-style: none;
  height: 100%;
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  height: 100%;
`;
