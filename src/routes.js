export const toMovies = () => "/movies";
export const toPeople = () => "/people";
export const toMovie = ({ movieId } = { movieId: ":movieId" }) => `/movies/${movieId}`;
export const toPerson = ({ personId } = { personId: ":personId" }) => `/people/${personId}`;