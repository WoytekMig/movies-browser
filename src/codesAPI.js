export const API_KEY = "baca1cc9462be3b73a5e5722d6854eb5";
export const API_URL = "https://api.themoviedb.org/3";
export const ApiPopularPeople = "https://api.themoviedb.org/3/person/popular";
export const PersonImageAPI = "https://image.tmdb.org/t/p/w200/";
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const getMovieImageUrl = (source) =>
  `https://image.tmdb.org/t/p/original/${source}`;

export const getMovieApiUrls = (movieId) => {
  const MOVIE_API_URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
  const CREDITS_API_URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=${API_KEY}`;

  return { MOVIE_API_URL, CREDITS_API_URL };
};
