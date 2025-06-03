import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../features/favoritesSlice";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import ReactGA from "react-ga4";

function MovieCard({ movie, showDelete, showFavorite = true }) {
  const dispatch = useDispatch();

  // Hämta favoriter från Redux state
  const favorites = useSelector((state) => state.favorites);

  // Kolla om filmen redan finns i favoriter
  const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID);

  // Lägg till filmen i favoriter
  function handleAddToFavorite() {
    dispatch(addFavorite(movie));
    ReactGA.event({
      category: "Favorites",
      action: "Add to favorites",
      label: movie.Title,
    });
  }

  // Ta bort filmen från favoriter
  function handleRemoveFromFavorite() {
    dispatch(removeFavorite(movie));
  }

  return (
    <div className="movie-card p-4 bg-white shadow-lg rounded-lg max-w-md relative flex flex-col h-full">
      <h3 className="text-lg font-semibold text-gray-800">{movie.Title}</h3>
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-md mt-2"
      />
      <div className="flex-grow">
        <p className="mt-2 text-sm text-gray-600">
          <strong>Year:</strong> {movie.Year}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Genre:</strong> {movie.Genre}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Actors:</strong> {movie.Actors || "Not available"}
        </p>
        <p className="text-sm text-gray-600">
          <strong>Description:</strong> {movie.Plot || "Not available"}
        </p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          {showFavorite && (
            <>
              {isFavorite ? (
                <FaHeart
                  className="text-red-500 cursor-pointer"
                  onClick={handleRemoveFromFavorite}
                />
              ) : (
                <FaRegHeart
                  className="text-gray-500 cursor-pointer"
                  onClick={handleAddToFavorite}
                />
              )}
            </>
          )}
        </div>
        <div>
          {showDelete && (
            <button
              onClick={handleRemoveFromFavorite}
              className="flex items-center gap-2 text-red-600 hover:text-red-800"
              title="Ta bort från favoriter"
            >
              <FaTrash />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
