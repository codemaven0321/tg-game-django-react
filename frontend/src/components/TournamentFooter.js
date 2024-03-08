import React from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";

import TFooterIcon1 from "../assets/images/t_footer_icon_1.png";
import Message from "../assets/images/Message.png";
import Share from "../assets/images/Share.png";

const TournamentFooter = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          padding: "16px",
          display: props.choosePrize ? "none" : "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Typography
          gutterBottom
          sx={{
            flex: 1,
            fontSize: "16px",
            color: "white !important",
            lineHeightStep: "20px",
            lineHeight: "16px",
            background: "#0098EA",
            py: "10px",
            borderRadius: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            boxShadow: "0px 2px 20px 0px #B5E2FA",
            cursor: "pointer",
          }}
          onClick={props.handleChoosePrize}
        >
          <img src={TFooterIcon1} alt="Footer Icon" />
          Play and win cash
        </Typography>
        <img
          style={{ boxShadow: "0px 2px 20px 0px #B5E2FA", borderRadius: "50%" }}
          src={Message}
          alt="Message Icon"
        />
        <img
          style={{ boxShadow: "0px 2px 20px 0px #B5E2FA", borderRadius: "50%" }}
          src={Share}
          alt="Share Icon"
        />
      </Box>
    </React.Fragment>
  );
};

export default TournamentFooter;
