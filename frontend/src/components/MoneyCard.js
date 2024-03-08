import React from "react";
import { Box, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const MoneyCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          padding: "1px 6px",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50px",
          background: props.bgColor,
          maxWidth: "80px",
          marginRight: "11px",
        }}
      >
        <p
          className="poppines_font"
          style={{
            marginRight: "2px",
            fontSize: theme.fontSize.verySmall,
            fontWeight: theme.fontWeight.bold,
            color: props.color,
          }}
        >
          {props.amount}
        </p>
        <img src={props.icon} style={{ width: "16.5px" }} alt="Icon" />
        <Box
          sx={{
            position: "absolute",
            background: `${props.iconColor}`,
            width: "14px",
            height: "14px",
            fontSize: "11.2px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            left: "50px",
            top: "-2px",
          }}
        >
          <AddIcon sx={{ width: "11.2px" }} />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default MoneyCard;
