import Card from "./Card";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList = ({ title, movies }: MovieListProps) => {
  console.log("list", movies);
  return (
    <div className="px-6">
      <h1 className="font-bold text-4xl py-4">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar ">
      
      <div className="flex">
        {movies?.map((mov) => (
          <Card key={mov.id} posterPath={mov.poster_path} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default MovieList;
