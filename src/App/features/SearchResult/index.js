import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { Main } from "../../common/Main";
import MainHeader from "../../common/MainHeader";
import Loading from "../../common/Loading";
import NoResult from "../../common/NoResult";
import useSearchQuery from "./useSearchQuery";
import PeopleList from "../../common/PeopleList";
import Pagination from "../../common/Pagination";
import MoviesList from "../../common/MoviesList";
import usePageQueryParam from "../../common/Helpers/usePageQueryParam";

const SearchResult = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  const topic = location.pathname.includes("movie") ? "movie" : "person";
  const [currentPage, setCurrentPage] = usePageQueryParam();
  const [searchQuery, setSearchQuery] = useState(queryParam || "");
  const { data, isError, totalResults } = useSearchQuery(
    searchQuery,
    currentPage,
    topic
  );

  const [isLoading, setIsLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [showNoResult, setShowNoResult] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
      setIsLoading(true);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const delayTimer = setTimeout(() => {
      setSearchQuery(queryParam || "");
    }, 500);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [queryParam]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      if (data !== undefined) {
        setIsLoading(false);
        setDataLoaded(true);
        setShowNoResult(data.results.length === 0);
      }
    }, 500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [data]);

  const history = useHistory();

  useEffect(() => {
    if (data && data.results.length === 0 && searchQuery === "") {
      const cleanPathname = location.pathname.replace(/\/search/, "");
      history.replace(cleanPathname);
    }
  }, [data, searchQuery, history, location.pathname]);

  return (
    <Main>
      <MainHeader
        data={data}
        title={
          isError || (!dataLoaded && !showNoResult)
            ? `Search result for "${searchQuery || ""}"`
            : showNoResult
            ? `Sorry, there are no results for "${searchQuery || ""}"`
            : isLoading
            ? `Search result for "${searchQuery || ""}"`
            : `Search result for "${searchQuery || ""}" (${totalResults || 0})`
        }
      />
      {isLoading ? (
        <Loading />
      ) : isError || !dataLoaded || !data ? null : data.results.length === 0 ? (
        <NoResult query={searchQuery} />
      ) : topic ? (
        <>
          {topic === "person" ? (
            <PeopleList data={data.results} currentPage={currentPage} />
          ) : (
            <MoviesList moviesData={data.results} currentPage={currentPage} />
          )}

          <Pagination
            currentPage={currentPage}
            totalPages={data.total_pages}
            onPageChange={handlePageChange}
          />
        </>
      ) : (
        Error
      )}
    </Main>
  );
};

export default SearchResult;
