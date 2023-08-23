import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
      <MoviesBrowser />
    </div>
  </BrowserRouter>
);

export default App;
