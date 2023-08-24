export const toMovies = () => '/movies';
export const toPeople = () => '/people';
export const toMovie = ({ movieId = ':movieId' }) => `/movies/${movieId}`;
export const toPerson = ({ personId = ':personId' }) => `/people/${personId}`;
