import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PeopleList from "./features/PeopleList";
import Pagination from "./common/Pagination";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <Switch>
        <Route path="/movies" />
        <Route path="/people" component={PeopleList} />
      </Switch>
    </div>
    <Pagination />
    <MoviesBrowser />
  </BrowserRouter>
);
export default App;
