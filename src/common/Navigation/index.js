import { Search } from "./Search";
import {
  StyledLogo,
  StyledNavigation,
  Container,
  StyledDiv,
  StyledNavLink,
} from "./styled";

const Navigation = () => {
  return (
    <StyledNavigation>
      <Container>
        <StyledDiv>
          <StyledLogo />
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/people">People</StyledNavLink>
        </StyledDiv>
        <Search />
      </Container>
    </StyledNavigation>
  );
};

export default Navigation;
