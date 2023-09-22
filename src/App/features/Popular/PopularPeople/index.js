import { useEffect, useState } from "react";
import { usePopularPeopleData } from "./usePopularPeopleData";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import PeopleList from "../../../common/PeopleList";
import Pagination from "../../../common/Pagination";
import usePageQueryParam from "../../../common/Helpers/usePageQueryParam";
import { useHistory } from "react-router-dom";

const PopularPeople = () => {
  const [currentPage, setCurrentPage] = usePageQueryParam();
  const [isLoading, setIsLoading] = useState(true);
  const popularPeopleData = usePopularPeopleData(currentPage);
  const totalPages = popularPeopleData.totalPages || 1;
  const history = useHistory();

  const onPageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setIsLoading(true);
      setCurrentPage(newPage);
    }
  };

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    const unlisten = history.listen(() => {
      setIsLoading(true);
    });

    return () => {
      clearTimeout(loadingTimeout);
      unlisten();
    };
  }, [currentPage, history]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : popularPeopleData.status === "error" ? (
        <Error />
      ) : (
        <div>
          <PeopleList data={popularPeopleData.results} title="Popular people" />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default PopularPeople;
