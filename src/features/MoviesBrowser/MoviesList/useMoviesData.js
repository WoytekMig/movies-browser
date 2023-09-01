import { useState, useEffect } from "react";

/* const discoverMovie =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

const usedFetchAddress = discoverMovie; */

export const useMoviesData = (pageWanted) => {
  const [moviesData, setMoviesData] = useState({
    status: "loading",
    results: {},
  });
  /* const pageWanted = {pageWanted ? pageWanted : 1} */

  const discoverMovie1 =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=";
  const discoverMovie2 = "&sort_by=popularity.desc";
  const usedFetchAddress = discoverMovie1 + pageWanted + discoverMovie2;

  useEffect(() => {
    const fetchMoviesData = async () => {
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

        setMoviesData({
          status: "succes",
          page,
          results,
        });
      } catch (error) {
        setMoviesData({
          status: "error",
        });
      }
    };

    setTimeout(fetchMoviesData, 2000);
  }, []);

  return moviesData;
};
