import { useQuery } from "react-query";
import PeopleList from "../../../common/PeopleList";
import { API_KEY, ApiPopularPeople } from "../../../codesAPI";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";

const PopularPeople = () => {
  const { data, isLoading, isError, error } = useQuery(
    "popularPeople",
    async () => {
      const response = await fetch(`${ApiPopularPeople}?api_key=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    }
  );

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={error.message} />
      ) : (
        <div>
          <PeopleList data={data} title="Popular people" />
        </div>
      )}
    </div>
  );
};

export default PopularPeople;
