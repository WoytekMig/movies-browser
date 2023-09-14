import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import fetchSearchToAPI from "./getSearch";

const useSearchQuery = (query, currentPage) => {
  const location = useLocation();
  const topic = location.pathname.includes("movie") ? "movie" : "person";
  return useQuery(["search", query, currentPage], () =>
    fetchSearchToAPI({ query, page: currentPage, topic })
  );
};

export default useSearchQuery;
