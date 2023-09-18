import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search";
import {
  StyledLogo,
  StyledNavigation,
  Container,
  StyledDiv,
  StyledNavLink,
} from "./styled";

const Navigation = () => {
  const location = useLocation();

  const isMovieActive = location.pathname.includes("/movie");
  const isPeopleActive =
    location.pathname === "/search" || location.pathname.includes("/person/");

  return (
    <StyledNavigation>
      <Container>
        <StyledDiv>
          <Link to="/movies">
            <StyledLogo />
          </Link>
          <StyledNavLink to="/movies" className={isMovieActive ? "active" : ""}>
            Movies
          </StyledNavLink>
          <StyledNavLink
            to="/people"
            className={isPeopleActive ? "active" : ""}
          >
            People
          </StyledNavLink>
        </StyledDiv>
        <Search />
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
