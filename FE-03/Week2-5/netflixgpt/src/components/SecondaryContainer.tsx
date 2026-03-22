import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import type { RootState } from "../utils/appStore";

const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movie);
  return (
    <div className="relative z-99 text-white bg-black ">
      <div className="  lg:-mt-40 relative z-99">
        {/* @ts-expect-error if not error */}
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />

        {/* @ts-expect-error if not error */}
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        {/* @ts-expect-error if not error */}
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        {/* @ts-expect-error if not error */}
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
