import { StyledContainer } from "../../common/Container/styled";
import MainHeader from "../../common/MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../../common/PersonTile";

const PeopleList = () => {
  return (
    <StyledContainer>
      <MainHeader title={"Popular People"} />
      <List>
        <ListItem>
          <StyledLink>
            <PersonTile />
          </StyledLink>
        </ListItem>
      </List>
    </StyledContainer>
  );
};

export default PeopleList;
