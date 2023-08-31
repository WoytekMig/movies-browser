import { useState, useEffect } from "react";
const API_KEY = "baca1cc9462be3b73a5e5722d6854eb5";
const API_URL = "https://api.themoviedb.org/3/person/popular";

export const usePopularPeopleData = (currentPage) => {
  const [popularPeopleData, setPopularPeopleData] = useState({
    status: "loading",
    results: [],
    totalPages: 1,
    currentPage: currentPage,
  });
  useEffect(() => {
    const fetchPopularPeopleData = async () => {
      const url = `${API_URL}?page=${currentPage}&api_key=${API_KEY}`;
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
