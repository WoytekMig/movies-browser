import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";

export const Search = () => {
  const location = useLocation();
  const history = useHistory();
  const moviePath = location.pathname.includes("movie");
  const placeholderText = moviePath
    ? "Search for movies..."
    : "Search for people...";

  const queryParam = new URLSearchParams(location.search).get("query");

  const [searchValue, setSearchValue] = useState(queryParam || "");

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

    const searchParams = new URLSearchParams(location.search);
    searchParams.set("query", newValue);
    history.push({
      pathname: `/${moviePath ? "movies" : "people"}/search`,
      search: searchParams.toString(),
    });
  };

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("query");
    if (queryParam !== null) {
      setSearchValue(queryParam);
    }
  }, [location.search]);

  useEffect(() => {
    if (
      location.pathname === "/people" ||
      location.pathname === "/movies" ||
      location.pathname.includes("movie/") ||
      location.pathname.includes("person")
    ) {
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
