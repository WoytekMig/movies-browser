import { useQuery } from "react-query";
import fetchSearchToAPI from "./getSearch";

const useSearchQuery = (query, currentPage, topic) => {
  const fetchSearchData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return fetchSearchToAPI({ query, page: currentPage, topic });
  };

  const { data, ...rest } = useQuery(
    ["search", query, currentPage],
    fetchSearchData
  );
  const totalResults = data?.total_results || 0;

  return {
    data,
    totalResults,
    ...rest,
  };
};

export default useSearchQuery;
