import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import Loading from "../../../common/Loading";
import NoResult from "../../../common/NoResult";
import useSearchPeopleQuery from "./useSearchPeopleQuery";
import PeopleList from "../../../common/PeopleList";
import Pagination from "../../../common/Pagination";

const SearchResult = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");

  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [currentPage]);

  const { data, isError } = useSearchPeopleQuery(queryParam, currentPage);

  useEffect(() => {
    if (data !== undefined) {
      setDataLoaded(true);
      setTotalPages(data.total_pages || 1);
    }
  }, [data]);
  const handleSearchPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      setLoading(true);
    }
  };

  return (
    <Main>
      <MainHeader
        data={data}
        title={
          isError || !data || data.results.length === 0
            ? `Sorry, there are no results for "${queryParam || ""}"`
            : `Search result for "${queryParam || ""}" (${
                data?.results.length || 0
              })`
        }
      />
      {isLoading ? (
        <Loading />
      ) : isError ||
        !dataLoaded ||
        !data ||
        !data.results ||
        data.results.length === 0 ? (
        <NoResult query={queryParam} />
      ) : (
        <>
          <PeopleList data={data} currentPage={currentPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handleSearchPageChange}
            onFirstPage={() => handleSearchPageChange(1)}
            onPrevPage={() => handleSearchPageChange(currentPage - 1)}
            onNextPage={() => handleSearchPageChange(currentPage + 1)}
            onLastPage={() => handleSearchPageChange(totalPages)}
          />
        </>
      )}
    </Main>
  );
};
export default SearchResult;
