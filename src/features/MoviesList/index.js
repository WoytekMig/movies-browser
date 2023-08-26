import React, { useState } from "react";
import MovieTile from "../../common/MovieTile";
import { MainContainer, StyledMainHeader } from "./styled";
import { useMoviesData } from "./useMoviesData";

export const MoviesList = () => {
    const moviesData = useMoviesData();

    return (
        <> <MainContainer>
            <StyledMainHeader>Popular movies</StyledMainHeader>

            {moviesData.status === "loading" ? (
                <StyledMainHeader>Please WAIT</StyledMainHeader>
            ) : moviesData.status === "error" ? (
                <StyledMainHeader>SOMETHING WENT WRONG, sorry.. </StyledMainHeader>
            ) : (
                moviesData.results.map(element => (
                    <React.Fragment key={element.id}>
                        <MovieTile
                            title={element.title}
                            year={element.release_date}
                            rating={element.vote_average}
                            votes={element.vote_count}
                        />
                    </React.Fragment>
                )))}

        </MainContainer>
        </>
    )

};