import { useEffect, useState } from "react";
import { usePopularPeopleData } from "./usePopularPeopleData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import Pagination from "../../../common/Pagination";

const PopularPeople = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const popularPeopleData = usePopularPeopleData(currentPage);
  const totalPages = popularPeopleData.totalPages || 1;

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setIsLoading(true);
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => {
      clearTimeout(loadingTimeout);
    };
  }, [currentPage]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : popularPeopleData.status === "error" ? (
        <Error />
      ) : (
        <div>
          <PeopleList data={popularPeopleData} title="Popular people" />
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
