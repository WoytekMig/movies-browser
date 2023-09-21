import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Navigation from "./common/Navigation";
import PopularPeople from "./features/PopularPeople";
import SearchResult from "./features/SearchResult";
import MoviePage from "./features/MoviePage";
import PopularMovies from "./features/PopularMovies";
import Profile from "./features/Profile";

const App = () => (
  <HashRouter>
    <Navigation />
    <Switch>
      <Route exact path="/movies" component={PopularMovies} />
      <Route exact path="/people" component={PopularPeople} />
      <Route path="/movies/search" component={SearchResult} />
      <Route path="/people/search" component={SearchResult} />
      <Route path="/movie/:id" component={MoviePage} />
      <Route path="/person/:id" component={Profile} />
      <Route>
        <Redirect to="/movies" />
      </Route>
    </Switch>
  </HashRouter>
);

export default App;
