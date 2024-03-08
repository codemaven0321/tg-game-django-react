import React, { useEffect, useState } from "react";
import { Box, Hidden, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";

import CrownIcon from "../assets/images/Crown.svg";
import WhiteCrown from "../assets/images/HalfCrownWhite.svg";
import EmptyCrown from "../assets/images/HalfCrown.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";
import ArrowRight from "../assets/images/rightArrow.svg";

const PointSystemCard = (props) => {
  const currentFooter = useSelector((state) => state.backState.value);
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();
  const handleClickEvent = (url) => {
    const currentUrl =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    dispatch(
      setBackState(
        currentUrl == "" ||
          currentUrl == " " ||
          currentUrl == "undefined" ||
          currentUrl == null
          ? "/"
          : "/" + currentUrl
      )
    );
    dispatch(increaseIndex());
    navigate(url);
  };
  return (
    <React.Fragment>
      <Box
        sx={{ width: "119px", cursor: "pointer" }}
        onClick={() => handleClickEvent(props.redirectUrl)}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            background: props.bgColor,
            borderRadius: "19.9px",
            padding: "11px",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <img
            style={{
              position: "absolute",
              width: "43px",
              left: "70px",
              top: "21px",
              opacity: 0.4,
            }}
            src={SSquare}
            alt="Square"
          />
          <img
            style={{
              position: "absolute",
              width: "43px",
              top: "111px",
              left: "86px",
              opacity: 0.4,
            }}
            src={SSquare}
            alt="Square"
          />
          <img
            style={{
              position: "absolute",
              width: "105px",
              left: "-54px",
              top: "20px",
              opacity: 0.4,
            }}
            src={BSquare}
            alt="Square"
          />
          <img
            style={{
              position: "absolute",
              width: "105px",
              top: "-11px",
              left: "92px",
              opacity: 0.4,
            }}
            src={BSquare}
            alt="Square"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
              border: "0px, 0px, 5.97px, 0px",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: theme.bgColor[1],
                paddingRight: "2px",
                paddingLeft: "13px",
                borderRadius: "27.11px",
                marginRight: "5px",
              }}
            >
              <p
                className="poppines_font"
                style={{
                  fontSize: "12.35px",
                  color: theme.palette.white[0],
                  marginRight: "2px",
                }}
              >
                {props.amount}
              </p>
              <img
                style={{ width: "14.3px" }}
                src={MoneyCardIcon}
                alt="Money Card"
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={CrownIcon}
                style={{ width: "13.3px", height: "11.4px" }}
                alt="Crown"
              />
              {props.fillIconNum > 0 &&
                Array.from({ length: props.fillIconNum }).map((_, index) => (
                  <img
                    key={index}
                    style={{ width: "11.3px", height: "11.4px" }}
                    src={WhiteCrown}
                    alt="Crown"
                  />
                ))}
              {props.emptyIconNum > 0 &&
                Array.from({ length: props.emptyIconNum }).map((_, index) => (
                  <img
                    key={index}
                    style={{ width: "11.3px", height: "11.4px" }}
                    src={EmptyCrown}
                    alt="Crown"
                  />
                ))}
            </Box>
          </Box>
          <Box
            sx={{
              width: "97px",
              marginBottom: "37px",
            }}
          >
            <p
              style={{
                fontSize: "13px",
                fontWeight: theme.fontWeight.bold,
                color: theme.palette.white[0],
                textAlign: "left",
                height: "36px",
              }}
            >
              {props.text}
            </p>
          </Box>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <img
              style={{
                position: "absolute",
                width: props.width,
                left: props?.left,
                top: props?.top,
              }}
              src={props.icon}
              alt="Main Icon"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                textAlign: "right",
                width: "100%",
                cursor: "pointer",
              }}
            >
              <p
                style={{
                  width: "100%",
                  textAlign: "right",
                  fontSize: theme.fontSize.medium,
                  color: theme.palette.white[0],
                  fontWeight: "700",
                }}
              >
                Go
              </p>
              <img src={ArrowRight} alt="Right Arror" />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PointSystemCard;
