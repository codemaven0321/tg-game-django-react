import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { recordData, TGCoin, USDTCoin, TetherCoin } from "../Constant";

const globalReducer = createSlice({
  name: "global",
  initialState: {
    data: { rankingData: [], recordData },
  },
  reducers: {
    setGlobalData: (state, action) => {
      state = action.payload;
    },
    patchGlobalData: (state, action) => {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

const { setGlobalData, patchGlobalData } = globalReducer.actions;
export default globalReducer.reducer;

export const getRankingData = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/tournament/1/`
    );
    dispatch(
      patchGlobalData({
        rankingData: response.data.map((item) => ({
          ...item,
          tgCoin: TGCoin,
          usdtCoin: USDTCoin,
        })),
      })
    );
  } catch (error) {
    console.error("Error getRankingData:", error);
  }
};
