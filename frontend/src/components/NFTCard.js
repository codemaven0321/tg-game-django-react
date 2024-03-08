import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

import MoreBtn from "../assets/images/sm_more_btn.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";

const NFTCard = (props) => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          cursor: "pointer",
        }}
        onClick={() => props.func(props.index)}
      >
        <img src={props.bg} alt="Main Image" />
        <Box
          sx={{
            marginTop: "7px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <img src={props.icon} alt="Icon" />
            <Box>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "12px",
                  lineHeight: "17.46px",
                  color: "#252946",
                  textAlign: "left",
                }}
              >
                {props.title}
              </p>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    background: "#000000B8",
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
                <p
                  style={{
                    fontSize: "10px",
                    lineHeight: "14.55px",
                    color: "#252946",
                  }}
                >
                  by $ spent{" "}
                </p>
              </Box>
            </Box>
          </Box>
          <img src={MoreBtn} style={{ width: "19px" }} alt="More Button" />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default NFTCard;
