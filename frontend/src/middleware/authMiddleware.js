// middleware/userMiddleware.js
import axios from "axios";
import { setAuthToken, setAccessToken } from "../features/authSlice";

export const getAuthToken = (referral) => async (dispatch) => {

  let user_data = JSON.parse(localStorage.getItem('botInformation'));
  // console.log( user_data[""]);
  // console.log("telegram_id = " + user_data);
  try {
    const payload = new FormData();
    payload.append("username", user_data["username"]);
    payload.append("first_name", user_data["first_name"]);
    payload.append("last_name", user_data["last_name"]);
    
    payload.append("password", "Qwer~1234");
    payload.append("birthday", "1970-01-01");
    payload.append("gender", "M");
    payload.append("language", "en");
    payload.append("region", "US");
    payload.append("telegram_id", user_data["id"]);
    payload.append("avatar", user_data["photo_url"]);
    payload.append("is_superuser", 0);
    payload.append("is_staff", 1);
    payload.append("is_active",  1);
    payload.append("referral", '');

    if (referral) payload.append("referral", referral);

    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/users/`,
      payload
    );
  } catch (error) {
    console.error("Error creating user profile:", error);
  }

  try {
    const payload2 = new FormData();
    payload2.append("username", user_data.username);
    payload2.append("password", "Qwer~1234");

    const response2 = await axios.post(
      `${process.env.REACT_APP_API_URL}/token/`,
      payload2
    );

    dispatch(setAuthToken(response2.data));
  } catch (error) {
    console.error("Error fetching user profile:", error);
  }
};

const authMiddleware = (store) => (next) => (action) => {
  next(action);
};

export default authMiddleware;
