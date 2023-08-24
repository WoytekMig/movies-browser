import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PeopleList } from "./features/PeopleBrowser/PeopleList/index";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      </div>
      <div>
      <PeopleList />Popular People
      </div>
      <MoviesBrowser />
    
  </BrowserRouter>
);

export default App;
