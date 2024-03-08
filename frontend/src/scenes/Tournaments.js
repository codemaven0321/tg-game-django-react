import React, { useEffect, useState } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";
import { setFooterState } from "../features/footerSlice";

import { getUserProfile } from "../middleware/userMiddleware";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TournamentCard from "../components/TournamentCard";

import MoneyNCard from "../assets/images/money_game.png";
import Moneys from "../assets/images/moneys.png";
import ProfileIcon from "../assets/images/profile.png";
import Flag from "../assets/images/France_Flag.svg";
import ZIcon from "../assets/images/zIcon.svg";
import TImg1 from "../assets/images/epic.png";
import TImg2 from "../assets/images/flap.png";
import TImg3 from "../assets/images/MineCraft.png";
import TImg4 from "../assets/images/hoppy.png";
import TImg5 from "../assets/images/farm.png";


import TMain from "../assets/images/t_main.svg";
import Man1 from "../assets/images/man1.png";
import Man2 from "../assets/images/man2.png";
import Man3 from "../assets/images/man3.png";
import Man4 from "../assets/images/man4.svg";
import TTitle from "../assets/images/t_title.svg";
import BSquare from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";
import MoreBtn from "../assets/images/moreBtn.svg";
// import TournamentCardIcon1 from "../assets/images/tournament_card_icon_1.svg";
// import TournamentCardIcon2 from "../assets/images/tournament_card_icon_2.svg";
// import TournamentCardIcon3 from "../assets/images/tournament_card_icon_3.svg";
import TournamentCardIcon1 from "../assets/images/DuckDuckie.png";
import TournamentCardIcon2 from "../assets/images/HexaPuzzle.png";
import TournamentCardIcon3 from "../assets/images/taptap.png";
import Recommend1 from "../assets/images/recommend_1.png";
import Recommend2 from "../assets/images/recommend_2.png";
import Recommend3 from "../assets/images/recommend_3.png";

import {
  PointSystems,
  LanguageFlags,
  Countries,
  Games,
  FooterUrl,
} from "../Constant";

const Tournaments = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const currentUrl =
    window.location.href.split("/")[window.location.href.split("/").length - 1];
  useEffect(() => {
    dispatch(
      setFooterState(currentUrl === undefined ? 1 : FooterUrl["/" + currentUrl])
    );
  }, []);
  useEffect(() => {
    dispatch(getUserProfile());
  }, [dispatch]);
  const handleNavigate = () => {
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

    navigate("/tournaments_detail");
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          py: "10px",
          background: "linear-gradient(90deg, #458CFE 0%, #7DD8FD 100%)",
          marginBottom: "48px",
        }}
      >
        <p
          className="poppines_font"
          style={{
            color: theme.palette.white[0],
            fontSize: "13px",
            textAlign: "center",
            lineHeight: "20px",
            fontWeight: theme.fontWeight.bold,
          }}
        >
          Hey {userProfile?.display_name || "John"}, welcome to TG Games!
        </p>
      </Box>
      <Box
        sx={{
          px: "21px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "46.86px",
        }}
      >
        <Box
          sx={{
            padding: "22.82px 23.81px 4.23px",
            background:
              "linear-gradient(231.61deg, #74CCFD 8.44%, #468EFE 74.37%)",
            boxShadow:
              " 0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
            borderRadius: "24.89px",
            position: "relative",
          }}
        >
          <img
            src={MoneyNCard}
            alt="Main Icon"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <p
            style={{
              color: "white",
              fontSize: "13.48px",
              lineHeight: "29.04px",
              fontWeight: "500",
            }}
          >
            TG Games Hold
          </p>
          <p
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "26.96px",
              lineHeight: "29.04px",
            }}
          >
            7,000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "11.41px",
              lineHeight: "29.04px",
            }}
          >
            Real Cash Matches
          </p>
        </Box>
        <Box
          sx={{
            padding: "22.82px 23.81px 4.23px",
            background:
              "linear-gradient(231.61deg, #74CCFD 8.44%, #468EFE 74.37%)",
            boxShadow:
              " 0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
            borderRadius: "24.89px",
            position: "relative",
          }}
        >
          <img
            src={Moneys}
            alt="Main Icon"
            style={{
              position: "absolute",
              top: "0",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
          <p
            style={{
              color: "white",
              fontSize: "13.48px",
              lineHeight: "29.04px",
              fontWeight: "500",
            }}
          >
            No.1 Player Won
          </p>
          <p
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: "26.96px",
              lineHeight: "29.04px",
            }}
          >
            $6,000
          </p>
          <p
            style={{
              color: "white",
              fontSize: "11.41px",
              lineHeight: "29.04px",
            }}
          >
            Prize
          </p>
        </Box>
      </Box>
      <Box
        sx={{
          position: "relative",
          paddingLeft: "21px",
          textAlign: "center",
          margin: `${theme.gaps[1]} 0`,
          marginTop: "14px",
          maxWidth: "354px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "53%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
          >
            <circle
              cx="25"
              cy="25"
              r="23.4375"
              stroke="url(#paint0_linear_640_3608)"
              strokeWidth="3.125"
            />
            <defs>
              <linearGradient
                id="paint0_linear_640_3608"
                x1="2.34376"
                y1="32.0313"
                x2="22.2319"
                y2="-0.0348944"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0098EA" />
                <stop offset="0.861496" stopColor="#3940BE" />
              </linearGradient>
            </defs>
          </svg>
          <Box
            style={{
              position: "absolute",
              width: "43.75px",
              height: "43.75px",
              borderRadius: "64.1",
              flexShrink: 0,
              top: "3px",
              left: "3px",
              background: `url(${userProfile?.avatar}) lightgray 50% / cover no-repeat`,
              borderRadius: "50%",
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            background: theme.bgColor[0],
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "24px",
            padding: "9px 9px 12px 10px",
            marginBottom: "19px",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginLeft: "12px" }}>
              <p
                className="poppines_font profile_name"
                style={{
                  fontSize: "15px",
                  fontWeight: theme.fontWeight.bold,
                  lineHeight: "22.5px",
                  textAlign: "left",
                }}
              >
                {userProfile?.display_name || "John"}
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img
                  src={
                    LanguageFlags[userProfile?.region] || LanguageFlags["fr"]
                  }
                  alt="Flag Image"
                />
                <p
                  style={{
                    color: "#75757A",
                    fontWeight: theme.fontWeight.small,
                    fontSize: "11px",
                  }}
                >
                  {Countries[userProfile?.language] || Countries["fr"]}
                </p>
              </Box>
            </Box>
          </Box>
          <Box>
            <p
              style={{
                color: "rgba(117, 117, 122, 1)",
                fontSize: "13px",
                lineHeight: "19.5px",
              }}
            >
              Won prize
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "3px",
              }}
            >
              <img src={ZIcon} alt="Icon" />
              <p
                style={{
                  color: "rgba(117, 117, 122, 1)",
                  fontSize: "13px",
                  lineHeight: "19.5px",
                }}
              >
                19000k
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          background: "rgba(247, 249, 251, 1)",
          paddingTop: "12px",
          overflow: "hidden",
          marginBottom: "18px",
        }}
      >
        <p
          style={{
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "24px",
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Current Tournaments
        </p>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: theme.gaps[0],
            px: "21px",
            overflowY: "hidden",
            overflowX: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "transparent transparent",
            msOverflowStyle: "none",
            transition: "all 0.7s",
            "&::-webkit-scrollbar": {
              width: 4,
            },

            "&::-webkit-scrollbar-thumb": {
              background: "transparent",
            },
          }}
        >
          <img src={TImg1} alt="T Image" style={{ cursor: "pointer" }} />
          <img src={TImg2} alt="T Image" style={{ cursor: "pointer" }} />
          <img src={TImg3} alt="T Image" style={{ cursor: "pointer" }} />
          <img src={TImg4} alt="T Image" style={{ cursor: "pointer" }} />
          <img src={TImg5} alt="T Image" style={{ cursor: "pointer" }} />
        </Box>
      </Box>

      <Box sx={{ px: "21px", marginBottom: "9px" }}>
        <Box>
          <p
            style={{
              fontWeight: "600",
              fontSize: "18px",
              lineHeight: "24px",
              color: "rgba(37, 41, 70, 1)",
              marginBottom: "6px",
            }}
          >
            Popular Tournament
          </p>
          <Box
            sx={{
              paddingLeft: "28px",
              paddingBottom: "33px",
              background:
                "linear-gradient(145.76deg, #468EFE 0%, #74CCFD 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
              borderRadius: "45px",
              overflow: "hidden",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              position: "relative",
            }}
          >
            <img
              src={TTitle}
              alt="title"
              style={{
                position: "absolute",
                top: "13px",
                left: "16px",
                zIndex: 5,
              }}
            />
            <img
              src={BSquare}
              alt="Square"
              style={{
                position: "absolute",
                top: "38px",
                left: "-1px",
                zIndex: 1,
                opacity: "30%",
              }}
            />
            <img
              src={BSquare}
              alt="Square"
              style={{
                position: "absolute",
                top: "-10px",
                right: "-30px",
                zIndex: 1,
                opacity: "30%",
              }}
            />
            <img
              src={SSquare}
              alt="Square"
              style={{
                position: "absolute",
                top: "36px",
                right: "89px",
                zIndex: 1,
                opacity: "30%",
              }}
            />
            <img
              src={MoreBtn}
              alt="Square"
              style={{
                position: "absolute",
                top: "308px",
                right: "29px",
                zIndex: 4,
                cursor: "pointer",
              }}
              onClick={handleNavigate}
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <img src={Man1} alt="Avatar" style={{ zIndex: 4 }} />
                <img
                  src={Man2}
                  style={{ marginLeft: "-10px", zIndex: 3 }}
                  alt="Avatar"
                />
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
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "30px",
                  lineHeight: "45px",
                  color: "white",
                }}
              >
                3.471
              </p>
              <p
                style={{
                  color: "white",
                  fontWeight: "500",
                  fontSize: "13px",
                  lineHeight: "19px",
                }}
              >
                Online
              </p>
            </Box>
            <img
              style={{ marginLeft: "-70px", zIndex: 3 }}
              src={TMain}
              alt="T Main"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "4px", pt: "12px", pb: "13px" }}>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "24px",
            color: "rgba(37, 41, 70, 1)",
            fontWeight: "600",
            marginBottom: "19px",
          }}
        >
          Friends Are Playing
        </p>
        <TournamentCard
          icon={TournamentCardIcon1}
          title="Duck Duckie"
          buttonColor1="rgba(114, 138, 150, 1)"
          buttonText1="FUN"
          buttonColor2="rgba(19, 161, 153, 1)"
          buttonText2="CASH"
          buttonColor3="rgba(249, 156, 57, 1)"
          buttonText3="POINT"
        />
        <TournamentCard
          icon={TournamentCardIcon2}
          title="Hexa Puzzle"
          buttonColor1="rgba(114, 138, 150, 1)"
          buttonText1="SPORT"
          buttonColor2="rgba(19, 161, 153, 1)"
          buttonText2="CASH"
          buttonColor3="rgba(249, 156, 57, 1)"
          buttonText3="POINT"
        />
        <TournamentCard
          icon={TournamentCardIcon3}
          title="Tap Tap"
          buttonColor1="rgba(114, 138, 150, 1)"
          buttonText1="SPORT"
          buttonColor2="rgba(19, 161, 153, 1)"
          buttonText2="CASH"
          buttonColor3="rgba(249, 156, 57, 1)"
          buttonText3="POINT"
        />
      </Box>
      <Box>
        <p
          style={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "24px",
            color: "rgba(37, 41, 70, 1)",
            marginBottom: "22px",
          }}
        >
          Recommended For You
        </p>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <img src={Recommend1} alt="Icon" />
          </Box>
          <Box sx={{ position: "relative" }}>
            <img src={Recommend2} alt="Icon" />
            <Button
              className="poppines_font"
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              sx={{
                position: "absolute",
                padding: "1px 14px 2px 25px",
                borderRadius: "25px",
                border: "1px solid #FFF",
                bottom: "45px",
                left: "18px",
                color: "white !important",
                "&:hover": {
                  border: "1px solid #FFF",
                },
              }}
            >
              Play
            </Button>
          </Box>
          <Box>
            <img src={Recommend3} alt="Icon" />
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default Tournaments;
