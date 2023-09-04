import { useQuery } from "react-query";
import PeopleList from "../../../common/PeopleList";
import { API_KEY, ApiPopularPeople } from "../../../codesAPI";
import Loading from "../../../common/Loading";
import Error from "../../../common/Error";
import { usePopularPeopleData } from "./usePopularPeopleData";
import { useState } from "react";

const PopularPeople = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const popularPeopleData = usePopularPeopleData(currentPage);

  const { isLoading, isError, error } = useQuery("popularPeople", async () => {
    const response = await fetch(`${ApiPopularPeople}?api_key=${API_KEY}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  });

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error message={error.message} />
      ) : (
        <div>
          <PeopleList
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            data={popularPeopleData}
            title="Popular people"
          />
        </div>
      )}
    </div>
  );
};

export default PopularPeople;
