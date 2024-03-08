import { configureStore } from "@reduxjs/toolkit";
import footerReducer from "../features/footerSlice";
import gameStateReducer from "../features/gameSlice";
import BackReducer from "../features/navbarSlice";
import userProfileReducer from "../features/userSlice";
import authProfileReducer from "../features/authSlice";
import userMiddleware from "../middleware/userMiddleware";
import authMiddleware from "../middleware/authMiddleware";
import globalReducer from "../features/globalSlice";

export default configureStore({
  reducer: {
    footerState: footerReducer,
    gameState: gameStateReducer,
    backState: BackReducer,
    user: userProfileReducer,
    auth: authProfileReducer,
    global: globalReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    authMiddleware,
    userMiddleware,
  ],
});
