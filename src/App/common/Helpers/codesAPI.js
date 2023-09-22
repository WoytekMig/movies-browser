export const API_KEY = "baca1cc9462be3b73a5e5722d6854eb5";
export const API_URL = "https://api.themoviedb.org/3";
export const ApiPopularPeople = "https://api.themoviedb.org/3/person/popular";
export const PersonImageAPI = "https://image.tmdb.org/t/p/w200/";
export const IMG_URL = "https://image.tmdb.org/t/p/w500/";

export const getMovieImageUrl = (source) =>
  `https://image.tmdb.org/t/p/w1280/${source}`;

export const getDetailsApiUrls = (id, type) => {
  const DETAILS_API_URL = `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`;
  const CREDITS_API_URL = `https://api.themoviedb.org/3/${type}/${id}/${
    type === "movie" ? "credits" : "movie_credits"
  }?api_key=${API_KEY}`;

  return { DETAILS_API_URL, CREDITS_API_URL };
};
