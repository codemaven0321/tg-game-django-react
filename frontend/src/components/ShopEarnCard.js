import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";
import { Box } from "@mui/material";
import ArrowRight from "../assets/images/rightArrow.svg";
import SSquare from "../assets/images/SmSquare.svg";
import BSquare from "../assets/images/BigSquare.svg";

const ShopEarnCard = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
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
    navigate(props.url);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "10px 3px 10px 10px",
          background: props.bgColor,
          borderRadius: "17.41px",
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        onClick={handleNavigate}
      >
        <img
          style={{
            position: "absolute",
            top: "8px",
            left: "55px",
            opacity: 0.3,
          }}
          src={SSquare}
          alt="Square"
        />
        <img
          style={{
            position: "absolute",
            top: "84px",
            left: "89px",
            opacity: 0.3,
          }}
          src={SSquare}
          alt="Square"
        />
        <img
          style={{
            position: "absolute",
            top: "-39px",
            left: "87px",
            opacity: 0.3,
          }}
          src={BSquare}
          alt="Square"
        />
        <img
          style={{
            position: "absolute",
            top: "-17px",
            left: "-115px",
            opacity: 0.3,
          }}
          src={BSquare}
          alt="Square"
        />
        <img
          src={props.icon}
          style={{
            position: "absolute",
            top: props.top,
            left: props.left,
            width: props?.width,
          }}
          alt="Main Icon"
        />
        <p
          style={{
            color: "white",
            fontWeight: "600",
            fontSize: "11.37px",
            lineHeight: "14px",
            paddingBottom: "56.73px",
            textAlign: "left",
          }}
        >
          {props.title}
        </p>
        <Box sx={{ width: "100%", textAlign: "right", zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
            }}
          >
            <p
              style={{
                color: "white",
                fontSize: "12.25px",
                lineHeight: "21px",
                fontWeight: "700",
              }}
            >
              Go
            </p>
            <img src={ArrowRight} alt="Arrow" />
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ShopEarnCard;
