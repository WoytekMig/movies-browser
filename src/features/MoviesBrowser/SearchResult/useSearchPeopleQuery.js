import { useQuery } from "react-query";
import searchPeople from "./getSearch";

const useSearchPeopleQuery = (query) => {
  console.log("Zapytanie do API z parametrami:",query);
  return useQuery(["searchPeople", query], () =>
    searchPeople({ query, page: 1 })
  );
};

export default useSearchPeopleQuery;
