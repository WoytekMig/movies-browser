import { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

function usePageQueryParam() {
  const history = useHistory();
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search).get("page");
  const [currentPage, setCurrentPage] = useState(
    queryParam ? parseInt(queryParam) : 1
  );

  const setPage = (newPage) => {
    if (newPage >= 1 && newPage !== currentPage) {
      setCurrentPage(newPage);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", newPage);
      history.push(`${location.pathname}?${searchParams.toString()}`);
    }
  };

  useEffect(() => {
    const queryParam = new URLSearchParams(location.search).get("page");
    const parsedPage = parseInt(queryParam, 10);
    if (!isNaN(parsedPage) && parsedPage >= 1 && parsedPage !== currentPage) {
      setCurrentPage(parsedPage);
    }
  }, [location.search, currentPage]);

  return [currentPage, setPage];
}

export default usePageQueryParam;
