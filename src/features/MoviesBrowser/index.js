import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";
import Profile from "./Profile";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <Profile />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
    </Switch>
    <Pagination />
  </BrowserRouter>
);

export default MoviesBrowser;
