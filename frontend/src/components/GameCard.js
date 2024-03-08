import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import MoneyCard from "../assets/images/money_card_icon.svg";
import { Link, useNavigate } from "react-router-dom";

const GameCard = (props) => {
  const theme = useTheme();
  const handlePlayButton = () => {
    props.setGameState(true, props.url, props.index);

    const params = new URLSearchParams(window.location.search);
    if (params.has("game")) {
      params.set("game", props.index);
    } else {
      params.append("game", props.index);
    }

    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${params}`
    );
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={props.icon}
              alt="Icon"
              style={{
                marginRight: "12px",
                borderRadius: "16px",
                width: "60px",
                height: "60px",
              }}
            />
            <Box>{props.children}</Box>
          </Box>
          <Button
            className="poppines_font"
            variant="contained"
            sx={{
              ...theme.buttons.blue,
              boxShadow: "0px 4px 4px 0px #3795FE1F",
              borderRadius: "31.11px",
              fontSize: "10.89px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
            onClick={handlePlayButton}
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
              background: "#E2EDF9",
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
                fontSize: "12px",
                fontWeight: theme.fontWeight.bold,
                color: theme.palette.black[0],
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
    </React.Fragment>
  );
};

export default GameCard;
