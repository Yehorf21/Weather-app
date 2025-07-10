import { configureStore } from "@reduxjs/toolkit";
import weatherSlice from './reducers/weather.ts';
import favoritesSlice from './reducers/favorites.ts';

export const store = configureStore({
  reducer: {
    weather: weatherSlice,
    favorites: favoritesSlice,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;