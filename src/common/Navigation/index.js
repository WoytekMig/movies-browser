import { Search } from "./Search";
import { useLocation } from "react-router-dom"; 
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
          <StyledLogo />
          <StyledNavLink to="/movies" className={location.pathname === "/movies" ? "active" : ""}>
            Movies
          </StyledNavLink>
          <StyledNavLink to="/people" className={location.pathname === "/search" ? "active" : ""}>
            People
          </StyledNavLink>
        </StyledDiv>
        <Search />
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
