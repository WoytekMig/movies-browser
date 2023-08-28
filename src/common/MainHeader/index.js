import { StyledMainHeader } from "./styled";

const MainHeader = ({ title, moviePage }) => (
  <StyledMainHeader $moviePage={moviePage}>{title}</StyledMainHeader>
);

export default MainHeader;
