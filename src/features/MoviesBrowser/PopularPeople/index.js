import PeopleList from "../../../common/PeopleList";
import { usePopularPeopleData } from "./usePopularPeopleData";

const PopularPeople = () => {
  const popularPeopleData = usePopularPeopleData();

  return <PeopleList data={popularPeopleData} title="Popular people" />;
};

export default PopularPeople;
