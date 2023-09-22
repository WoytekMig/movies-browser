import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";

const PeopleList = ({ title, moviePage, data }) => (
  <Main>
    <MainHeader title={title} />
    <List $moviePage={moviePage}>
      {data.map((person) => (
        <ListItem key={person.credit_id || person.id}>
          <StyledLink to={`/person/${person.id}`}>
            <PersonTile
              picture={person.profile_path}
              name={person.name}
              role={
                moviePage ? person.character ?? person.job : person.character
              }
            />
          </StyledLink>
        </ListItem>
      ))}
    </List>
  </Main>
);

export default PeopleList;
