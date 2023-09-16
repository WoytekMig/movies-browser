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

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    const topic = location.pathname.includes("movie") ? "movies" : "people"; // to change
    /*     const currentPath = location.pathname.replace(`/search`, ``); */ // to change
    const newURL = `${topic}/search?query=${newValue}`; // to change
    history.push(newURL);
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
