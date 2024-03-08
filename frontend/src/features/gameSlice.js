import { createSlice } from "@reduxjs/toolkit";

export const gameStateReducer = createSlice({
  name: "game_state",
  initialState: {
    value: false,
  },
  reducers: {
    setGameState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGameState } = gameStateReducer.actions;
export default gameStateReducer.reducer;
