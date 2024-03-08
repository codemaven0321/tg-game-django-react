// middleware/userMiddleware.js
import axios from "axios";
import { setUserProfile } from "../features/userSlice";

export const getUserProfile = () => async (dispatch) => {
  try {
    let user_data = JSON.parse(localStorage.getItem('botInformation'));
    let user_id = user_data["id"];
   
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/user/${user_id}/`
    );

    let user_profile = response.data;
    user_profile["display_name"] = response.data["first_name"] + " " + response.data["last_name"];
    // console.log( user_profile);
    dispatch(setUserProfile(user_profile));
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

const userMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default userMiddleware;
