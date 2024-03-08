import React, { useEffect, useState } from "react";
import { Box, Button, useTheme } from "@mui/material";

import BSqure from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";

const DepositCurrencyCard = (props) => {
  return (
    <React.Fragment>
      <Button
        sx={{
          borderRadius: "17.487px",
          borderBottom: "5.246px solid rgba(14, 132, 196, 0.15)",
          background: props.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          position: "relative",
          overflow: "hidden",
          display: "inline-flex",
          width: "100%",
        }}
        onClick={props.onClick}
      >
        <img
          style={{
            position: "absolute",
            opacity: props.type === "TG" && 0.3,
            left: "154px",
            top: "-38px",
          }}
          src={SSquare}
          alt="Square Icon"
        />
        <img
          style={{
            position: "absolute",
            opacity: props.type === "TG" && 0.3,
            left: "186px",
            top: "-76px",
          }}
          src={BSqure}
          alt="Square Icon"
        />
        <img
          style={{
            position: "absolute",
            opacity: props.type === "TG" && 0.3,
            left: "-24px",
            top: "-45px",
          }}
          src={BSqure}
          alt="Square Icon"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "13.28px",
          }}
        >
          <img
            style={{ width: "29px", height: "29px" }}
            src={props.icon}
            alt="Currency Icon"
          />
          <Box>
            <p
              style={{
                fontSize: "14px",
                fontWeight: "600",
                lineHeight: "18px",
                color: props?.type === "TG" && "white",
                textAlign: "left",
              }}
            >
              {props.coinName}
            </p>
            <p
              style={{
                fontSize: "14px",
                color: props?.type === "TG" && "white",
                lineHeight: "18px",
                textAlign: "left",
              }}
            >
              {props.currency}
            </p>
          </Box>
        </Box>
        <Box>
          <p
            style={{
              fontSize: "16px",
              color: props?.type === "TG" && "white",
              fontWeight: "600",
              lineHeight: "16px",
              textAlign: "right",
            }}
          >
            {props.amount}{" "}
            {props?.type === "TG"
              ? "TG"
              : props?.type === "Ether"
              ? "ETH"
              : "$"}
          </p>
          {props?.type !== "TG" && (
            <p
              style={{
                fontSize: "11px",
                color: "black",
                lineHeight: "16px",
                fontWeight: "500",
                textAlign: "right",
              }}
            >
              Coming Soon
            </p>
          )}
        </Box>
      </Button>
    </React.Fragment>
  );
};

export default DepositCurrencyCard;
