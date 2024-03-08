import React from "react";
import { Box, useTheme } from "@mui/material";

import BSquare from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";

const LevelCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          borderRight: "23px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: props?.level === "7" ? "12px" : "24px",
          paddingTop: "21.62px",
          background: props?.bg,
          width: "100%",
          borderRadius: "23px",
          overflow: "hidden",
          marginBottom: "10px",
        }}
      >
        <img
          style={{ position: "absolute", opacity: 0.4, left: "-30px" }}
          src={BSquare}
          alt="Big Squre"
        />
        <img
          style={{
            position: "absolute",
            opacity: 0.4,
            right: "-17px",
            top: "-52px",
          }}
          src={BSquare}
          alt="Big Squre"
        />
        <img
          style={{
            position: "absolute",
            opacity: 0.4,
            right: "100px",
            top: "3px",
          }}
          src={SSquare}
          alt="Big Squre"
        />
        <img
          style={{
            position: "absolute",
            opacity: 0.4,
            bottom: "-45px",
            right: "82px",
          }}
          src={SSquare}
          alt="Big Squre"
        />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "7px",
          }}
        >
          {props?.keyIcon && <img src={props?.keyIcon} alt="Key Icon" />}
          <p
            style={{
              fontSize: props?.keyIcon ? "15px" : "19.38px",
              fontWeight: "700",
              lineHeight: "21.8px",
              color: "white",
            }}
          >
            {props?.title}
          </p>
        </Box>
        <img
          style={{
            width: "100%",
            height:
              (!props?.keyIcon || props?.level === "5") &&
              props?.level !== "6" &&
              "60px",
            marginBottom: props?.level === "7" && "14px",
          }}
          src={props?.png}
          alt="Main Png"
        />
      </Box>
    </React.Fragment>
  );
};

export default LevelCard;
