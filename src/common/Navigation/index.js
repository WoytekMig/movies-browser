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
        <StyledLogo />
        <StyledDiv>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
          <StyledNavLink to="/people">People</StyledNavLink>
        </StyledDiv>
      </Container>
      <Search />
    </StyledNavigation>
  );
};

export default Navigation;
