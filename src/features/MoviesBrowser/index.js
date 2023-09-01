import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";
import MoviePage from "./MoviePage";

const MoviesBrowser = () => (
  <BrowserRouter basename="/movies-browser">
    <Navigation />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/movie/" component={MoviePage} />
      <Route path="/" component={MoviesList} />
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
