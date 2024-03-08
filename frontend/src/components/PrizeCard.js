import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MoreIcon from "../assets/images/moreBtn.svg";
import LeftBox from "../assets/images/t_left_box.png";
import RightBox from "../assets/images/t_right_box.png";
import SmallBox from "../assets/images/t_small_box.png";

const PrizeCard = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box
        sx={{
          borderRadius: "20.2px",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => props.setMoveRightState(!props.moveRightState)}
      >
        <img
          src={LeftBox}
          style={{
            position: "absolute",
            opacity: 0.3,
            top: "74px",
            right: "0",
          }}
          alt="Box"
        />
        <img
          src={RightBox}
          style={{ position: "absolute", opacity: 0.3, top: "53px", left: "0" }}
          alt="Box"
        />
        <img
          src={SmallBox}
          style={{
            position: "absolute",
            opacity: 0.3,
            top: "77px",
            left: "55px",
          }}
          alt="Box"
        />
        <img
          src={SmallBox}
          style={{
            position: "absolute",
            opacity: 0.3,
            top: "146px",
            left: "68px",
          }}
          alt="Box"
        />
        <Box
          sx={{
            position: "absolute",
            background: "white",
            width: "122.2px",
            padding: "9px",
            boxShadow: "0px 4.611px 4.611px 0px rgba(0, 0, 0, 0.25)",
            borderTopLeftRadius: "20.2px",
            borderTopRightRadius: "20.2px",
            top: "-1px",
          }}
        >
          <p
            style={{
              textTransform: "uppercase",
              color: props?.fontColor,
              fontSize: "15px",
            }}
          >
            {props?.title}{" "}
          </p>
        </Box>
        <Box
          sx={{
            background: props?.bgColor,
            padding: "77px 9px 9px 9px",
            borderRadius: "20.2px",
            width: "122.2px",
          }}
        >
          <Box
            sx={{
              marginBottom: "19px",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "16.14px",
                color: "white",
                lineHeight: "18.446px",
              }}
            >
              {props?.coin}{" "}
            </span>

            <p
              style={{
                color: "white",
                fontSize: "36.9892px",
                fontWeight: "600",
                lineHeight: "18.446px",
              }}
            >
              {props?.amount}{" "}
            </p>
            <span
              style={{
                fontSize: "16.14px",
                color: "white",
                lineHeight: "18.446px",
              }}
            >
              {props?.currency}{" "}
            </span>
          </Box>
          <img
            style={{ margin: "auto", marginBottom: "18.45px", width: "31px" }}
            src={MoreIcon}
            alt="More Icon"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <p
              style={{
                fontSize: "13.9px",
                lineHeight: "24px",
                color: "white",
                flex: 1,
              }}
            >
              Entry
            </p>
            <Box
              sx={{
                padding: "3px 4px",
                borderRadius: "5.76px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4.7px",
                flex: 1,
              }}
            >
              <p
                style={{
                  color: props.fontColor,
                  fontSize: "11.817px",
                  lineHeight: "16.881px",
                  fontWeight: "500",
                }}
              >
                {" "}
                {props.coinAmount}{" "}
              </p>
              <img src={props.coinIcon} alt="Coin Icon" />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default PrizeCard;
