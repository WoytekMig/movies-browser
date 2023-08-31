import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import PopularPeople from "./PopularPeople";
import Profile from "./Profile";
import PopularMovies from "./PopularMovies";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <Profile />
    <Switch>
      <Route path="/movies" component={PopularMovies} />
      <Route path="/people" component={PopularPeople} />
    </Switch>
    <Pagination />
  </BrowserRouter>
);

export default MoviesBrowser;
