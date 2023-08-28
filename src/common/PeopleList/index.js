import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";

const PeopleList = ({ title, picture, name, role, increasedGap }) => (
  <Main>
    <MainHeader title={title} />
    <List $increasedGap={increasedGap}>
      <ListItem>
        <StyledLink>
          <PersonTile picture={picture} name={name} role={role} />
        </StyledLink>
      </ListItem>
    </List>
  </Main>
);

export default PeopleList;
