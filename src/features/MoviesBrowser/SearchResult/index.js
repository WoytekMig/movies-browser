import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import Loading from "../../../common/Loading";
import NoResult from "../../../common/NoResult";
import useSearchPeopleQuery from "./useSearchPeopleQuery";
import PeopleList from "../../../common/PeopleList";

const SearchResult = ({ onPageChange, currentPage }) => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 300);

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
          <PeopleList
            data={data}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Main>
  );
};

export default SearchResult;
