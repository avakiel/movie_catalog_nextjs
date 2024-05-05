import { Movie } from "@/interface/movie.interface";
import MovieCard from "../MovieCard/MovieCard";

interface ListProps {
    movies: Movie[]
}

export default function List({ movies }: ListProps) {
    return (
      <div className="flex flex-wrap gap-8 justify-center h-full pb-8">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  };