import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import Loading from "../../../common/Loading";
import NoResult from "../../../common/NoResult";
import useSearchQuery from "./useSearchQuery";
import PeopleList from "../../../common/PeopleList";
import Pagination from "../../../common/Pagination";
import MoviesList from "../../../common/MoviesList";
import usePageQueryParam from "../usePageQueryParam";

const SearchResult = () => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");

  const topic = location.pathname.includes("movie") ? "movie" : "person";
  console.log("topic: ", topic);
  const [currentPage, setCurrentPage] = usePageQueryParam();
  const [searchQuery, setSearchQuery] = useState(queryParam || "");
  const { data, isError, isLoading } = useSearchQuery(
    searchQuery,
    currentPage,
    topic
  );

  const [isLoadingOn, setLoadingOn] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);

  const [showNoResult, setShowNoResult] = useState(false);

  const handlePageChange = (newPage) => {
    if (newPage >= 1) {
      setCurrentPage(newPage);
      setLoadingOn(true);
    }
  };

  useEffect(() => {
    setLoadingOn(true);
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
        setLoadingOn(false);
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
          isLoading
            ? `Search result for "${queryParam || ""}" (${
                data?.results.length || 0
              })`
            : isError || data.results.length === 0 || !data
            ? `Sorry, there are no results for "${queryParam || ""}"`
            : `Search result for "${queryParam || ""}" (${data.total_results})`
        }
      />
      {isLoading ? (
        <Loading />
      ) : isError || data.results.length === 0 ? (
        <NoResult query={queryParam} />
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
