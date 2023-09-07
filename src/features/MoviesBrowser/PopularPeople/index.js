import { useQuery } from "react-query";
import { API_KEY, ApiPopularPeople } from "../../../codesAPI";
import { useState } from "react";
import { usePopularPeopleData } from "./usePopularPeopleData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "common/PeopleList";
import Pagination from "../../../common/Pagination";

const PopularPeople = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const popularPeopleData = usePopularPeopleData(currentPage);

  const { isLoading, isError, error } = useQuery("popularPeople", async () => {
    const response = await fetch(`${ApiPopularPeople}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });
  const totalPages = popularPeopleData.totalPages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={error.message} />
      ) : (
        <div>
          <PeopleList
            currentPage={currentPage}
            onPageChange={handlePageChange}
            data={popularPeopleData}
            title="Popular people"
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onFirstPage={() => handlePageChange(1)}
            onPrevPage={() => handlePageChange(currentPage - 1)}
            onNextPage={() => handlePageChange(currentPage + 1)}
            onLastPage={() => handlePageChange(totalPages)}
          />
        </div>
      )}
    </div>
  );
};

export default PopularPeople;
