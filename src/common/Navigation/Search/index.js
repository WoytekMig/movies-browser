import { SearchIcon, StyledForm, StyledInput, Wrapper } from "./styled";

export const Search = () => {
  return (
    <Wrapper>
      <StyledForm>
        <SearchIcon />
        <StyledInput placeholder="Search for movies"/>
      </StyledForm>
    </Wrapper>
  );
};
