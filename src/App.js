import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PeopleList } from "./features/PeopleList";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <PeopleList />
      <MoviesBrowser />
    </div>
  </BrowserRouter>
);

export default App;
