import React from "react";
import { Box, useTheme, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import MoneyCard from "../components/MoneyCard";
import NFTCard from "../components/NFTCard";
import { useSelector, useDispatch } from "react-redux";
import { setBackState, increaseIndex } from "../features/navbarSlice";

import { NFTData } from "../Constant";

import MoneyCardIcon from "../assets/images/money_card_icon.svg";
import BCrawn from "../assets/images/b_crawn.svg";
import BHCrawn from "../assets/images/b_half_crawn.svg";

const NFTExplain = () => {
  const theme = useTheme();
  const [explainPage, setExplainPage] = React.useState(0);
  const dispatch = useDispatch();

  const handleNavigate = (value) => {
    setExplainPage(value);
    dispatch(setBackState("/shop_earn_deals"));
    dispatch(increaseIndex());
  };

  return (
    <React.Fragment>
      <Navbar />
      {explainPage === 0 ? (
        <>
          <Box
            sx={{
              marginTop: "16px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: "21px",
              marginBottom: "16px",
            }}
          >
            <p
              style={{
                fontWeight: "800",
                fontSize: "24px",
                lineHeight: "29.04px",
                textShadow: "4px 4px 0px rgba(0, 0, 0, 0.03)",
              }}
            >
              NFT
            </p>
            <MoneyCard
              amount="2430"
              icon={MoneyCardIcon}
              bgColor="#FFEC83"
              color="#542700"
              iconColor="linear-gradient(199.44deg, #FFD612 16.3%, #F99C39 86.96%) "
            />
          </Box>
          <Box sx={{ padding: "0 21px" }}>
            {NFTData.map((item, index) => (
              <NFTCard
                key={index}
                bg={item.bg}
                icon={item.icon}
                title={item.title}
                amount={item.amount}
                url={item.url}
                func={handleNavigate}
                index={item.index}
              />
            ))}
          </Box>
        </>
      ) : (
        <>
          <Box>
            <img
              style={{ width: "100%", marginBottom: "12px" }}
              src={NFTData[explainPage - 1].bg}
              alt="BG Image"
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                paddingLeft: "13px",
                paddingBottom: "13px",
                paddingRight: "20px",
                marginBottom: "13px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "9px",
                }}
              >
                <img src={NFTData[explainPage - 1].icon} alt="Icon" />
                <Box sx={{}}>
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "12px",
                      lineHeight: "17.46px",
                      color: "#252946",
                      textAlign: "left",
                    }}
                  >
                    {NFTData[explainPage - 1].title}
                  </p>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "#000000B8",
                        paddingRight: "2px",
                        paddingLeft: "13px",
                        borderRadius: "27.11px",
                        marginRight: "5px",
                      }}
                    >
                      <p
                        className="poppines_font"
                        style={{
                          fontSize: "12.35px",
                          color: theme.palette.white[0],
                          marginRight: "2px",
                        }}
                      >
                        {NFTData[explainPage - 1].amount}
                      </p>
                      <img
                        style={{ width: "14.3px" }}
                        src={MoneyCardIcon}
                        alt="Money Card"
                      />
                    </Box>
                    <p
                      style={{
                        fontSize: "10px",
                        lineHeight: "14.55px",
                        color: "#252946",
                      }}
                    >
                      by $ spent{" "}
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img src={BCrawn} alt="Crawn" />
                <img src={BHCrawn} alt="Crawn" />
                <img src={BHCrawn} alt="Crawn" />
              </Box>
            </Box>
            <Box sx={{ px: "21px" }}>
              <p
                style={{
                  fontSize: "13px",
                  lineHeight: "18px",
                  color: "#75757A",
                  textAlign: "left",
                  marginBottom: "21px",
                }}
              >
                In October 2022, Telegram founder Pavel Durov announced the
                launch of username trading on Fragment. This feature allows
                Telegram usernames to be transformed into NFTs and traded.
                <br />
                <br />
                In traditional online social spaces, users often express their
                individuality through nicknames, personal IDs, or virtual
                avatars, indicating that these elements hold a certain value.
                With the introduction of username trading on Fragment, this
                value gains liquidity. Any user can convert their Telegram
                username into an NFT using Fragment and sell it. Likewise, users
                can purchase their favorite usernames and use them on Telegram.
                When converting a Telegram username to an NFT, users need to pay
                a one-time fee of 5 Toncoin, and after a successful auction, the
                platform charges a 5% fee.
              </p>
              <Box sx={{ marginBottom: "21px" }}>
                <p
                  style={{
                    fontStyle: "italic",
                    fontWeight: "600",
                    fontSize: "13px",
                    lineHeight: "18px",
                    marginBottom: "9px",
                    textAlign: "left",
                  }}
                >
                  How to get reward?
                </p>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    gap: "9px",
                  }}
                >
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Box
                      sx={{
                        width: "17px",
                        height: "17px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(200.56deg, #6ACBFF 8.29%, #0098EA 86.36%)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px",
                      }}
                    >
                      <p style={{ color: "white" }}>1</p>
                    </Box>
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "18px",
                      }}
                    >
                      Click on the button below
                    </p>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Box
                      sx={{
                        width: "17px",
                        height: "17px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(200.56deg, #6ACBFF 8.29%, #0098EA 86.36%)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px",
                      }}
                    >
                      <p style={{ color: "white" }}>2</p>
                    </Box>
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "18px",
                      }}
                    >
                      We redirect you to partner’s website
                    </p>
                  </Box>
                  <Box
                    sx={{ display: "flex", alignItems: "center", gap: "6px" }}
                  >
                    <Box
                      sx={{
                        width: "17px",
                        height: "17px",
                        borderRadius: "50%",
                        background:
                          "linear-gradient(200.56deg, #6ACBFF 8.29%, #0098EA 86.36%)",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px",
                      }}
                    >
                      <p style={{ color: "white" }}>3</p>
                    </Box>
                    <p
                      style={{
                        fontWeight: "500",
                        fontSize: "12px",
                        lineHeight: "18px",
                      }}
                    >
                      Do your shopping as usual
                    </p>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ py: "16px" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    py: "12px",
                    background:
                      "linear-gradient(90deg, #0098EA 0%, #53BEFE 100%)",
                    "&:hover": {
                      background:
                        "linear-gradient(90deg, #0098EA 0%, #53BEFE 100%)",
                    },
                    borderRadius: "100px",
                  }}
                >
                  <p>Buy Now</p>
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </React.Fragment>
  );
};

export default NFTExplain;
