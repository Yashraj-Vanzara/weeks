
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`
  }
};

export const url = 'https://api.themoviedb.org/3/movie/now_playing';
export const popular_url='https://api.themoviedb.org/3/movie/popular'
export const upcoming_url='https://api.themoviedb.org/3/movie/upcoming'
export const trending_url='https://api.themoviedb.org/3/movie/top_rated'
export const img_cdn="https://image.tmdb.org/t/p/w500/"
export const Supportedlang=[{code:"en", name:"English"}, {code:"hi", name:"Hindi"}, {code:"spanish", name:"Spanish"}] as const
export type LanguageCode = (typeof Supportedlang)[number]["code"]
