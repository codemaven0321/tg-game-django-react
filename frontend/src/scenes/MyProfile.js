import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, useTheme, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";
import { getUserProfile } from "../middleware/userMiddleware";
import { setFooterState } from "../features/footerSlice";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DailyChecker from "../components/DailyChecker";
import DailyChallenge from "../components/DailyChallenge";
import DailyChallengeCard from "../components/DailyChallengeCard";

import WonProfileBg from "../assets/images/won_profile_bg.svg";
import BProfileIcon from "../assets/images/BProfileIcon.svg";
import PenIcon from "../assets/images/pen_icon.svg";
import Flag from "../assets/images/France_Flag.svg";
import Man1 from "../assets/images/man1.png";
import Man2 from "../assets/images/man2.png";
import Man3 from "../assets/images/man3.png";
import Man4 from "../assets/images/man4.svg";
import GoOver from "../assets/images/go_over_icon.svg";
import Gift from "../assets/images/gift.svg";
import Prize from "../assets/images/prize.png";
import BSquare from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";

import Money from "../assets/images/p_money.png";
import Star from "../assets/images/p_star.png";
import Ton from "../assets/images/p_ton.png";

import ODailyIcon from "../assets/images/o_daily_icon.svg";
import DailyIcon from "../assets/images/daily_icon.svg";
import CircleChecker from "../assets/images/daily_circle_checker.svg";
import NCircleChecker from "../assets/images/daily_circle_checker_none.svg";
import Deposit from "../assets/images/deposit.svg";
import Withdraw from "../assets/images/withdraw.svg";
import Redeem from "../assets/images/redeem.svg";
import Checker from "../assets/images/check.svg";
import Cross from "../assets/images/cross.svg";
import DChecker from "../assets/images/daily_checker.svg";
import Cup from "../assets/images/cup.svg";
import BDailyChallengeCard from "../assets/images/b_daily_challenge_card_1.svg";
import BlueCardIcon from "../assets/images/daily_blue_challenge_card_icon.svg";
import YelloCardIcon from "../assets/images/daily_yellow_challenge_card_icon.svg";

import {
  DailyData,
  DailyChallengeData,
  LanguageFlags,
  Countries,
  FooterUrl,
} from "../Constant";

const MyProfile = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [dailyData, setDailyData] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userProfile?.telegram_id) {
          const response = await axios.get(
            `${process.env.REACT_APP_API_URL}/spin/${userProfile.telegram_id}/`
          );
          const today = new Date();
          const dayOfWeek = today.getDay();
          const DailyData = [];
          // console.log(response.data);
          for( var i =0 ; i < 7; i++){
            DailyData.push({
              day: `Day ${i+1}`,
              icon: response.data[i+''] > 0 ? DailyIcon : ODailyIcon,
              checker: response.data[i+''] > 0 ? CircleChecker : CircleChecker,
              amount: response.data[i+''],
              passedDate: i <= dayOfWeek,
            })
          }
          console.log( DailyData)
          setDailyData(DailyData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [userProfile?.telegram_id]);

  // console.log( userProfile);
  const handleNavigate = (url) => {
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
    navigate(url);
  };

  return (
    <React.Fragment>
      <Navbar />
      <Box sx={{ padding: "20px 20px 0 20px" }}>
        <Box sx={{ position: "relative", marginBottom: "58px" }}>
          <img src={WonProfileBg} alt="bg" />
          <Box sx={{ position: "relative" }}>
            <Box
              sx={{
                position: "absolute",
                bottom: "0",
                transform: "translate(100%, 50%)",
              }}
            >
              <svg
                width="117"
                height="117"
                viewBox="0 0 117 117"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="58.5"
                  cy="58.5"
                  r="56"
                  stroke="url(#paint0_linear_5_18894)"
                  strokeWidth="5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_5_18894"
                    x1="5.48439"
                    y1="74.9531"
                    x2="52.0226"
                    y2="-0.081653"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0098EA" />
                    <stop offset="0.861496" stopColor="#3940BE" />
                  </linearGradient>
                </defs>
              </svg>
            </Box>
            <img
              src={userProfile?.avatar || BProfileIcon}
              style={{
                position: "absolute",
                transform: "translate(-42%, -53% )",
                width: "107px", // Set the width of the image
                height: "107px", // Set the height of the image
                borderRadius: "50%",
              }}
              alt="Profile Icon"
            />
            <img
              src={PenIcon}
              style={{
                position: "absolute",
                bottom: "-53px",
                left: "62%",
                cursor: "pointer",
              }}
              alt="Pen Icon"
              onClick={() => handleNavigate("/edit_profile")}
            />
          </Box>
        </Box>
        <Box sx={{ marginBottom: "30px" }}>
          <p
            style={{
              fontWeight: "600",
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            {userProfile?.display_name || "John"}
          </p>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              justifyContent: "center",
            }}
          >
            <img
              src={LanguageFlags[userProfile?.region] || LanguageFlags["fr"]}
              alt="Flag Image"
            />
            <p
              style={{
                color: "#75757A",
                fontWeight: theme.fontWeight.small,
                fontSize: "12.12px",
              }}
            >
              {Countries[userProfile?.language] || Countries["fr"]}
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            position: "relative",
            borderRadius: "17.49px",
            background:
              "linear-gradient(0deg, rgba(14, 132, 196, 0.15), rgba(14, 132, 196, 0.15)), linear-gradient(82.05deg, #27A8ED 5.49%, #079AEB 48.11%, #53BEFE 96.19%)",
            padding: "23px 19px",
            marginBottom: "17px",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "5px",
              width: "100%",
              borderBottomLeftRadius: "17.49px",
              borderBottomRightRadius: "17.49px",
              background: "rgba(14, 132, 196, 0.15)",
              position: "absolute",
              zIndex: 3,
              left: "0",
              bottom: "0",
            }}
          />
          <img
            style={{
              position: "absolute",
              width: "161px",
              bottom: "-23px",
              right: "-27px",
              zIndex: 2,
            }}
            src={Prize}
            alt="Prize"
          />
          <img
            style={{
              position: "absolute",
              bottom: "-15px",
              left: "-4px",
              opacity: 0.4,
              zIndex: 1,
            }}
            src={BSquare}
            alt="Square"
          />
          <img
            style={{
              position: "absolute",
              top: "-39px",
              left: "172px",
              opacity: 0.4,
              zIndex: 1,
            }}
            src={SSquare}
            alt="Square"
          />
          <img
            style={{
              position: "absolute",
              bottom: "-51px",
              left: "213px",
              opacity: 0.4,
              zIndex: 1,
            }}
            src={SSquare}
            alt="Square"
          />
          <p
            style={{
              fontWeight: "600",
              lineHeight: "16px",
              textAlign: "left",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Solo with friends
          </p>
          <Box
            sx={{
              width: "48%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                width: "73%",
              }}
            >
              <img
                src={Man1}
                alt="Avatar"
                style={{ zIndex: 4, width: "32px" }}
              />
              <img
                src={Man2}
                style={{ marginLeft: "-10px", zIndex: 3, width: "32px" }}
                alt="Avatar"
              />
              <img
                src={Man3}
                style={{ marginLeft: "-10px", zIndex: 2, width: "32px" }}
                alt="Avatar"
              />
              <img
                src={Man4}
                style={{ marginLeft: "-10px", zIndex: 1, width: "32px" }}
                alt="Avatar"
              />
            </Box>
            <img src={GoOver} alt="Go Over Icon" />
          </Box>
        </Box>
        <Box sx={{ padding: "8px 0px 0px" }}>
          <Box
            sx={{
              background: "rgba(247, 249, 251, 1)",
              borderRadius: "24px",
              padding: "8px 17px 26px",
              marginBottom: "10px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                marginBottom: "6px",
              }}
            >
              <img src={Gift} alt="Gift Icon" />
              <h4 style={{ color: "#252946", lineHeight: "20px" }}>
                My Won prize
              </h4>
            </Box>
            <p
              style={{
                fontSize: "11px",
                color: "rgba(37, 41, 70, 1)",
                marginBottom: "15px",
              }}
            >
              All the cash prizes and Toncoin prizes arestored in your
              blockchain wallet.
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                marginBottom: "23px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: "1px solid rgba(186, 186, 188, 0.2)",
                  padding: "0 15px 0 15px",
                }}
              >
                <img
                  src={Money}
                  alt="Money"
                  style={{ marginBottom: "6px", height: "40px" }}
                />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "rgba(37, 41, 70, 1)",
                    marginBottom: "4px",
                  }}
                >
                  $1000
                </p>
                <p
                  style={{
                    color: "rgba(117, 117, 122, 1)",
                    lineHeight: "14px",
                    fontSize: "12px",
                  }}
                >
                  USD
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    color: "rgba(0, 152, 234, 1",
                    marginTop: "7px",
                    cursor: "pointer",
                  }}
                >
                  View
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: "1px solid rgba(186, 186, 188, 0.2)",
                  padding: "0 15px 0 15px",
                }}
              >
                <img
                  src={Ton}
                  alt="Ton"
                  style={{ marginBottom: "6px", height: "40px" }}
                />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "rgba(37, 41, 70, 1)",
                    marginBottom: "4px",
                  }}
                >
                  6,000
                </p>
                <p
                  style={{
                    color: "rgba(117, 117, 122, 1)",
                    lineHeight: "14px",
                    fontSize: "12px",
                  }}
                >
                  Toncoin
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    lineHeight: "14px",
                    color: "rgba(0, 152, 234, 1",
                    marginTop: "7px",
                    cursor: "pointer",
                  }}
                >
                  View
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  borderRight: "1px solid rgba(186, 186, 188, 0.2)",
                  padding: "0 15px 0 15px",
                }}
              >
                <img
                  src={Star}
                  alt="Money"
                  style={{ marginBottom: "6px", height: "40px" }}
                />
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "rgba(37, 41, 70, 1)",
                    marginBottom: "4px",
                  }}
                >
                  10,009
                </p>
                <p
                  style={{
                    color: "rgba(117, 117, 122, 1)",
                    lineHeight: "14px",
                    fontSize: "12px",
                  }}
                >
                  Point
                </p>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <Button
                className="poppines_font"
                startIcon={
                  <img
                    style={{ width: "12px" }}
                    src={Deposit}
                    alt="Deposit Icon"
                  />
                }
                sx={{
                  flex: "1",
                  background:
                    "linear-gradient(87.02deg, #0098EA 19.69%, #32B6FD 93.81%)",
                  p: "8px 14px",
                  borderRadius: "40px",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "white !important",
                  width: "50%",
                  textTransform: "capitalize",
                }}
                onClick={() => handleNavigate("/deposit")}
              >
                Deposit
              </Button>
              <Button
                className="poppines_font"
                startIcon={
                  <img
                    style={{ width: "12px" }}
                    src={Withdraw}
                    alt="Withdraw Icon"
                  />
                }
                sx={{
                  flex: "1",
                  background:
                    "linear-gradient(87.02deg, #748D99 19.69%, #93B1C0 93.81%)",
                  p: "8px 14px",
                  borderRadius: "40px",
                  fontWeight: "600",
                  fontSize: "12px",
                  color: "white !important",
                  letterSpacing: "-0.5px",
                  width: "50%",
                  textTransform: "capitalize",
                }}
              >
                Withdraw Prize
              </Button>
            </Box>
            <Button
              className="poppines_font"
              startIcon={<img src={Redeem} alt="Icon" />}
              sx={{
                border: "1px solid rgba(0, 152, 234, 1)",
                width: "100%",
                borderRadius: "40px",
                fontSize: "13px",
                fontWeight: "600",
                color: "rgba(0, 152, 234, 1)",
                letterSpacing: "-0.5px",
                marginBottom: "20px",
                textTransform: "none",
              }}
            >
              Redeem Points for Cash
            </Button>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "11px", lineHeight: "14px" }}>
                Redeem Requirements:
              </p>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px",
                  }}
                >
                  <img src={Cross} alt="Cross Icon" />
                  <p
                    style={{
                      fontSize: "10px",
                      lineHeight: "14px",
                      color: "rgba(117, 117, 122, 1)",
                      textAlign: "left",
                    }}
                  >
                    {"Share us to Telegram groups > 30 groups"}
                  </p>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "4px",
                  }}
                >
                  <img src={Checker} alt="Check Icon" />
                  <p
                    style={{
                      fontSize: "10px",
                      lineHeight: "14px",
                      color: "rgba(117, 117, 122, 1)",
                      textAlign: "left",
                    }}
                  >
                    {"Balance > 10,000 Points"}
                  </p>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              padding: "8px 12px 14px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              gap: "14.5px",
              marginBottom: "10px",
              background: "rgba(247, 249, 251, 1)",
              borderRadius: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <img src={DChecker} alt="Icon" />
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
              >
                Daily check-in
              </p>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0,
                marginBottom: "17px",
              }}
            >
              {dailyData.map((item, index) => (
                <DailyChecker
                  key={index}
                  day={item?.day}
                  icon={item?.icon}
                  checker={item?.checker}
                  amount={item?.amount}
                  selectedDate={item?.selectedDate}
                  passedDate={item?.passedDate}
                />
              ))}
            </Box>
            <Button
              className="poppines_font"
              sx={{
                flex: "1",
                background:
                  "linear-gradient(87.02deg, #0098EA 19.69%, #32B6FD 93.81%)",
                p: "8px 24px",
                borderRadius: "40px",
                fontWeight: "600",
                fontSize: "14px",
                color: "white !important",
                textTransform: "none",
              }}
            >
              Check In to Claim Point
            </Button>
          </Box>
          <Box
            sx={{
              padding: "8px 18px 13px",
              background: "rgba(247, 249, 251, 1)",
              borderRadius: "24px",
              marginBottom: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                marginBottom: "10px",
              }}
            >
              <img src={Cup} alt="Cup Icon" />
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
              >
                Daily challenges
              </p>
            </Box>
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
                marginBottom: "18px",
              }}
            >
              Win 1 match every day to claim
            </p>
            <Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns:
                    "minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr)",
                  gap: "10px",
                  marginBottom: "8px",
                }}
              >
                {DailyChallengeData.map((item, index) => (
                  <DailyChallenge
                    key={index}
                    day={item?.day}
                    icon={item?.icon}
                    checker={item?.checker}
                    amount={item?.amount}
                    selectedDate={item?.selectedDate}
                    passedChallenge={item?.passedChallenge}
                  />
                ))}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "white",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.03)",
                  borderRadius: "7px",
                  padding: "3.78px 17px 5.67px 11.33px",
                  marginBottom: "8px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    gap: "8px",
                    width: "100%",
                  }}
                >
                  <img src={BDailyChallengeCard} alt="daily challenge card" />
                  <Box>
                    <p
                      style={{
                        fontSize: "11px",
                        lineHeight: "14px",
                        color: "rgba(117, 117, 122, 1)",
                        marginBottom: "4px",
                        textAlign: "left",
                      }}
                    >
                      Day 7
                    </p>
                    <p
                      style={{
                        fontSize: "17px",
                        lineHeight: "24px",
                        fontWeight: "600",
                        color: "rgba(37, 41, 70, 1)",
                        textAlign: "left",
                      }}
                    >
                      $1000
                    </p>
                  </Box>
                </Box>
                <Button
                  variant="outlined"
                  style={{
                    padding: "3.78px 11.33px 5.67px 11.33px",
                    fontSize: "8px",
                    lineHeight: "9.44px",
                    borderRadius: "18.89px",
                    border: "0.5px solid rgba(215, 215, 215, 1)",
                    color: "rgba(176, 176, 176, 1)",
                  }}
                >
                  Claim
                </Button>
              </Box>
              <p
                style={{
                  fontSize: "9px",
                  lineHeight: "14px",
                  color: "rgba(117, 117, 122, 1)",
                  textAlign: "left",
                }}
              >
                Ensure a daily win and don't exceed 24 hours between wins to
                avoid resetting the record.
              </p>
            </Box>
          </Box>
          <Box>
            <Box sx={{ marginBottom: "32px" }}>
              <p
                style={{
                  fontWeight: "600",
                  fontSize: "18px",
                  lineHeight: "24px",
                  color: "rgba(37, 41, 70, 1)",
                  marginBottom: "5px",
                }}
              >
                Task For You
              </p>
              <p
                style={{
                  fontSize: "11px",
                  lineHeight: "14px",
                  color: "rgba(117, 117, 122, 1)",
                }}
              >
                Complete all tasks , you will get $ 1000 + 100 Points
              </p>
            </Box>
            <DailyChallengeCard
              background="linear-gradient(78.58deg, #458CFE 0%, #7DD8FD 100%)"
              type={"CASH"}
              amount="$5"
              unit={"USD"}
              desc={"Deposit 10 TG coin"}
              cardContent={"1.3k claimed"}
              buttonTextColor="rgba(0, 152, 234, 1)"
              cardIcon={BlueCardIcon}
            />
            <DailyChallengeCard
              background="linear-gradient(78.58deg, #F99C39 0%, #FF8606 100%)"
              type={"Point"}
              amount="1000"
              unit={"Point"}
              desc={"Play any 3 games , each for over0 minutes."}
              cardContent={"1.3k claimed"}
              buttonTextColor="rgba(249, 156, 57, 1)"
              cardIcon={YelloCardIcon}
            />
            <DailyChallengeCard
              background="linear-gradient(78.58deg, #F99C39 0%, #FF8606 100%)"
              type={"Point"}
              amount="1000"
              unit={"Point"}
              desc={
                "Share TG Games to 3 Telegram groups . At least one group member click your message."
              }
              cardContent={"1.3k claimed"}
              buttonTextColor="rgba(249, 156, 57, 1)"
              cardIcon={YelloCardIcon}
            />
          </Box>
        </Box>
      </Box>
      <Footer />
    </React.Fragment>
  );
};

export default MyProfile;
