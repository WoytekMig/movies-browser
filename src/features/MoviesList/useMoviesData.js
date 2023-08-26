import { useState, useEffect } from "react";

const source1 = "https://api.themoviedb.org/3/movie/550?api_key=6a8697f20088728764ca372adbefcff9";
const source2 = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}";
const APIkey = "6a8697f20088728764ca372adbefcff9";
const source3 = "https://api.themoviedb.org/3/movie/157336?api_key=6a8697f20088728764ca372adbefcff9";
const source4 = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte={min_date}&release_date.lte={max_date}";
const requestURL = source2;


export const useMoviesData = () => {

    const [moviesData, setMoviesData] = useState({
        status: "loading",
        results: {
            poster_path: "lol.jpg",
            title: "SampleTitle",
            vote_average: 99.99,
            vote_count: "2 voters",
            genre_ids: [15, 99],
            overview: "Lorem ipsum GENERALUM",
            release_date: "Yesterday",
            backdrop_path: "lolBackdrp.jpg",
            id: "00001",
        },
    });

    useEffect(() => {

        const fetchMoviesData = async () => {

            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTg2OTdmMjAwODg3Mjg3NjRjYTM3MmFkYmVmY2ZmOSIsInN1YiI6IjY0ZTcyMjVhNTk0Yzk0MDBlMjVmMTAxYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.K607pZBIHN1IOKg31JxS5SlwbJPLAz8H03cZHzZBJH0'
                }
            };

            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&region=pl', options);

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const { page, results }
                    = await response.json();

                setMoviesData({
                    status: "succes",
                    page,
                    results
                    /*        poster_path,
                           title,
                           vote_average,
                           vote_count,
                           genre_ids,
                           overview,
                           release_date,
                           backdrop_path,
                           id, */
                })

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