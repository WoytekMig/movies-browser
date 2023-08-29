import React from "react";
import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";
import { usePopularPeopleData } from "../../features/MoviesBrowser/PopularPeople/usePopularPeopleData";
import Loading from "../Loading";

const PeopleList = ({ title, increasedGap }) => {
  const popularPeopleData = usePopularPeopleData();

  return (
    <Main>
      <MainHeader title={title} />
      <List $increasedGap={increasedGap}>
        {popularPeopleData.status === "loading" ? (
          <Loading />
        ) : popularPeopleData.status === "error" ? (
          <p>Something went wrong...</p>
        ) : (
          popularPeopleData.results.map((person) => (
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
