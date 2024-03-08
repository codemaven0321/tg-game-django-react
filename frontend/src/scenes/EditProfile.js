import React, { useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../middleware/userMiddleware";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

import RightArrow from "../assets/images/arrow_right.svg";
import France_Flag from "../assets/images/France_Flag.svg";
import MaleIcon from "../assets/images/male_icon.svg";
import FemaleIcon from "../assets/images/female_icon.svg";
import OtherIcon from "../assets/images/other_gender_icon.svg";
import CloseIcon from "../assets/images/close.svg";
import WonProfileBg from "../assets/images/won_profile_bg.svg";
import BProfileIcon from "../assets/images/BProfileIcon.svg";
import PenIcon from "../assets/images/white_pen.svg";
import Camera from "../assets/images/typcn_camera.svg";

import { LanguageFlags, Countries, Languages } from "../Constant";

const EditProfile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const [userName, setUserName] = React.useState(userProfile?.display_name || "Maven1234");
  const [editUserName, setEditUserName] = React.useState(false);
  const [region, setRegion] = React.useState(userProfile?.region || "FR");
  const [birthday, setBirthday] = React.useState(
    dayjs(userProfile?.birthday) || dayjs("1990-01-01")
  );
  const [editBirthday, setEditBirthday] = React.useState(false);
  const [language, setLanguage] = React.useState(userProfile?.language || "fr");
  const [gender, setGender] = React.useState(userProfile?.gender || "M");

  const updateUserInfo = async () => {
    const sendData = {
      id: userProfile?.userName,
      username: userName,
      // birthday,
      gender,
      language,
      region,
    };
    try {
      let user_data = JSON.parse(localStorage.getItem('botInformation'));
      let user_id = user_data["id"];
     
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/user/${user_id}/`,
        sendData
      );
    } catch (error) {
      console.error("Error updating user info:", error);
    }
  };

  useEffect(() => {
    updateUserInfo();
  }, [userName, region, birthday, language, gender]);

  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Box sx={{ padding: "20px" }}>
        <Box sx={{ position: "relative", marginBottom: "58px" }}>
          <img src={WonProfileBg} alt="bg" />
          <img
            style={{
              position: "absolute",
              width: "23px",
              height: "23px",
              bottom: "19px",
              right: "13px",
            }}
            src={PenIcon}
            alt="Pen Icon"
          />
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                bottom: "0",
                transform: "translate(100%, 50%)",
              }}
            >
              <svg
                width="117"
                height="117"
                viewBox="0 0 117 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="58.5"
                  cy="58.5"
                  r="56"
                  stroke="url(#paint0_linear_5_18894)"
                  strokeWidth="5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_18894"
                    x1="5.48439"
                    y1="74.9531"
                    x2="52.0226"
                    y2="-0.081653"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0098EA" />
                    <stop offset="0.861496" stopColor="#3940BE" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <img
              src={userProfile?.avatar || BProfileIcon}
              style={{
                position: "absolute",
                transform: "translate(-43%, -53% )",
                width: "107px", // Set the width of the image
                height: "107px", // Set the height of the image
                borderRadius: "50%",
              }}
              alt="Profile Icon"
            />
            <Box
              sx={{
                padding: "3px",
                width: "27px",
                height: "27px",
                borderRadius: "50%",
                background: "rgba(4, 146, 231, 1)",
                position: "absolute",
                bottom: "-65px",
                left: "49%",
              }}
            >
              <img src={Camera} style={{}} alt="Camera Icon" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          justifyContent: "flex-start",
          px: "21px",
          gap: "17px",
        }}
      >
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <label
            style={{
              fontSize: "13px",
              color: "rgba(50, 52, 56, 0.8)",
            }}
            htmlFor="username"
          >
            Name
          </label>
          <Box
            sx={{
              marginTop: "14.46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(169, 169, 169, 0.1)",
              px: "15px",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <input
              id="username"
              style={{
                border: "0",
                background: "rgba(169, 169, 169, 0)",
                outline: "none",
                width: "100%",
                height: "53px",
              }}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              type="text"
              disabled={!editUserName}
            />
            <p
              style={{
                fontSize: "15px",
                fontWeight: "500",
                color: "rgba(0, 152, 234, 1)",
                cursor: "pointer",
              }}
              onClick={() => setEditUserName(!editUserName)}
            >
              {!editUserName ? "Edit" : "Save"}
            </p>
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <label
            style={{
              fontSize: "13px",
              color: "rgba(50, 52, 56, 0.8)",
            }}
            htmlFor="region"
          >
            Region
          </label>
          <Box
            sx={{
              marginTop: "14.46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(169, 169, 169, 0.1)",
              px: "15px",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "13px" }}>
              <img src={LanguageFlags[region] || France_Flag} alt="Flag" />

              <FormControl sx={{ width: "270px" }} fullWidth>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={region}
                  label="Region"
                  onChange={(e) => setRegion(e.target.value)}
                  sx={{
                    width: "100%",
                    paddingLeft: "0px",
                    "& #demo-simple-select": {
                      paddingLeft: "0",
                    },
                  }}
                >
                  {Object.keys(Countries).map((item, index) => {
                    return (
                      <MenuItem key={index} value={item}>
                        {Countries[item]}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </Box>

            {/* <img src={RightArrow} alt="Right Arrow Icon" /> */}
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <label
            style={{
              fontSize: "13px",
              color: "rgba(50, 52, 56, 0.8)",
            }}
            htmlFor="birthday"
          >
            Birthday
          </label>
          <Box
            sx={{
              marginTop: "14.46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(169, 169, 169, 0.1)",
              px: "15px",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <input
              id="birthday"
              style={{
                border: "0",
                background: "rgba(169, 169, 169, 0)",
                outline: "none",
                width: "100%",
                height: "53px",
              }}
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              type="text"
              disabled
            />

            <img
              style={{ cursor: "pointer" }}
              onClick={() => setEditBirthday(true)}
              src={RightArrow}
              alt="Right Arrow Icon"
            />
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <label
            style={{
              fontSize: "13px",
              color: "rgba(50, 52, 56, 0.8)",
            }}
            htmlFor="language"
          >
            Language
          </label>
          <Box
            sx={{
              marginTop: "14.46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(169, 169, 169, 0.1)",
              px: "15px",
              borderRadius: "20px",
              width: "100%",
            }}
          >
            <FormControl sx={{ width: "300px" }} fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Region"
                onChange={(e) => setLanguage(e.target.value)}
                sx={{
                  width: "100%",
                  paddingLeft: "0px",
                  "& #demo-simple-select": {
                    paddingLeft: "0",
                  },
                }}
              >
                {Object.keys(Languages).map((item, index) => {
                  return (
                    <MenuItem key={index} value={item}>
                      {Languages[item]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box sx={{ width: "100%", textAlign: "left" }}>
          <label
            style={{
              fontSize: "13px",
              color: "rgba(50, 52, 56, 0.8)",
            }}
            htmlFor="language"
          >
            Gender
          </label>
          <Box
            sx={{
              marginTop: "14.46px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                padding: "12px 32px",
                borderRadius: "20px",
                border: gender === "M" ? "2px solid #0098EA" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(169, 169, 169, 0.1)",
                cursor: "pointer",
              }}
              onClick={() => setGender("M")}
            >
              <img src={MaleIcon} alt="Gender Icon" />
              <p
                style={{
                  color: gender === "M" ? "#0098EA" : "#A4A4A4",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "24.7px",
                }}
              >
                Male
              </p>
            </Box>
            <Box
              sx={{
                padding: "12px 32px",
                borderRadius: "20px",
                border: gender === "F" ? "2px solid #0098EA" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(169, 169, 169, 0.1)",
                cursor: "pointer",
              }}
              onClick={() => setGender("F")}
            >
              <img src={FemaleIcon} alt="Gender Icon" />
              <p
                style={{
                  color: gender === "F" ? "#0098EA" : "#A4A4A4",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "24.7px",
                }}
              >
                Female
              </p>
            </Box>
            <Box
              sx={{
                padding: "12px 32px",
                borderRadius: "20px",
                border: gender === "O" ? "2px solid #0098EA" : "none",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(169, 169, 169, 0.1)",
                cursor: "pointer",
              }}
              onClick={() => setGender("O")}
            >
              <img src={OtherIcon} alt="Gender Icon" />
              <p
                style={{
                  color: gender === "O" ? "#0098EA" : "#A4A4A4",
                  fontSize: "13px",
                  fontWeight: "500",
                  lineHeight: "24.7px",
                }}
              >
                Other
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100vh",
          background: "rgba(0, 0, 0, 0.44)",
          top: "0",
          left: "0",
          alignItems: "flex-end",
          justifyContent: "center",
          display: editBirthday ? "flex" : "none",
          transition: "all 0.4s",
        }}
      >
        <Box
          sx={{
            pt: "12px",
            position: "relative",
            background: "white",
            width: "100%",
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
          }}
        >
          <img
            style={{
              position: "absolute",
              top: "12px",
              right: "16px",
              cursor: "pointer",
            }}
            src={CloseIcon}
            alt="Close Icon"
            onClick={() => setEditBirthday(false)}
          />
          <Box sx={{ marginBottom: "29px" }}>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "#252946",
              }}
            >
              Birthday
            </p>
          </Box>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
              value={birthday}
              onChange={(newValue) => setBirthday(newValue)}
              views={["year", "month", "day"]}
              format="YYYY-MM-DD"
            />
          </LocalizationProvider>
        </Box>
      </Box>
    </Box>
  );
};

export default EditProfile;
