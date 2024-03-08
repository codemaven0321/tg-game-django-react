import { createSlice } from "@reduxjs/toolkit";

export const BackReducer = createSlice({
  name: "back_state",
  initialState: {
    value: ["/"],
    index: 0,
  },
  reducers: {
    setBackState: (state, action) => {
      state.value.push(action.payload);
    },
    increaseIndex: (state) => {
      state.index++;
    },
    decreaseIndex: (state) => {
      state.index--;
    },
  },
});

export const { setBackState, increaseIndex, decreaseIndex } =
  BackReducer.actions;
export default BackReducer.reducer;
