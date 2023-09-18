import { Search } from "./Search";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import {
  StyledLogo,
  StyledNavigation,
  Container,
  StyledDiv,
  StyledNavLink,
} from "./styled";

const Navigation = () => {
  const location = useLocation();

  return (
    <StyledNavigation>
      <Container>
        <StyledDiv>
          <Link to="/movies?page=1">
            <StyledLogo />
          </Link>
          <StyledNavLink
            to="/movies"
            className={location.pathname.includes("/movie") ? "active" : ""}
          >
            Movies
          </StyledNavLink>
          <StyledNavLink
            to="/people"
            className={
              location.pathname === "/search" ||
              location.pathname.includes("/person/")
                ? "active"
                : ""
            }
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
