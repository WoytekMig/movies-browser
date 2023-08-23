import { Search } from "./Search";
import React from "react";
import {
  StyledLogo,
  StyledNavigation,
  Container,
  StyledDiv,
  StyledNavLink,
} from "./styled";

const Navigation = () => {
  const toMovies = "/movies";
  const toPeople = "/people";
  return (
    <StyledNavigation>
      <Container>
        <StyledLogo />
        <StyledDiv>
          <StyledNavLink to={toMovies}>Movies</StyledNavLink>
          <StyledNavLink to={toPeople}>People</StyledNavLink>
        </StyledDiv>
      </Container>
      <Search />
    </StyledNavigation>
  );
};

export default Navigation;
