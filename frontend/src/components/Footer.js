import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFooterState } from "../features/footerSlice";
import { setBackState, increaseIndex } from "../features/navbarSlice";

import Footer1 from "../assets/images/footer_1.svg";
import Footer2 from "../assets/images/footer_2.svg";
import Footer3 from "../assets/images/footer_3.svg";
import Footer4 from "../assets/images/footer_4.svg";
import FooterIcon11 from "../assets/images/footer_icon_1_1.svg";
import FooterIcon12 from "../assets/images/footer_icon_1_2.svg";
import FooterIcon21 from "../assets/images/footer_icon_2_1.svg";
import FooterIcon22 from "../assets/images/footer_icon_2_2.svg";
import FooterIcon31 from "../assets/images/footer_icon_3_1.svg";
import FooterIcon32 from "../assets/images/footer_icon_3_2.svg";
import FooterIcon41 from "../assets/images/footer_icon_4_1.svg";
import FooterIcon42 from "../assets/images/footer_icon_4_2.svg";

const Footer = () => {
  const currentFooter = useSelector((state) => state.footerState.value);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChangeFooter = (num, redirectUrl) => {
    dispatch(setFooterState(num));
    const currentUrl =
      window.location.href.split("/")[
        window.location.href.split("/").length - 1
      ];
    dispatch(
      setBackState(
        currentUrl == "" ||
          currentUrl == " " ||
          currentUrl == "undefined" ||
          currentUrl == null
          ? "/"
          : "/" + currentUrl
      )
    );
    dispatch(increaseIndex());
    navigate(redirectUrl);
  };
  return (
    <React.Fragment>
      <Box
        sx={{
          width: "100%",
          position: "sticky",
          bottom: "-8px",
          background: Footer1,
          zIndex: "99",
        }}
      >
        <img
          src={
            currentFooter === 1
              ? Footer1
              : currentFooter === 2
              ? Footer2
              : currentFooter === 3
              ? Footer3
              : Footer4
          }
          alt="Footer"
        />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            width: "100%",
            position: "absolute",
            bottom: "15px",
            left:
              currentFooter === 1
                ? "4px"
                : currentFooter === 1
                ? "2px"
                : currentFooter === 4
                ? "-4px"
                : "2px",
          }}
        >
          <img
            src={currentFooter === 1 ? FooterIcon12 : FooterIcon11}
            alt="Footer Icon"
            onClick={() => handleChangeFooter(1, "/")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={currentFooter === 2 ? FooterIcon22 : FooterIcon21}
            alt="Footer Icon"
            onClick={() => handleChangeFooter(2, "/tournaments")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={currentFooter === 3 ? FooterIcon32 : FooterIcon31}
            alt="Footer Icon"
            onClick={() => handleChangeFooter(3, "/shop_earn_deals")}
            style={{ cursor: "pointer" }}
          />
          <img
            src={currentFooter === 4 ? FooterIcon42 : FooterIcon41}
            alt="Footer Icon"
            onClick={() => handleChangeFooter(4, "/my_profile")}
            style={{ cursor: "pointer" }}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Footer;
