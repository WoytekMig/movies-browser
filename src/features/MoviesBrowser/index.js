import React from "react";
import Navigation from "../../common/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import MoviePage from "./MoviePage";
import PopularMovies from "./PopularMovies";

const MoviesBrowser = () => (
  <BrowserRouter basename="/movies-browser">
    <Navigation />
    <Switch>
      <Route path="/movies" component={PopularMovies} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/movie/" component={MoviePage} />
      <Route path="/" component={PopularMovies} />
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
