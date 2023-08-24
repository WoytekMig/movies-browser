import { List, ListItem, StyledLink } from "./styled";
import { MainContainer } from "../../../common/Container";
import { MainHeader } from "../../../common/MainHeader";

export const PeopleList = () => {
  return (
    <MainContainer>
      <MainHeader title="Popular People" />
      <List>
        <ListItem>
          <StyledLink></StyledLink>
        </ListItem>
      </List>
    </MainContainer>
  );
};
