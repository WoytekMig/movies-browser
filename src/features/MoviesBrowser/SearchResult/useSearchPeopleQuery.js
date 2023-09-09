import { useQuery } from "react-query";
import searchPeople from "./getSearch";

const useSearchPeopleQuery = (query, whichPage) => {
  return useQuery(["searchPeople", query], () =>
    searchPeople({ query, page: whichPage })
  );
};

export default useSearchPeopleQuery;
