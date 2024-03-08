import { createTheme } from "@mui/material/styles";

const themeSettings = createTheme({
  palette: {
    blue: {
      0: "#3940BE",
      1: "#2A9BFE",
    },
    white: {
      0: "#ffffff",
    },
    black: {
      0: "#000000",
    },
    brown: {
      0: "#644423",
    },
    yellow: {
      0: "#FFD612",
    },
  },
  bgColor: {
    0: "#F7F9FB",
    1: "#00000066",
    2: "#FFD703",
  },
  fontWeight: {
    bold: 600,
    medium: 500,
    thin: 400,
  },
  fontSize: {
    big: "21px",
    mmedium: "16px",
    medium: "14px",
    small: "12.35px",
    verySmall: "11.45px",
  },
  gaps: {
    0: "8px",
    1: "19px",
  },
  buttons: {
    white: {
      backgroundColor: "#ffffff",
      "&:hover": {
        backgroundColor: "#ffffff",
      },
      color: "#0098EA",
    },
    blue: {
      background: "linear-gradient(180deg, #3EA2FE 0%, #2F99FE 100%)",
      "&:hover": {
        backgroundColor: "#ffffff",
      },
      color: "white",
    },
  },
});

export default themeSettings;
