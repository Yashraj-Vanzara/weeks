import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    trendingMovies: null,

    nowPlayingTailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },

    addTrailer: (state, action) => {
      state.nowPlayingTailer = action.payload;
    },
  },
});
export const { addNowPlayingMovies, addTrailer, addPopularMovies, addUpcomingMovies, addTrendingMovies } = movieSlice.actions;
export default movieSlice.reducer;
