import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WordState {
  gameState: "idle" | "started" | "ended";
}

const initialState: WordState = {
  gameState: "idle",
};

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      if (state.gameState !== "started") {
        state.gameState = "started";
      }
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { reset, startGame } = gameSlice.actions;

export default gameSlice.reducer;
