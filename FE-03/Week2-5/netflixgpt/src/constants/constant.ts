
export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMTc1YzkyMjE3NTk4ODVjZDNhMWRkMjliNzczMTgwMiIsIm5iZiI6MTc3MzI1MjI0Ni41ODIsInN1YiI6IjY5YjFhZTk2YzM4ODk4NWYxMjIxY2U0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KXufGwo6LQjt7i60h2dC0FCI8wW9F2gU1wEJARmhOFA'
  }
};

export const url = 'https://api.themoviedb.org/3/movie/now_playing';
export const popular_url='https://api.themoviedb.org/3/movie/popular'
export const upcoming_url='https://api.themoviedb.org/3/movie/upcoming'
export const trending_url='https://api.themoviedb.org/3/movie/top_rated'
export const img_cdn="https://image.tmdb.org/t/p/w500/"