import { useState, useEffect } from "react";

const discoverPopularPeople =
  "https://api.themoviedb.org/3/person/popular?language=en-US&page=1";

const usedFetchAddress = discoverPopularPeople;

export const usePopularPeopleData = () => {
  const [popularPeopleData, setPopularPeopleData] = useState({
    status: "loading",
    results: {},
  });

  useEffect(() => {
    const fetchPopularPeopleData = async () => {
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTg2OTdmMjAwODg3Mjg3NjRjYTM3MmFkYmVmY2ZmOSIsInN1YiI6IjY0ZTcyMjVhNTk0Yzk0MDBlMjVmMTAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K607pZBIHN1IOKg31JxS5SlwbJPLAz8H03cZHzZBJH0",
        },
      };

      try {
        const response = await fetch(usedFetchAddress, options);

        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const { page, results } = await response.json();

        setPopularPeopleData({
          status: "succes",
          page,
          results,
        });
      } catch (error) {
        setPopularPeopleData({
          status: "error",
        });
      }
    };

    setTimeout(fetchPopularPeopleData, 1000);
  }, []);

  return popularPeopleData;
};