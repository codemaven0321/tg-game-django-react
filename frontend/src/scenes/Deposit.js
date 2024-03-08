import React, { useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";

import Navbar from "../components/Navbar";
import DepositCard from "../components/DepositCard";
import DepositCurrencyCard from "../components/DepositCurrencyCard";

import GameController from "../assets/images/game_controller.svg";
import TCoin from "../assets/images/T_coin.svg";
import TetherCoin from "../assets/images/Tether_coin.png";
import EtherCoin from "../assets/images/Ether_coin.png";
import DepositIcon from "../assets/images/deposit.svg";
import PlayIcon from "../assets/images/uil_play.svg";
import DropDownIcon from "../assets/images/dropdown_icon.svg";
import CryptoBot from "../assets/images/CryptoBot.svg";
import Tonkeeper from "../assets/images/Tonkeeper.svg";
import Tonhub from "../assets/images/Tonhub.svg";
import QR from "../assets/images/QR.svg";
import RightArrow from "../assets/images/arrow_right.svg";
import CloseIcon from "../assets/images/close.svg";
import { useTonConnectModal, useTonWallet } from "@tonconnect/ui-react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import axios from "axios";

const Deposit = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const wallet = useTonWallet();
  const { state, open, close } = useTonConnectModal();

  const [tonConnectUI, setOptions] = useTonConnectUI();

  const theme = useTheme();

  const [selectedButton, setSelectedButton] = React.useState("deposit");
  const [rateTG2USD, setRateTG2USD] = React.useState(1.1);
  const [rateETH2USD, setRateETH2USD] = React.useState(2757);
  const [depositAmount, setDepositAmount] = React.useState(10);
  const [moveRightState, setMoveRightState] = React.useState(false);
  const [walletAddress, setWalletAddress] = React.useState("");
  const [editCurrency, setEditCurrency] = React.useState(false);

  const handleSetSelectedButton = (button) => {
    setSelectedButton(button);
    if (!wallet?.name) {
      open();
    }
  };

  useEffect(() => {
    setWalletAddress(userFriendlyAddress);
  }, [userFriendlyAddress]);

  const handleRakutenAPI = async () => {
    // https://developers.rakutenadvertising.com/documentation/en-US/affiliate_apis#/
    const result = await axios.get("https://api.linksynergy.com/coupon/1.0");
    // Access Token successfully generated for tg games: Hgitp3whHFelWykNtzNIz9kR4QyayULO
    // Client ID:OcKsUkEowpiRXaZZSBVp36iB8RYDXE0L
    // Client Secret:X2zmV1QzPg460ciMs91CQJ6DpMPQSky2
    // GET https://api.linksynergy.com/coupon/1.0
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Box sx={{ px: "21px", height: "100vh" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
          }}
        >
          <img src={GameController} alt="Icon" />
          <Box
            sx={{
              borderRadius: "100px",
              padding: "4px 6px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(241, 241, 242, 1)",
            }}
          >
            <Button
              className="poppines_font"
              startIcon={<img src={DepositIcon} alt="Deposit Icon" />}
              sx={{
                borderRadius: "20px",
                background:
                  "linear-gradient(87deg, #0098EA 19.69%, #32B6FD 93.81%)",
                padding: "4px 16px",
                fontSize: "10.38px",
                color: "white !important",
                boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
                "&:hover": {
                  background:
                    "linear-gradient(87deg, #0098EA 19.69%, #32B6FD 93.81%)",
                },
                textTransform: "capitalize",
              }}
              onClick={async () => {
                if (!wallet?.name) {
                  open();
                } else {
                  alert("wallet already connected!");
                }
              }}
            >
              {selectedButton}
            </Button>
            <Box
              sx={{
                borderRadius: "20px",
                padding: "4px 16px",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              <img src={TCoin} alt="Coin Icon" />
              <p
                style={{
                  color: "#2F2F2F",
                  fontSize: "10.38px",
                }}
              >
                100.00
              </p>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            borderRadius: "100px",
            padding: "4px 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(241, 241, 242, 1)",
            marginBottom: "15px",
          }}
        >
          <Box
            sx={{
              width: "50%",
              borderRadius: "20px",
              background:
                selectedButton === "deposit" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => handleSetSelectedButton("deposit")}
          >
            <p
              style={{
                color:
                  selectedButton === "deposit"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Deposit
            </p>
          </Box>
          <Box
            sx={{
              width: "50%",
              borderRadius: "20px",
              background:
                selectedButton === "withdraw"
                  ? "rgba(0, 152, 234, 1)"
                  : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => handleSetSelectedButton("withdraw")}
          >
            <p
              style={{
                color:
                  selectedButton === "withdraw"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Withdraw
            </p>
          </Box>
        </Box>

        {selectedButton === "deposit" ? (
          <Box
            sx={{
              backgroundColor: "#F7F9FB",
              pt: "43px",
              pb: "16px",
              overflow: "hidden",
              borderRadius: "24px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "22px",
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  fontSize: "59px",
                  fontWeight: "600",
                  color: "#252946",
                  width:"100px"
                }}
              >
                {depositAmount}
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "white",
                  boxShadow: "0px 3.14px 3.14px 0 rgb(0, 0, 0, 0)",
                  padding: "6.7px",
                  gap: "4px",
                  borderRadius: "5.49px",
                  cursor: "pointer",
                }}
              >
                <img
                  style={{ width: "19.62px", height: "19/62px" }}
                  src={TCoin}
                  alt="T Icon"
                />
                <p
                  style={{
                    fontSize: "15.7px",
                    fontWeight: "600",
                    color: "#252946",
                  }}
                >
                  TG
                </p>
                <img src={DropDownIcon} alt="DropDown" />
              </Box>
            </Box>
            <Box
              sx={{
                px: "21px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "9px",
                width: "100%",
                marginBottom: "20px",
              }}
            >
              {[5, 10, 20, 25, 50].map((charge) => (
                <Box
                  sx={{
                    background: charge === depositAmount ? "#0098EA" : "white",
                    color: charge === depositAmount ? "white !important" : "",
                    py: "13px",
                    flex: 1,
                    fontWeight: "700",
                    fontSize: "17px",
                    lineHeight: "16px",
                    borderRadius: "7px",
                    boxShadow: "0 4px 4px 0px rgba(0, 0, 0, 0.03)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setDepositAmount(charge);
                  }}
                >
                  {charge}
                </Box>
              ))}
            </Box>
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
                marginBottom: "20px",
                "&::-webkit-scrollbar": {
                  width: 4,
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "transparent",
                },
              }}
            >
              <DepositCard text="@CryptoBot" icon={CryptoBot} />
              <DepositCard text="Tonkeeper" icon={Tonkeeper} />
              <DepositCard text="Tonhub" icon={Tonhub} />
              <DepositCard text="QR Code" icon={QR} />
            </Box>
            <Box
              sx={{
                px: "21px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                gap: "8px",
              }}
            >
              <Button
                startIcon={<img src={DepositIcon} alt="Deposit Icon" />}
                sx={{
                  borderRadius: "20px",
                  background:
                    "linear-gradient(87deg, #0098EA 19.69%, #32B6FD 93.81%)",
                  padding: "4px 16px",
                  fontSize: "10.38px",
                  color: "white !important",
                  width: "50%",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
                  "&:hover": {
                    background:
                      "linear-gradient(87deg, #0098EA 19.69%, #32B6FD 93.81%)",
                  },
                  textTransform: "capitalize",
                }}
                onClick={() => {
                  setEditCurrency(true);
                }}
              >
                Deposit
              </Button>
              <Button
                startIcon={<img src={PlayIcon} alt="Deposit Icon" />}
                sx={{
                  borderRadius: "20px",
                  background:
                    "linear-gradient(87deg, #748D99 19.69%, #93B1C0 93.81%)",
                  padding: "4px 16px",
                  fontSize: "10.38px",
                  color: "white !important",
                  width: "50%",
                  boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.10)",
                  "&:hover": {
                    background:
                      "linear-gradient(87deg, #748D99 19.69%, #93B1C0 93.81%)",
                  },
                  textTransform: "capitalize",
                }}
              >
                Play 0.8 TG
              </Button>
            </Box>
            <p
              style={{
                fontWeight: "700",
                fontSize: "11px",
                lineHeight: "14px",
                color: "0E0E0E",
              }}
            >
              1 TG = {rateTG2USD} USD
            </p>
          </Box>
        ) : (
          <>
            <Box sx={{ textAlign: "left" }}>
              <p
                style={{
                  display: "inline",
                  fontSize: "14px",
                  fontWeight: "700",
                  lineHeight: "14px",
                  color: "#0098EA",
                }}
              >
                Auto-withdraw
              </p>
            </Box>
            <p
              style={{
                fontWeight: "500",
                fontSize: "10px",
                lineHeight: "18px",
                color: "#0E0E0E",
                textAlign: "left",
                marginBottom: "13px",
              }}
            >
              To withdraw, please add your TON wallet address
            </p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                background: "rgba(169, 169, 169, 0.1)",
                px: "15px",
                borderRadius: "20px",
              }}
            >
              <input
                style={{
                  border: "0",
                  background: "rgba(169, 169, 169, 0)",
                  outline: "none",
                  width: "100%",
                  height: "44px",
                }}
                value={walletAddress}
                onChange={(e) => setWalletAddress(e.target.value)}
                type="text"
                placeholder="Wallet Address"
              />
              <img src={RightArrow} alt="Right Arrow Icon" />
            </Box>
          </>
        )}
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100vh",
            background: "rgba(0, 0, 0, 0.44)",
            top: "0",
            left: "0",
            alignItems: "flex-end",
            justifyContent: "center",
            display: editCurrency ? "flex" : "none",
            transition: "all 0.4s",
          }}
        >
          <Box
            sx={{
              padding: "12px 21px 39px",
              position: "relative",
              background: "white",
              width: "100%",
              borderTopRightRadius: "10px",
              borderTopLeftRadius: "10px",
            }}
          >
            <img
              style={{
                position: "absolute",
                top: "12px",
                right: "16px",
                cursor: "pointer",
              }}
              src={CloseIcon}
              alt="Close Icon"
              onClick={() => setEditCurrency(false)}
            />
            <Box sx={{ marginBottom: "29px" }}>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "#252946",
                }}
              >
                Deposit
              </p>
            </Box>
            <Box sx={{ marginBottom: "22px", textAlign: "left" }}>
              <p
                style={{
                  fontSize: "13px",
                  fontWeight: "15px",
                  color: "#252946",
                  lineHeight: "24px",
                }}
              >
                Choose your prefered currency
              </p>
            </Box>
            <Box sx={{ marginBottom: "29px" }}>
              <DepositCurrencyCard
                type="TG"
                bgColor="linear-gradient(82deg, #0098EA 5.49%, #0098EA 48.11%, #53BEFE 96.19%)"
                icon={TCoin}
                coinName={"TG coin"}
                currency={"TG"}
                amount={depositAmount.toPrecision(3)}
                onClick={async () => {
                  if (!wallet?.name) {
                    open();
                  }

                  // const wallets = await tonConnectUI.getWallets();
                  // console.log({ wallets });

                  const myTransaction = {
                    validUntil: Math.floor(Date.now() / 1000) + 360,
                    messages: [
                      {
                        // UQB7RE0cHoJcj1G6BcPdTC9s1j84xM5xiSQPdtg2gPiZ6Jxr
                        // EQB7RE0cHoJcj1G6BcPdTC9s1j84xM5xiSQPdtg2gPiZ6MGu
                        address:
                          "UQDuOlIqYLpC55bsjQwfO6pL70AqYlSR8W-SdtNMkeqI3mSX",
                        amount: (depositAmount * 1000000).toString(),
                      },
                    ],
                  };

                  tonConnectUI
                    .sendTransaction(myTransaction, {
                      modals: ["before", "success", "error"],
                      notifications: ["before", "success", "error"],
                    })
                    .then((result) => {
                      console.log({ myTransaction, result });
                    })
                    .catch((error) => {
                      console.error(error);
                    });
                }}
              />
            </Box>
            <Box sx={{ marginBottom: "16px" }}>
              <DepositCurrencyCard
                type="Tether"
                bgColor="linear-gradient(82deg, #DEDEDE 5.49%, #E6E6E6 48.11%, #EAEAEA 96.19%)"
                icon={TetherCoin}
                coinName={"Tether"}
                currency={"USDT"}
                amount={(depositAmount * rateTG2USD).toPrecision(3)}
              />
            </Box>
            <Box sx={{ marginBottom: "29px" }}>
              <DepositCurrencyCard
                type="Ether"
                bgColor="linear-gradient(82deg, #DEDEDE 5.49%, #E6E6E6 48.11%, #EAEAEA 96.19%)"
                icon={EtherCoin}
                coinName={"Ethereum"}
                currency={"ETH"}
                amount={(
                  (depositAmount * rateTG2USD) /
                  rateETH2USD
                ).toPrecision(3)}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Deposit;
