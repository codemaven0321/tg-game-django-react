import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import MoneyCard from "../assets/images/money_card_icon.svg";
import { Link, useNavigate } from "react-router-dom";

const DailyChallenge = (props) => {
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
          background: "white",
          padding: "12px 22px 7px",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.03)",
          borderRadius: "7px",
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
        <Box sx={{ position: "relative", height: "18px" }}>
          <img src={props.icon} alt="Icon" />
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
        {props.passedChallenge ? (
          <img style={{ width: "14.88px" }} src={props.checker} />
        ) : (
          <Button
            variant={props.selectedDate ? "contained" : "outlined"}
            style={{
              padding: "3.78px 11.33px 5.67px 11.33px",
              fontSize: "8px",
              lineHeight: "9.44px",
              borderRadius: "18.89px",
              border:
                !props.selectedDate && "0.5px solid rgba(215, 215, 215, 1)",
              color: !props.selectedDate && "rgba(176, 176, 176, 1)",
              textTransform: "capitalize",
            }}
          >
            Claim
          </Button>
        )}
      </Box>
    </React.Fragment>
  );
};

export default DailyChallenge;
