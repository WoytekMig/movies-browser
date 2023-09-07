
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom";
import { Main } from "../../../common/Main";
import MainHeader from "../../../common/MainHeader";
import Loading from "../../../common/Loading";
import NoResult from "../../../common/NoResult";
import useSearchPeopleQuery from "./useSearchPeopleQuery";
import PeopleList from "../../../common/PeopleList";
import Pagination from "../../../common/Pagination";

const SearchResult = ({ onPageChange }) => {
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("query");
  console.log("queryParam:", queryParam);
  const currentPage = useParams().currentPage || 1;
  
  const [isLoading, setLoading] = useState(true);
  const [dataLoaded, setDataLoaded] = useState(false);
  
  const [totalPages, setTotalPages] = useState(1); // Dodana state totalPages
  
  useEffect(() => {
    console.log("currentPage in SearchResult:", currentPage);
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [currentPage]);
  const { data, isError } = useSearchPeopleQuery(queryParam);
  console.log("API response:", data);
  
  useEffect(() => {
    if (data !== undefined) {
      setDataLoaded(true);
      setTotalPages(data.total_pages || 1); // Ustawienie totalPages na podstawie danych z API
    }
  }, [data]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      console.log("Changing page to:", newPage); 
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
            : `Search result for "${queryParam || ""}" (${
                data?.results.length || 0
              })`
        }
      />
      {isLoading ? (
        <Loading />
      ) : isError || !dataLoaded || !data || !data.results || data.results.length === 0 ? (
        <NoResult query={queryParam} />
      ) : (
        <>
          <PeopleList
            data={data}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            totalPages={totalPages}
          />
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
