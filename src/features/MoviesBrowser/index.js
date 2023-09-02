import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";
import SearchResult from "./SearchResult";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/search" component={SearchResult} /> {}
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
