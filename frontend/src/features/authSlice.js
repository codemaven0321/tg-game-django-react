import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const authProfileReducer = createSlice({
  name: "auth",
  initialState: {
    isAuthrized: false,
    access_token: null,
    refresh_token: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.isAuthrized = true
      state.access_token = action.payload.access;
      state.refresh_token = action.payload.refresh;
      localStorage.setItem("refresh_token", action.payload.refresh);
      axios.defaults.headers.common.Authorization =
        "Bearer " + state.access_token;

        // console.log(action)
    },
    setAccessToken: (state, action) => {
      state.isAuthrized = true
      state.access_token = action.payload.access;
      axios.defaults.headers.common.Authorization =
        "Bearer " + state.access_token;
        // console.log(action,"2")
    },
  },
});

export const { setAuthToken,setAccessToken } = authProfileReducer.actions;
export default authProfileReducer.reducer;
