import MoviesBrowser from "./features/MoviesBrowser";
import Navigation from "./common/Navigation";
import { BrowserRouter } from "react-router-dom";
import Pagination from "./common/Pagination";

const App = () => (
  <BrowserRouter>
    <div>
      <Navigation />
    </div>
    <div>
      <Pagination />
      <MoviesBrowser />
    </div>
  </BrowserRouter>
);

export default App;
