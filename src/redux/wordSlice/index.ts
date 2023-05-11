import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type CurrentWordType = {
  word: string;
  status: "none" | "correct" | "incorrect";
};

export interface WordState {
  wordArr: { word: string; status: string }[][];
  wordPerLine: number;
  currentRow: number;
  currentColumn: number;
  topRowIndex: number;
  isLastWord: boolean;
  isGameEnded: boolean;
  correctWords: number;
  wrongWords: number;
}

const initialState: WordState = {
  wordArr: [[{ word: "", status: "none" }]],
  wordPerLine: 10,
  currentRow: 0,
  currentColumn: 0,
  topRowIndex: 0,
  isLastWord: false,
  isGameEnded: false,
  correctWords: 0,
  wrongWords: 0,
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
        const row = _wordsArr
          .slice(i, i + state.wordPerLine)
          .map((word) => ({ word, status: "none" } as CurrentWordType)); // Update this line

        tmp.push(row);
      }

      state.wordArr = tmp;
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
      }
    },
    checkWord: (state, action: PayloadAction<string>) => {
      const currentWordItem = state.wordArr[state.currentRow][
        state.currentColumn
      ] as CurrentWordType;

      if (currentWordItem.word === action.payload) {
        currentWordItem.status = "correct";
        state.correctWords += 1;
      } else {
        currentWordItem.status = "incorrect";
        state.wrongWords += 1;
      }
    },
    resetWordStat: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { defineWordArr, nextWord, checkWord, resetWordStat } =
  wordSlice.actions;

export default wordSlice.reducer;
