import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import MoneyCard from "../components/MoneyCard";
import LevelCard from "../components/LevelCard";

import ProfileIcon from "../assets/images/profile.png";
import Flag from "../assets/images/France_Flag.svg";
import MoneyIcon from "../assets/images/money_icon.svg";
import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import Lock from "../assets/images/Lock.svg";
import GameCard from "../assets/images/level_card_3.svg";
import GameCard2 from "../assets/images/level_card_4.svg";
import Card1 from "../assets/images/level_card_1.svg";
import Star from "../assets/images/star.svg";
import Money from "../assets/images/level_money.svg";
import MoneyCardGroup from "../assets/images/level_card_2.svg";
import TournamentIcon from "../assets/images/level_7_icon.svg";

const Levels = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Navbar />
      <Box
        sx={{
          position: "relative",
          paddingLeft: "21px",
          textAlign: "center",
          margin: `${theme.gaps[1]} 0`,
          my: "14px",
          maxWidth: "354px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            background: theme.bgColor[0],
            alignItems: "center",
            justifyContent: "space-between",
            borderRadius: "24px",
            padding: "9px 9px 12px 10px",
          }}
        >
          <Box sx={{ display: "flex" }}>
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
                flexShrink: 0,
                top: "12px",
                left: "34px",
                background: `url(${ProfileIcon}) lightgray 50% / cover no-repeat`,
                borderRadius: "50%",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "49px",
                left: "47px",
                width: "18px",
                height: "18px",
                background:
                  "linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "4",
                fontSize: theme.fontSize.verySmall,
              }}
            >
              <p
                className="poppines_font"
                style={{
                  fontSize: "12.12px",
                  color: theme.palette.white[0],
                  fontWeight: theme.fontWeight.bold,
                }}
              >
                4
              </p>
            </Box>
            <Box sx={{ marginLeft: "12px" }}>
              <p
                className="poppines_font profile_name"
                style={{
                  fontSize: "15px",
                  fontWeight: theme.fontWeight.bold,
                  lineHeight: "22.5px",
                }}
              >
                John_user
              </p>
              <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <img src={Flag} alt="Flag Image" />
                <p
                  style={{
                    color: "#75757A",
                    fontWeight: theme.fontWeight.small,
                    fontSize: "11px",
                  }}
                >
                  France
                </p>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MoneyCard
              amount="$1.35"
              icon={MoneyIcon}
              bgColor="#B5EBD0"
              color="#414646"
              iconColor="linear-gradient(to right, #B5EBD0, #62BA8E)"
            />

            <MoneyCard
              amount="2430"
              icon={MoneyCardIcon}
              bgColor="#FFEC83"
              color="#542700"
              iconColor="linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%) "
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                0
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 1
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.0x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #232731 0%, #373C4C 100%)"
            keyIcon={Lock}
            title={"Unlock 5 Extra Games"}
            png={GameCard}
            starAmount="70"
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                30
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 2
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.2x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 24 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                70
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 3
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.3x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 24 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                140
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 4
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.4x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #232731 0%, #373C4C 100%)"
            keyIcon={Lock}
            title={"Unlock 5 Extra Games"}
            png={GameCard}
            starAmount="70"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #78C885 0%, #40A86F 100%)"
            title={"Unlock Events"}
            png={Money}
            starAmount="70"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 56 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                180
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 5
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.5x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #232731 0%, #373C4C 100%)"
            keyIcon={Lock}
            title={"Unlock 2 Extra Games"}
            png={GameCard2}
            starAmount="70"
            level="5"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 75 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                360
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 6
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.6x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #232731 0%, #373C4C 100%)"
            keyIcon={Lock}
            title={"Unlock 6 Extra Games"}
            png={GameCard}
            starAmount="70"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #FC8F1A 0%, #FC901C 100%)"
            title={"Unlock Offerwall"}
            png={MoneyCardGroup}
            starAmount="70"
            level="6"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 75 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
      <Box sx={{ px: "21px", marginBottom: "14px" }}>
        <Box sx={{ background: "rgba(247, 249, 251, 1)", padding: "11px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <img src={Star} alt="Star Icon" />
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: "500",
                  lineHeight: "24px",
                }}
              >
                600
              </p>
            </Box>
            <p style={{ fontSize: "11px" }}>Your Reward</p>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "8px",
              marginBottom: "14px",
            }}
          >
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
              }}
            >
              Level 7
            </p>
            <p style={{ fontSize: "15px", fontWeight: "600" }}>
              Ticket Multiplier 1.7x
            </p>
          </Box>
          <LevelCard
            bg="linear-gradient(145.76deg, #FF583C 0%, #CC4527 100%)"
            title={"Unlock Tournaments"}
            png={TournamentIcon}
            starAmount="70"
            level="7"
          />
          <LevelCard
            bg="linear-gradient(145.76deg, #1EA4EC 0%, #049AEB 100%)"
            title={"Get 85 Tickets"}
            png={Card1}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Levels;
