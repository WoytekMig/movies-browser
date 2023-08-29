import Navigation from "../../common/Navigation";
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Pagination from "../../common/Pagination";
import PopularPeople from "./PopularPeople";
import MoviesList from "./MoviesList";
import MoviePage from "./MoviePage";
import mulan from "../../images/mulan.jpg";
import poster from "../../images/poster.png";

const MoviesBrowser = () => (
  <BrowserRouter>
    <Navigation />
    <MoviePage
      poster={poster}
      posterBig={mulan}
      title={"Mulan"}
      longTitle={"Mulan Long Title"}
      productionYear={2020}
      productionPlace={"China, Unateted States of America"}
      date={"5.30.2020"}
      tags={"Akcja"}
      rate={"7,8"}
      votes={335}
      description={
        "A young Chinese maiden disguises herself as a male warrior in order to save her father. Disguises herself as a male warrior in order to save her father. A young Chinese maiden disguises herself as a male warrior in order to save her father."
      }
      personPicture={poster}
      personName={"Liu Yifey"}
      personRole={"Mulan"}
    />
    <Switch>
      <Route path="/movies" component={MoviesList} />
      <Route path="/people" component={PopularPeople} />
    </Switch>
  </BrowserRouter>
);

export default MoviesBrowser;
