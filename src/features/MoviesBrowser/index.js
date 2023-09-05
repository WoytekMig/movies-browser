import React from "react";
import Navigation from "../../common/Navigation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import SearchResult from "./SearchResult";
import MoviePage from "./MoviePage";
import PopularMovies from "./PopularMovies";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./Profile";

const MoviesBrowser = () => (
  <BrowserRouter basename="/movies-browser">
    <Navigation />
    <Switch>
      <Route path="/movies" component={PopularMovies} />
      <Route path="/people" component={PopularPeople} />
      <Route path="/search" component={SearchResult} />
      <Route path="/movie/" component={MoviePage} />
      <Route path="/person/" component={Profile} />
      <Route>
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
