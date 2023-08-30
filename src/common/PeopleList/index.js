import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";
import Loading from "../Loading";

const PeopleList = ({ title, moviePage, data }) => {
  return (
    <Main>
      <MainHeader title={title} />
      <List $moviePage={moviePage}>
        {data.status === "loading" ? (
          <Loading />
        ) : data.status === "error" ? (
          <p>Something went wrong...</p>
        ) : (
          data.results.map((person) => (
            <ListItem key={person.id}>
              <StyledLink to={`/person/${person.id}`}>
                <PersonTile
                  picture={person.profile_path}
                  name={person.name}
                  role={person.character}
                />
              </StyledLink>
            </ListItem>
          ))
        )}
      </List>
    </Main>
  );
};

export default PeopleList;