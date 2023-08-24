import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { PeopleList } from "./features/PeopleList";


const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      </div>
      <div>
      <PeopleList />
      </div>
      <MoviesBrowser />
    
  </BrowserRouter>
);

export default App;
