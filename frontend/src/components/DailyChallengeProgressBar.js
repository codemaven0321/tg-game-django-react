import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const DailyChallengeProgressBar = ({ value, percent }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "68px",
        height: "68px",
        borderRadius: "50%",
        background: `radial-gradient(closest-side, rgba(255, 255, 255, 0) 79%, transparent 80% 100%), conic-gradient(hotpink ${percent}, pink 0)`,
        position: "relative",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        size={100}
        sx={{ color: "hotpink" }}
      />
      <Typography
        variant="body2"
        component="div"
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {`${value}`}
      </Typography>
    </Box>
  );
};

export default DailyChallengeProgressBar;
