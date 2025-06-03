import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const FavoritePage = () => {
  const favorites = useSelector((state) => state.favorites);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Favorite Movies</h1>
      <div className="movie-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-4">
        {favorites.length > 0 ? (
          favorites.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} showDelete showFavorite={false} />
          ))
        ) : (
          <p className="text-lg text-gray-600">No favorite movies added.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritePage;
