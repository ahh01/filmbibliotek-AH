import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    movie: movieReducer
  }
     
});

export default store;
