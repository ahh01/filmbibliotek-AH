// src/features/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [], // Favoritfilmer kommer att lagras i en array
  reducers: {
    // Lägg till en film i favoriter om den inte redan finns där
    addFavorite: (state, action) => {
      const existingMovie = state.find(
        (movie) => movie.imdbID === action.payload.imdbID
      );
      if (!existingMovie) {
        state.push(action.payload); // Lägg till filmen om den inte redan finns
      }
    },
    // Ta bort en film från favoriter baserat på dess imdbID
    removeFavorite: (state, action) => {
      return state.filter((movie) => movie.imdbID !== action.payload.imdbID);
    },
  },
});

// Exportera actions och reducer
export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
