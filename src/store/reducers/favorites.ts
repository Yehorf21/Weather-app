import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  // store only IDs
  favorites: [] as string[],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<string[]>) => {
      state.favorites = action.payload;
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      state.favorites = state.favorites.filter(favorite => favorite !== action.payload);
    },
  }
});

export default favoritesSlice.reducer;
export const { actions } = favoritesSlice;