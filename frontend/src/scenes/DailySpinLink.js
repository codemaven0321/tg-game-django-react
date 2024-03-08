import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { Box, Alert, AlertTitle, Button } from "@mui/material";
import { getUserProfile } from "../middleware/userMiddleware";

import Navbar from "../components/Navbar";

const GenerateReferLink = () => {
  const dispatch = useDispatch();
  const { money, setMoney } = useState(0);
  const userProfile = useSelector((state) => state.user.userProfile);
  // const [telegramId, setTelegramId] = React.useState(
  //   userProfile?.telegram_id || 123123
  // );

  React.useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);

  const handleClick = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/spin/`,
      {
        telegram_id: userProfile?.telegram_id,
      }
    );
    console.log(response);
    if (response?.data.status == "already_exist") {
      setShowAlert({ visible: true, title: "You already get point" });
    } else if (response.data.status == "success") {
      setShowAlert({ visible: true, title: "You got +50 point today" });
    } else {
      setShowAlert({ visible: true, title: "A serious error is occured." });
    }
  };

  const [showAlert, setShowAlert] = useState({ visible: false, title: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAlert({ visible: false, title: "" });
    }, 5000); // Tempo em milissegundos antes do alerta desaparecer (neste caso, 5 segundos)

    return () => clearTimeout(timer);
  }, [showAlert.visible]);

  return (
    <Box sx={{ position: "relative" }}>
      {showAlert.visible && (
        <Alert
          severity="info"
          style={{
            position: "absolute",
            top: "96px",
            width: "100%",
            margin: "12px",
            zIndex: 99,
            border: "1px solid #0098EA",
          }}
          onClose={() => {
            setShowAlert({ visible: false, title: "" });
          }}
        >
          {showAlert.title}
        </Alert>
      )}
      <Navbar />
      <Box
        sx={{
          px: "21px",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          className="poppines_font"
          sx={{
            flex: "1",
            color: `${money > 0 ? "#0098EA !important" : "#fff !important"}`,
            background: `${
              money > 0
                ? "transparent"
                : "linear-gradient(87.02deg, #0098EA 19.69%, #32B6FD 93.81%)"
            }`,

            p: "8px 24px",
            fontWeight: "600",
            fontSize: "36px",
            textTransform: "none",
          }}
          onClick={handleClick}
        >
          {money > 0 ? Math.ceil(Math.random() * 10) * 100 : "Go"}
        </Button>
      </Box>
    </Box>
  );
};

export default GenerateReferLink;
