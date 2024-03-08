import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";
import { getUserProfile } from "../middleware/userMiddleware";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";

import Navbar from "../components/Navbar";
import RightArrow from "../assets/images/arrow_right.svg";

const GenerateReferLink = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);

  React.useEffect(() => {
    dispatch(setBackState("/"));
    dispatch(increaseIndex());
    getReferLink();
  }, []);
  React.useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  let user_data = JSON.parse(localStorage.getItem('botInformation'));
  let user_id = user_data["id"];
  const [generated, setGenerated] = React.useState(false);
  const [referLink, setReferLink] = React.useState("");
  const [duplicated, setDuplicated] = React.useState(false);
  const [telegramId, setTelegramId] = React.useState(
    userProfile?.telegram_id || user_id
  );

  function generateRandomString(length) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }

    return result;
  }

  async function getReferLink() {
    const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/referral/${telegramId}/`,
    );

    if (response?.data?.status === "no_user") {
      setGenerated(false);
      setDuplicated(false);
      setReferLink("");
    } else {
      setGenerated(true);
      setDuplicated(false);
      setReferLink(
        `http://localhost:3000?start=${response.data.referral}`
      );
    }
    console.log(response);
  }

  const handleGenerateRiferLink = async () => {
    setDuplicated(false);
    const randomString = generateRandomString(6);
    if (randomString) {
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/referral/`,
        {
          referral: randomString,
          telegram_id: telegramId,
          referral_status: false,
        }
      );

      if (response?.data.status === "duplicate") {
        setDuplicated(true);
      } else {
        setGenerated(true);
        setReferLink(`http://tg-games.com?start=${randomString}`);
      }
    }
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Box sx={{ px: "21px", height: "100vh" }}>
        <Box sx={{ textAlign: "left", marginBottom: "15px" }}>
          <p
            style={{
              display: "inline",
              fontSize: "14px",
              fontWeight: "700",
              lineHeight: "14px",
              color: "#0098EA",
            }}
          >
            Referral Link
          </p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(169, 169, 169, 0.1)",
            px: "15px",
            borderRadius: "20px",
            marginBottom: "15px",
          }}
        >
          <input
            style={{
              border: "0",
              background: "rgba(169, 169, 169, 0)",
              outline: "none",
              width: "100%",
              height: "44px",
            }}
            value={referLink}
            disabled={!generated}
            type="text"
            placeholder="Generated Referred Link"
          />
          <img src={RightArrow} alt="Right Arrow Icon" />
        </Box>
        <Button
          className="poppines_font"
          sx={{
            flex: "1",
            background:
              "linear-gradient(87.02deg, #0098EA 19.69%, #32B6FD 93.81%)",
            p: "8px 24px",
            borderRadius: "40px",
            fontWeight: "600",
            fontSize: "14px",
            color: "white !important",
            textTransform: "none",
          }}
          disabled={!duplicated && generated}
          onClick={handleGenerateRiferLink}
        >
          Generate Refer Link
        </Button>
      </Box>
      <Stack sx={{ width: "300px", marginTop: "20px" }} spacing={2}>
        {generated ? (
          <Alert
            severity="success"
            style={{ backgroundColor: "#e9fbc4", color: "green" }}
          >
            <AlertTitle>Success</AlertTitle>
            Successfully — <strong>Generated!</strong>
          </Alert>
        ) : duplicated === "fail" ? (
          <Alert
            severity="error"
            style={{ backgroundColor: "#ffc2df", color: "red" }}
          >
            <AlertTitle>Error</AlertTitle>
            Failed — <strong>Duplicated Code!</strong>
          </Alert>
        ) : (
          ""
        )}
      </Stack>
    </Box>
  );
};

export default GenerateReferLink;
