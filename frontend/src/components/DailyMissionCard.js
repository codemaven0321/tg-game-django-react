import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import MoneyCard from "../assets/images/money_card_icon.svg";

const DailyMissionCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={{ marginBottom: "16px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: "11px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              textAlign: "left",
              width: "100%",
            }}
          >
            <img src={props.icon} alt="Icon" style={{ marginRight: "12px" }} />
            <Box>
              <p
                style={{
                  color: theme.palette.white[0],
                  fontSize: "13px",
                  lineHeight: "24px",
                  fontWeight: theme.fontWeight.medium,
                }}
              >
                {props.title}
              </p>
              {props.children}
            </Box>
            <Button
              className="poppines_font"
              variant="contained"
              sx={{
                ...theme.buttons.white,
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "11px",
                borderRadius: "31px",
                padding: "6.22px, 18.67px, 9.33px, 18.67px",
              }}
              onClick={props.onClick}
            >
              Play
            </Button>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                width: "237px",
                height: "7px",
                borderRadius: "50px",
                background: "#00000030",
              }}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: theme.fontSize.medium,
                  color: theme.palette.white[0],
                  marginRight: "4px",
                  marginLeft: "7px",
                }}
              >
                {props.amount}
              </p>
              <img src={MoneyCard} alt="Card" />
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DailyMissionCard;
