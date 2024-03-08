import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Vector from "../assets/images/vector.svg";
import VectorShape from "../assets/images/vector_shape.svg";
import UpTo from "../assets/images/Upto.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";

const SurveyCard = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Box
        sx={{
          width: "100%",
          background: props.bgColor,
          borderRadius: "19px",
          marginBottom: "9px",
          overflow: "hidden",
          position: "relative",
          paddingBottom: "12.79px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "12px",
            paddingBottom: "15px",
            zIndex: 1,
          }}
        >
          <p
            style={{
              fontSize: "21px",
              fontWeight: "600",
              color: "white",
              paddingLeft: "15.28px",
            }}
          >
            {props.title}
          </p>
          <p
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              padding: "8px 20px",
              borderTopLeftRadius: "31.68px",
              borderBottomLeftRadius: "31.68px",
              fontSize: "10.9px",
              letterSpacing: "-0.4",
              lineHeight: "15.84px",
              color: "white",
            }}
          >
            12 Surveys
          </p>
        </Box>
        <img src={Vector} alt="Vector" />
        <img
          style={{ position: "absolute", top: "50px", left: "0" }}
          src={VectorShape}
          alt="Vector Shape"
        />
        <Box sx={{ width: "100%", textAlign: "right" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3px",
              background: "rgba(0, 0, 0, 0.4)",
              width: "92px",
              borderRadius: "31.68px",
              float: "right",
              marginRight: "10px",
            }}
          >
            {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "3px",
                }}
              >
                <p
                  style={{
                    fontSize: "11.9px",
                    lineHeight: "15.84px",
                    letterSpacing: "-0.4",
                    fontWeight: "400",
                    color: "white",
                  }}
                >
                  Up to
                </p>
                <p
                  style={{
                    fontSize: "14.43px",
                    fontWeight: "600",
                    color: "white",
                  }}
                >
                  2000
                </p>
              </Box> */}
            <img src={UpTo} alt="Card" />
            <img src={MoneyCardIcon} alt="Card" />
          </Box>
        </Box>
        <img
          src={props.icon}
          style={{
            position: "absolute",
            top: props.top,
            left: props.left,
            zIndex: 1,
          }}
          alt="Main Image"
        />
        <img
          src={SSquare}
          style={{
            position: "absolute",
            top: "162px",
            opacity: 0.3,
            left: "215px",
          }}
          alt="Main Image"
        />
        <img
          src={SSquare}
          style={{
            position: "absolute",
            top: "21px",
            opacity: 0.3,
            left: "182px",
          }}
          alt="Main Image"
        />
        <img
          src={BSquare}
          style={{
            position: "absolute",
            top: "-25px",
            opacity: 0.3,
            left: "214px",
          }}
          alt="Main Image"
        />
        <img
          src={BSquare}
          style={{
            position: "absolute",
            top: "12px",
            opacity: 0.3,
            left: "-27px",
          }}
          alt="Main Image"
        />
      </Box>
    </Button>
  );
};

export default SurveyCard;
