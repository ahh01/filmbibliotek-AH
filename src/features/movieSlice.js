import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// här skapar jag min fetch med async thunk
export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies", // Här ger jag ett namn för action-typen inuti måsvingarna
  async () => {
    const response = await fetch(
      "http://www.omdbapi.com/?apikey=77812762&s=movie&type=movie"
    );
    
    const data = await response.json();
    console.log(data)
    return data.Search; // här returneras data till reducern
    
  }
);

// skapar en slice för att hantera tillstånd och reducers som ska skickas till store
const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },

  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
