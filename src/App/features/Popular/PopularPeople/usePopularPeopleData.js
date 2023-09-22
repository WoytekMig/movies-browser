import { useState, useEffect } from "react";
import { API_KEY, ApiPopularPeople } from "../../../common/Helpers/codesAPI";

export const usePopularPeopleData = (currentPage) => {
  const [popularPeopleData, setPopularPeopleData] = useState({
    status: "loading",
    results: [],
    totalPages: 1,
    currentPage: currentPage,
  });
  useEffect(() => {
    const fetchPopularPeopleData = async () => {
      const url = `${ApiPopularPeople}?page=${currentPage}&api_key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setPopularPeopleData({
          status: "success",
          results: data.results,
          totalPages: data.total_pages,
          currentPage: data.page,
        });
      } catch (error) {
        setPopularPeopleData({
          status: "error",
        });
      }
    };
    fetchPopularPeopleData();
  }, [currentPage]);
  return popularPeopleData;
};
