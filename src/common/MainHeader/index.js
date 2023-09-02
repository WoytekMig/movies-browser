import { StyledMainHeader } from "./styled";

const MainHeader = ({ title, moviePage, profile }) => (
  <StyledMainHeader $profile={profile} $moviePage={moviePage}>
    {title}
  </StyledMainHeader>
);

export default MainHeader;
