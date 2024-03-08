import { createSlice } from "@reduxjs/toolkit";

export const footerStateReducer = createSlice({
  name: "footer_state",
  initialState: {
    value: 1,
  },
  reducers: {
    setFooterState: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setFooterState } = footerStateReducer.actions;
export default footerStateReducer.reducer;
