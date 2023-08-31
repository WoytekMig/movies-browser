import { useState } from "react";
import PeopleList from "../../../common/PeopleList";
import { usePopularPeopleData } from "./usePopularPeopleData";

const PopularPeople = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const popularPeopleData = usePopularPeopleData(currentPage);

  return (
    <div>
      <PeopleList
        data={popularPeopleData}
        title="Popular people"
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default PopularPeople;
