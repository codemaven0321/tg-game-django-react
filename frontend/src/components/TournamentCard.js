import React from "react";
import { Box, useTheme, Button } from "@mui/material";

import Man1 from "../assets/images/man1.png";
import Man2 from "../assets/images/man2.png";
import Man3 from "../assets/images/man3.png";
import Man4 from "../assets/images/man4.svg";
import ArrowRight from "../assets/images/blue_right_arrow.svg";

const TournamentCard = (props) => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={{ marginBottom: "19px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            background: "rgba(247, 249, 251, 1)",
            padding: "13px 6px 13px 11px",
            borderRadius: "8px",
            gap: "14px",
          }}
        >
          <img style={{ width: "84px" }} src={props.icon} alt="Icon" />
          <Box sx={{ flex: 1 }}>
            <p
              style={{
                fontSize: "16px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "rgba(37, 41, 70, 1)",
                textAlign: "left",
                marginBottom: "9px",
              }}
            >
              {props.title}{" "}
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "5px",
                marginBottom: "9px",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  border: `1px solid ${props.buttonColor1}`,
                  fontSize: "10.14px",
                  color: `${props.buttonColor1}`,
                  padding: "0px 0",
                  borderRadius: "84.53px",
                  fontWeight: "600",
                  minWidth: "48px",
                }}
              >
                {props.buttonText1}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: `1px solid ${props.buttonColor2}`,
                  fontSize: "10.14px",
                  color: `${props.buttonColor2}`,
                  padding: "0px 0",
                  borderRadius: "84.53px",
                  fontWeight: "600",
                  minWidth: "48px",
                }}
              >
                {props.buttonText2}
              </Button>
              <Button
                variant="outlined"
                sx={{
                  border: `1px solid ${props.buttonColor3}`,
                  fontSize: "10.14px",
                  color: `${props.buttonColor3}`,
                  padding: "0px 0",
                  borderRadius: "84.53px",
                  fontWeight: "600",
                  minWidth: "48px",
                }}
              >
                {props.buttonText3}
              </Button>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "4px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                  }}
                >
                  <img src={Man2} style={{ zIndex: 3 }} alt="Avatar" />
                  <img
                    src={Man3}
                    style={{ marginLeft: "-10px", zIndex: 2 }}
                    alt="Avatar"
                  />
                  <img
                    src={Man4}
                    style={{ marginLeft: "-10px", zIndex: 1 }}
                    alt="Avatar"
                  />
                </Box>
                <p style={{ fontSize: "14px", color: "rgba(80, 80, 87, 1)" }}>
                  3,471 online
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  textAlign: "right",
                  cursor: "pointer",
                }}
              >
                <p
                  style={{
                    width: "100%",
                    textAlign: "right",
                    fontSize: theme.fontSize.medium,
                    color: "rgba(0, 152, 234, 1)",
                    fontWeight: "700",
                  }}
                >
                  Go
                </p>
                <img src={ArrowRight} alt="Right Arror" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TournamentCard;
