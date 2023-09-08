import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";

const PeopleList = ({ title, moviePage, data, currentPage }) => {
  console.log("Data in PeopleList:", data);
  console.log("currentPage in PeopleList:", currentPage);
  

   return (
    <Main>
      {!moviePage ? (
        <>
          <MainHeader title={title} />
          <>
            <List $moviePage={moviePage}>
              {data.results.map((person) => (
                <ListItem key={person.id}>
                  <StyledLink to={`/person/${person.id}`}>
                    <PersonTile
                      picture={person.profile_path}
                      name={person.name}
                      role={person.character}
                    />
                  </StyledLink>
                </ListItem>
              ))}
            </List>
          </>
        </>
      ) : (
        <>
          <MainHeader title={title} />
          <List $moviePage={moviePage}>
            {data.map((person) => (
              <ListItem key={person.credit_id}>
                <StyledLink to={`/person/${person.id}`}>
                  <PersonTile
                    picture={person.profile_path}
                    name={person.name}
                    role={person.character ?? person.job}
                  />
                </StyledLink>
              </ListItem>
            ))}
          </List>
        </>
      )}
    </Main>
  );
};

export default PeopleList;
