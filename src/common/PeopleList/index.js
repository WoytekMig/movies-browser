import { Main } from "../Main";
import MainHeader from "../MainHeader";
import { List, ListItem, StyledLink } from "./styled";
import PersonTile from "../PersonTile";
import Pagination from "../Pagination";
import Error from "../Error";
import Loading from "../Loading";

const PeopleList = ({ title, moviePage, data, currentPage, onPageChange }) => {
  const totalPages = data.totalPages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <Main>
      <MainHeader title={title} />
      {data.status === "loading" ? (
        <Loading />
      ) : data.status === "error" ? (
        <Error />
      ) : (
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
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onFirstPage={() => handlePageChange(1)}
            onPrevPage={() => handlePageChange(currentPage - 1)}
            onNextPage={() => handlePageChange(currentPage + 1)}
            onLastPage={() => handlePageChange(totalPages)}
          />
        </>
      )}
    </Main>
  );
};

export default PeopleList;
