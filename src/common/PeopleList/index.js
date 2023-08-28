import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";

const PeopleList = ({ title, picture, name, role }) => (
  <Main>
    <MainHeader title={title} />
    <List>
      <ListItem>
        <StyledLink>
          <PersonTile picture={picture} name={name} role={role} />
        </StyledLink>
      </ListItem>
    </List>
  </Main>
);

export default PeopleList;
