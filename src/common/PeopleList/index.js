import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";

const PeopleList = ({ title, picture, name, role, moviePage }) => (
  <Main>
    <MainHeader title={title} moviePage={moviePage} />
    <List $moviePage={moviePage}>
      <ListItem>
        <StyledLink>
          <PersonTile picture={picture} name={name} role={role} />
        </StyledLink>
      </ListItem>
    </List>
  </Main>
);

export default PeopleList;
