import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const placeholderText = location.pathname.includes("movie")
    ? "Search for movies..."
    : "Search for people...";

  const handleSearchChange = (event) => {
    const newValue = event.target.value;

    setSearchValue(newValue);
    history.push(`/search?query=${newValue}`);

    /*     const currentPath = location.pathname.replace("/search", "");
    const newURL = `${currentPath}/search?query=${newValue}`;
    history.push(newURL); */ // I think this code is future way, but for now, I don't know why it doesn't work...
  };

  useEffect(() => {
    if (location.pathname === "/people" || location.pathname === "/movies") {
      setSearchValue("");
    }
  }, [location.pathname]);

  return (
    <Wrapper>
      <StyledForm>
        <SearchIcon />
        <StyledInput
          placeholder={placeholderText}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </StyledForm>
    </Wrapper>
  );
};
