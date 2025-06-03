import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./features/movieSlice";
import favoritesReducer from "./features/favoritesSlice";
const store = configureStore({
  reducer: { favorites: favoritesReducer,
     movies: movieReducer },
});

export default store;
