import { useQuery } from "react-query";
import searchPeople from "./getSearch";

const useSearchPeopleQuery = (query, currentPage) => {
  return useQuery(["searchPeople", query], () =>
    searchPeople({ query, page: currentPage })
  );
};

export default useSearchPeopleQuery;
