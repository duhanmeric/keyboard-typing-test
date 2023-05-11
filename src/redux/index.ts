import { configureStore } from "@reduxjs/toolkit";
import wordReducer from "./wordSlice";
import gameSlice from "./gameSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice,
    words: wordReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
