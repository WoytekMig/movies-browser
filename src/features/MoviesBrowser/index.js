import Navigation from "../../common/Navigation";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import PopularPeople from "./PopularPeople";
import SearchResult from "./SearchResult";
import MoviePage from "./MoviePage";
import PopularMovies from "./PopularMovies";
import Profile from "./Profile";

const MoviesBrowser = () => (
  <HashRouter>
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
  </HashRouter>
);

export default MoviesBrowser;
