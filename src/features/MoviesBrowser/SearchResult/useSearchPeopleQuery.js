import { useQuery } from "react-query";
import searchPeople from "./getSearch";

const useSearchPeopleQuery = (query, currentPage, topic) => {
  return useQuery(["searchPeople", query, currentPage], () =>
    searchPeople({ query, page: currentPage, topic })
  );
};

export default useSearchPeopleQuery;
