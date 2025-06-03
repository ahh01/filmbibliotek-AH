import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieSlice";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";
import SingleMovie from "./SingleMovie";

function MovieList() {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter((movie) =>
    movie.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMovieClick = async (movie) => {
    // Hämta mer information om filmen
    const response = await fetch(
      `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=77812762`
    );
    const data = await response.json();
    setSelectedMovie(data); // Sätt den valda filmen
  };

  return (
    <>
      {/* Sökfält */}
      <div className="p-4">
        <SearchBar searchQuery={searchQuery} onSearch={setSearchQuery} />
      </div>

      {/* Filmernas lista */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {loading && (
          <p className="text-center text-blue-600 text-lg">Loading...</p>
        )}
        {error && (
          <p className="text-center text-red-600 text-lg">
            Något gick fel: {error}
          </p>
        )}
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <div
              key={movie.imdbID}
              onClick={() => handleMovieClick(movie)} // Hämta mer information när filmen klickas
              className="cursor-pointer rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                {movie.Poster !== "N/A" ? (
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 rounded-t-lg flex items-center justify-center">
                    <span className="text-white text-lg">No Image</span>
                  </div>
                )}
              </div>
              <div className="p-3">
                <h2 className="text-lg font-semibold text-gray-800">
                  {movie.Title}
                </h2>
                <p className="text-gray-600 mt-2 text-sm">{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-xl text-gray-600">
            No movies found
          </p>
        )}
      </div>

      {/* Modal för vald film */}
      <SingleMovie
        isOpen={!!selectedMovie}
        onClose={() => setSelectedMovie(null)}
      >
        {selectedMovie && <MovieCard movie={selectedMovie} />}
      </SingleMovie>
    </>
  );
}

export default MovieList;
