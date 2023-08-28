import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import MoviePage from "./MoviePage";
import PopularPeople from "./PopularPeople";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/movie" component={MoviePage} />
      <Route path="/movies" />
      <Route path="/people" component={PopularPeople} />
    </Switch>
    <Pagination />
  </BrowserRouter>
);

export default MoviesBrowser;
