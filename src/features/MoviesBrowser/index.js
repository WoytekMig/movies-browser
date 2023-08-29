import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/" component={MoviesList} />
    </Switch>
    <Pagination />
  </BrowserRouter>
);

export default MoviesBrowser;
