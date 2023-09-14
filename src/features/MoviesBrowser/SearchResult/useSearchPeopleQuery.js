import { useQuery } from "react-query";
import fetchSearchToAPI from "./getSearch";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const useSearchQuery = (query, currentPage) => {
  const location = useLocation();
  const topic = location.pathname.includes("movi") ? "movie" : "person";
  return useQuery(["search", query, currentPage], () =>
    fetchSearchToAPI({ query, page: currentPage, topic })
  );
};

export default useSearchQuery;
