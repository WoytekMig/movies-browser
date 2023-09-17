import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const [searchValue, setSearchValue] = useState("");

  const placeholderText = location.pathname.includes("movie")
    ? "Search for movies..."
    : "Search for people...";

  const moviePath = location.pathname.includes(`movie`) ? true : false;

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    history.push(
      `/${moviePath ? "movies" : "people"}/search?query=${newValue}`
    );
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
