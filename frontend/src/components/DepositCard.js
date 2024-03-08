import React, { useEffect, useState } from "react";
import { Box, Hidden, useTheme } from "@mui/material";

const DepositCard = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ width: "100%", cursor: "pointer" }}>
        <Box
          sx={{
            width: "145px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            background: "white",
            padding: "12px 35px",
            borderRadius: "13.36px",
            overflow: "hidden",
          }}
        >
          <img style={{ width: "28px" }} src={props.icon} alt="Crypto Icon" />

          <p
            style={{
              fontSize: "13px",
              fontWeight: "600",
              color: "black",
              lineHeight: "30.5px",
            }}
          >
            {props.text}
          </p>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default DepositCard;
