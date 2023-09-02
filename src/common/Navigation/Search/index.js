import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledForm, StyledInput, Wrapper } from "./styled";
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
  };

  return (
    <Wrapper>
      <StyledForm>
        <StyledInput
          placeholder={placeholderText}
          value={searchValue}
          onChange={handleSearchChange}
        />
      </StyledForm>
    </Wrapper>
  );
};
