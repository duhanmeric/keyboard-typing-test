import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface WordState {
  wordArr: string[][];
  wordPerLine: number;
  currentRow: number;
  currentColumn: number;
  topRowIndex: number;
  isLastWord: boolean;
  isGameEnded: boolean;
  currentWord: string;
}

const initialState: WordState = {
  wordArr: [[]],
  wordPerLine: 10,
  currentRow: 0,
  currentColumn: 0,
  topRowIndex: 0,
  isLastWord: false,
  isGameEnded: false,
  currentWord: "",
};

export const wordSlice = createSlice({
  name: "words",
  initialState,
  reducers: {
    defineWordArr: (state, action: PayloadAction<string>) => {
      const _wordsArr = action.payload
        .replaceAll("\n", "")
        .split(" ")
        .filter((word) => word.trim() !== "")
        .map((word) => word.replace(/[.,;:!?]/g, ""));

      const tmp = [];
      for (let i = 0; i < _wordsArr.length; i += state.wordPerLine) {
        const row = _wordsArr.slice(i, i + state.wordPerLine);
        tmp.push(row);
      }

      state.wordArr = tmp;
      state.currentWord = tmp[0][0];
      state.topRowIndex = Math.max(0, state.currentRow - 2);
    },
    nextWord: (state) => {
      if (state.currentColumn >= state.wordPerLine - 1) {
        state.currentRow++;
        state.currentColumn = 0;
        state.topRowIndex += 1;
      } else {
        state.currentColumn += 1;
      }

      if (state.topRowIndex >= state.wordArr.length) {
        state.isLastWord = true;
        state.isGameEnded = true;
      } else {
        state.currentWord =
          state.wordArr[state.currentRow][state.currentColumn];
      }
    },
    checkWord: (state, action: PayloadAction<string>) => {
      if (state.currentWord === action.payload) {
        console.log("doğru");
      } else {
        console.log("yanlış");
      }
    },
    reset: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { defineWordArr, nextWord, checkWord, reset } = wordSlice.actions;

export default wordSlice.reducer;
