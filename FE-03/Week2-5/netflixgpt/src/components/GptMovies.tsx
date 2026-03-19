import { useSelector } from "react-redux";
import type { RootState } from "../utils/appStore";
import MovieList from "./MovieList";

const GptMovies = () => {
  const { movienames, movieResults } = useSelector(
    (store: RootState) => store.gpt,
  );
  if (!movienames) return null;
  if (!movieResults) return null;
  return (
    <div className="p-4 m-4 bg-black/80 text-white">
      
      <div>
        
        {movienames.map((movie, index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovies;
