import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";
import { useLocation } from "react-router-dom";

export const Search = () => {
  const location = useLocation();

  const placeholderText =
    location.pathname.includes("movie")
      ? "Search for movies..."
      : "Search for people...";

  return (
    <Wrapper>
      <StyledForm>
        <SearchIcon />
        <StyledInput placeholder={placeholderText} />
      </StyledForm>
    </Wrapper>
  );
};
