import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import MoneyCard from "../assets/images/money_card_icon.svg";
import { Link, useNavigate } from "react-router-dom";

const DailyChecker = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          gap: "4px",
        }}
      >
        <p
          style={{
            fontSize: "11px",
            color: props.selectedDate
              ? "rgba(37, 41, 70, 1)"
              : "rgba(117, 117, 122, 1)",
          }}
        >
          {props.day}
        </p>
        <Box
          sx={{
            width: "44.43px",
            height: "8px",
            background: "rgba(186, 186, 188, 0.2)",
          }}
        />
        <Box sx={{ position: "relative", height: "18px" }}>
          <img src={props.icon} />
          {props.passedDate && (
            <img
              style={{ position: "absolute", right: "-10px" }}
              src={props.checker}
              alt="Icon"
            />
          )}
        </Box>
        <p
          style={{
            fontSize: "11px",
            color: props.selectedDate
              ? "rgba(37, 41, 70, 1)"
              : "rgba(117, 117, 122, 1)",
          }}
        >
          {props.amount}
        </p>
      </Box>
    </React.Fragment>
  );
};

export default DailyChecker;
