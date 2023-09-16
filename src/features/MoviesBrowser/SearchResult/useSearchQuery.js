import { useQuery } from "react-query";
import fetchSearchToAPI from "./getSearch";

const useSearchQuery = (query, currentPage, topic) => {
  const fetchSearchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return fetchSearchToAPI({ query, page: currentPage, topic });
  };

  return useQuery(["search", query, currentPage], fetchSearchData);
};

export default useSearchQuery;
