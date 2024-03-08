import { createSlice } from "@reduxjs/toolkit";

const userProfileReducer = createSlice({
  name: "user",
  initialState: {
    userProfile: null,
  },
  reducers: {
    setUserProfile: (state, action) => {
      state.userProfile = action.payload;
    },
  },
});

export const { setUserProfile } = userProfileReducer.actions;
export default userProfileReducer.reducer;
