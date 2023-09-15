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
  const [isLoading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState(queryParam || "");
  const [showNoResult, setShowNoResult] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= data.total_pages) {
      setCurrentPage(newPage);
      setLoading(true);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setLoading(true);
    const delayTimer = setTimeout(() => {
      setSearchQuery(queryParam || "");
    }, 500);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [queryParam]);

  const { data, isError } = useSearchPeopleQuery(searchQuery, currentPage);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (data !== undefined) {
        setLoading(false);
        setDataLoaded(true);
        setShowNoResult(data.results.length === 0);
      }
    }, 500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [data]);

  return (
    <Main>
      <MainHeader
        data={data}
        title={
          isError || (!dataLoaded && !showNoResult)
            ? `Loading...`
            : showNoResult
            ? `Sorry, there are no results for "${searchQuery || ""}"`
            : `Search result for "${searchQuery || ""}" (${
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
        <NoResult query={searchQuery} />
      ) : (
        <>
          <PeopleList data={data.results} currentPage={currentPage} />
          <Pagination
            currentPage={currentPage}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Main>
  );
};

export default SearchResult;
