import { useState } from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledMainHeader } from "./styled";
import { useMoviesData } from "./useMoviesData";

export const MoviesList = () => {
    /*  const moviesData = useMoviesData(); */


    console.log(moviesData);

    console.log("sprawdzamy1:", moviesData);
    console.log("page:", moviesData.page);
    console.log("object1:", moviesData.results[0].id);

    return (
        <> <MainContainer>
            <StyledMainHeader>Popular movies</StyledMainHeader>
            {/*             <button onClick={() => { fetchMoviesData(); console.log("klik !"); setTimeout(console.log(moviesData), 1000); }}>CLICK</button> */}



            for (const element of moviesData.results)  {
                <MovieTile title={moviesData.element.title}
                    year={moviesData.element.release_date}

                    rating={moviesData.element.vote_average}
                    votes={moviesData.element.vote_count} />
            }



            {/* 
        <MovieTile title={moviesData.title}
            year={moviesData.release_date}
            tag={moviesData.tag}
            rating={moviesData.vote_average}
            votes={moviesData.vote_count} />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile />
        <MovieTile /> */}
        </MainContainer>
        </>
    )

};