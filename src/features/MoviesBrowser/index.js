import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";
import MoviePage from "./MoviePage";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <MoviePage />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
