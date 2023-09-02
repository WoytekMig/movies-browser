import { useState, useEffect } from "react";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import { List, ListItem, StyledLink } from "../../../common/PeopleList/styled";
import PersonTile from "../../../common/PersonTile";
import Pagination from "../../../common/Pagination";
import Loading from "../../../common/Loading";
import NoResult from "../../../common/NoResult";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import useSearchPeopleQuery from "./useSearchPeopleQuery";

const SearchResult = ({ onPageChange, currentPage }) => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [queryParam]);

  const { data, isError } = useSearchPeopleQuery(queryParam);
  const totalPages = data?.totalPages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      onPageChange(newPage);
    }
  };

  return (
    <Main>
      <MainHeader
        data={data}
        title={
          isError || !data || data.results.length === 0
            ? `Sorry, there are no results for "${queryParam || ""}"`
            : `Search result for "${queryParam || ""}"`
        }
      />
      {isLoading ? (
        <Loading />
      ) : isError || !data || data.results.length === 0 ? (
        <NoResult query={queryParam} />
      ) : (
        <>
          <List>
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

export default SearchResult;
