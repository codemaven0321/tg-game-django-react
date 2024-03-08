import React from "react";
import { Box, useTheme, Button } from "@mui/material";

import BSquare from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";
import DailyChallengeProgressBar from "./DailyChallengeProgressBar";

const DailyChallengeCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={{ marginBottom: "16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18.72px 19px 21px 22.46px",
            background: props.background,
            marginBottom: "15px",
            borderRadius: "22.46px",
            position: "relative",
          }}
        >
          <img
            style={{
              position: "absolute",
              opacity: 0.2,
              width: "150px",
              top: "34px",
              left: "-11px",
            }}
            src={BSquare}
            alt="Square Icon"
          />
          <img
            style={{
              position: "absolute",
              opacity: 0.2,
              width: "150px",
              right: 0,
              top: 0,
            }}
            src={BSquare}
            alt="Square Icon"
          />
          <img
            style={{
              position: "absolute",
              opacity: 0.2,
              right: "115px",
              top: "46px",
            }}
            src={SSquare}
            alt="Square Icon"
          />
          <img
            style={{
              position: "absolute",
              opacity: 0.2,
              right: "70px",
              bottom: "-27px",
            }}
            src={SSquare}
            alt="Square Icon"
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              zIndex: "2",
              flex: "1",
            }}
          >
            <Button
              variant="contained"
              sx={{
                padding: "4px 7px",
                fontSize: "11.23px",
                lineHeight: "16.84px",
                color: "white",
                marginBottom: "23.15px",
                borderRadius: "7.49px",
                background: "rgba(255, 255, 255, 0.07)",
                textTransform: "uppercase",
                boxShadow: "none",
                "&:hover": {
                  background: "rgba(255, 255, 255, 0.07)",
                  boxShadow: "none",
                },
              }}
            >
              {props.type}
            </Button>
            <p
              style={{
                fontSize: "54.07px",
                fontWeight: "600",
                lineHeight: "35.42px",
                color: "white",
                marginBottom: "8px",
              }}
            >
              {props.amount}
            </p>
            <p
              style={{
                fontSize: "25.69px",
                fontWeight: "400",
                lineHeight: "35.42px",
                color: "white",
                marginBottom: "15px",
                textTransform: "uppercase",
              }}
            >
              {props.unit}
            </p>
            <p
              style={{
                fontSize: "12px",
                lineHeight: "14px",
                fontWeight: "600",
                color: "white",
                textAlign: "left",
              }}
            >
              {props.desc}
            </p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: "23px",
              zIndex: "2",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <img src={props.cardIcon} alt="Card Icon" />
              <p
                style={{ color: "white", fontSize: "13px", lineHeight: "16px" }}
              >
                {props.cardContent}
              </p>
            </Box>
            {/* <DailyChallengeProgressBar value={"1/3"} percent={"33%"} /> */}
            <Button
              variant="contained"
              sx={{
                background: "white",
                color: props.buttonTextColor,
                padding: "6px 19px",
                borderRadius: "31.11px",
                textTransform: "capitalize",
                boxShadow: "none",
                fontWeight: "600",
                "&:hover": {
                  background: "white",
                  boxShadow: "none",
                },
              }}
            >
              Claim
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DailyChallengeCard;
