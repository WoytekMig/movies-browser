import PeopleList from "../../../common/PeopleList";
import { usePopularPeopleData } from "./usePopularPeopleData";

const PopularPeople = () => {
  const currentPage = 1;
  const popularPeopleData = usePopularPeopleData(currentPage);

  return <PeopleList data={popularPeopleData} title="Popular people" />;
};

export default PopularPeople;
