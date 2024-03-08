import React from "react";
import { Box } from "@mui/material";

const ShopEarnGift = (props) => {
  return (
    <React.Fragment>
      <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "10px 8px" }}>
        <img src={props.icon} alt="Main" />
        <p
          style={{ fontWeight: "600", fontSize: "12px", lineHeight: "17.46px" }}
        >
          {props.title}
        </p>
        <p style={{ fontSize: "10px", lineHeight: "14.55px" }}>{props.desc}</p>
      </Box>
    </React.Fragment>
  );
};

export default ShopEarnGift;
