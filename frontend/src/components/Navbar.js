import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFooterState } from "../features/footerSlice";
import { setBackState, decreaseIndex } from "../features/navbarSlice";
import { setGameState } from "../features/gameSlice";
import { Box, useTheme, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import GameController from "../assets/images/game_controller.svg";

import { FooterUrl } from "../Constant";

const Navbar = (props) => {
  const theme = useTheme();
  const currentGameState = useSelector((state) => state.gameState.value);
  const currentUrlIndex = useSelector((state) => state.backState.index);
  const currentUrl = useSelector(
    (state) => state.backState.value[currentUrlIndex]
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBackEvent = () => {
    console.log(currentUrl);
    navigate(currentUrl);
    dispatch(
      setFooterState(currentUrl === undefined ? 1 : FooterUrl[currentUrl])
    );
    dispatch(setGameState(false));
    dispatch(decreaseIndex());
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "9px 17px",
          position: "relative",
        }}
      >
        <Typography
          variant="h6"
          gutterBottom
          style={{
            display: "flex",
            alignItems: "center",
            color: theme.palette.blue[0],
            fontSize: theme.fontSize.mmedium,
            fontWeight: theme.fontWeight.thin,
            cursor: "pointer",
          }}
          onClick={handleBackEvent}
        >
          <ArrowBackIosIcon
            sx={{
              fontSize: theme.fontSize.mmedium,
              fontWeight: theme.fontWeight.thin,
            }}
          />
          {"Back"}
        </Typography>
        {currentGameState && (
          <img
            src={GameController}
            alt="Icon"
            style={{
              position: "absolute",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          />
        )}
        {/* <Box>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: theme.fontWeight.bold,
              fontSize: theme.fontSize.medium,
              lineHeight: "16px",
            }}
          >
            TG GAMES
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              fontWeight: theme.fontWeight.medium,
              fontSize: "15px",
              color: "#9A9A9A",
            }}
          >
            Bot
          </Typography>
        </Box>
        <img src={MenuIcon} alt="Menu Icon" /> */}
      </Box>
    </React.Fragment>
  );
};

export default Navbar;
