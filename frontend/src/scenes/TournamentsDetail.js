import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserProfile } from "../middleware/userMiddleware";
import { Box, useTheme, Button } from "@mui/material";
import Navbar from "../components/Navbar";
import TournamentFooter from "../components/TournamentFooter";
import PrizeCard from "../components/PrizeCard";

import TMainIcon from "../assets/images/t_main_2.png";
import TSub from "../assets/images/t_sub.svg";
import Man1 from "../assets/images/man2.png";
import Man2 from "../assets/images/man3.png";
import Female1 from "../assets/images/female1.png";
import Preview1 from "../assets/images/t_preview_1.png";
import Preview2 from "../assets/images/t_preview_2.png";
import Preview3 from "../assets/images/t_preview_3.svg";

import SecondMan from "../assets/images/2st_man.png";
import FirstMan from "../assets/images/1st_man.png";
import ThirdMan from "../assets/images/3st_man.png";
import SecondMark from "../assets/images/2st_mark.png";
import FirstMark from "../assets/images/1st_mark.png";
import ThirdMark from "../assets/images/3st_mark.png";
import SecondTower from "../assets/images/2st_tower.png";
import FirstTower from "../assets/images/1st_tower.png";
import ThirdTower from "../assets/images/3st_tower.png";
import USDTCard from "../assets/images/usdt_coin_card.png";
import TGCoinCard from "../assets/images/tg_coin_card.png";
import TetherCard from "../assets/images/tether_coin_card.png";
import NFTCard from "../assets/images/nft_coin_card.png";
import RankingCardIcon from "../assets/images/ranking_card.png";
import FranceMan from "../assets/images/france_man.png";
import MoneyIcon from "../assets/images/group_money.png";
import WonPrizeIcon from "../assets/images/won_prize_card.png";
import PMoneyIcon from "../assets/images/p_money.svg";
import PNFTIcon from "../assets/images/p_nft.svg";
import PStarIcon from "../assets/images/p_star.svg";
import PTonIcon from "../assets/images/p_ton.svg";
import CupIcon from "../assets/images/cup.svg";
import WinIcon from "../assets/images/check.svg";
import FailIcon from "../assets/images/cross.svg";
import WinnerAvatar from "../assets/images/winner_avatar.png";
import LoserAvatar from "../assets/images/loser_avatar.png";
import EmptyCircle from "../assets/images/empty_circle.png";
import CloseIcon from "../assets/images/close.svg";
import MoreBtn from "../assets/images/moreBtn.svg";
import BSquare from "../assets/images/BigSquare.svg";
import SSquare from "../assets/images/SmSquare.svg";

import RankingCard from "../components/RankingCard";

import { getRankingData } from "../features/globalSlice";
import { LanguageFlags, Countries, Languages } from "../Constant";

const TournamentsDetail = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.user.userProfile);
  const { rankingData, recordData } = useSelector((state) => state.global.data);
  console.log({ rankingData });
  useEffect(() => {
    dispatch(getUserProfile());
    dispatch(getRankingData());
  }, [dispatch]);

  const [moveRightState, setMoveRightState] = React.useState(false);
  const [selectedButton, setselectedButton] = React.useState("detail");
  const [choosePrize, setChoosePrize] = React.useState(false);

  const handleChoosePrize = () => {
    setselectedButton("ranking");
    setChoosePrize(true);
  };

  // 2000k
  return (
    <Box sx={{ position: "relative" }}>
      <Navbar />
      <Box sx={{ px: "21px" }}>
        <Box
          sx={{
            mt: "45px",
            mb: "46px",
            height: "106px",
            width: "100%",
            background:
              "linear-gradient(105deg, #726CC7 13.62%, #342D73 60.7%)",
            borderRadius: "19px",
            position: "relative",
          }}
        >
          <img
            src={TMainIcon}
            style={{
              position: "absolute",
              right: "10px",
              top: "-31px",
            }}
            alt="Image"
          />
          <img
            style={{
              position: "absolute",
              left: "50%",
              bottom: "0",
              transform: "translate(-50%, 50%)",
            }}
            src={TSub}
            alt="Image"
          />
        </Box>
        <p
          style={{
            color: "#252946",
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "16px",
            height: "32px",
          }}
        >
          Cubie Dash Tournament
        </p>
        <Button
          variant="outlined"
          sx={{
            borderRadius: "84.53px",
            py: "0",
            px: "7.53px",
            border: "1px solid #728A96",
            fontSize: "10.144px",
            fontWeight: "600",
            lineHeight: "20.20px",
            color: "#728A96",
            marginBottom: "12.09px",
            "&:hover": {
              border: "1px solid #728A96",
            },
          }}
        >
          sport
        </Button>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
            marginBottom: "22px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "-4px",
            }}
          >
            <img style={{ zIndex: 3 }} src={Man1} alt="People Icon" />
            <img
              style={{ zIndex: 2, marginLeft: "-10px" }}
              src={Man2}
              alt="People Icon"
            />
            <img
              style={{ zIndex: 1, marginLeft: "-10px" }}
              src={Female1}
              alt="People Icon"
            />
          </Box>
          <p style={{ fontSize: "12px", color: "#505057", lineHeight: "14px" }}>
            32 friends are playing
          </p>
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
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "detail" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("detail")}
          >
            <p
              style={{
                color:
                  selectedButton === "detail"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Detail
            </p>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "ranking" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("ranking")}
          >
            <p
              style={{
                color:
                  selectedButton === "ranking"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Ranking
            </p>
          </Box>
          <Box
            sx={{
              flex: 1,
              borderRadius: "20px",
              background:
                selectedButton === "record" ? "rgba(0, 152, 234, 1)" : "unset",
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={() => setselectedButton("record")}
          >
            <p
              style={{
                color:
                  selectedButton === "record"
                    ? "white"
                    : "rgba(117, 117, 122, 1)",
                fontSize: "12px",
              }}
            >
              Record
            </p>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "28px" }}>
        {selectedButton === "detail" ? (
          <Box>
            <Box
              sx={{
                padding: "16px 0px 16px 21px",
                overflow: "hidden",
                background: "#F7F9FB",
                marginBottom: "16px",
              }}
            >
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "24px",
                  color: "#252946",
                  marginBottom: "16px",
                }}
              >
                Preview
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                }}
              >
                <img src={Preview1} alt="Preview Img" />
                <img src={Preview2} alt="Preview Img" />
                <img src={Preview3} alt="Preview Img" />
              </Box>
            </Box>
            <Box>
              <p
                style={{
                  fontSize: "18px",
                  color: "#252946",
                  fontWeight: "600",
                  lineHeight: "24px",
                  marginBottom: "16px",
                }}
              >
                About this game
              </p>
              <p
                style={{
                  padding: "0 21px",
                  fontSize: "13px",
                  lineHeight: "18px",
                  color: "#75757A",
                  textAlign: "left",
                }}
              >
                With Magic Tiles 3, you can play various types of music: pop,
                rap, acappella, EDM, jazz, instrumental. A thousand of songs is
                waiting for you. Let's explore more to find the rainbow in your
                mind.
                <br />
                Magic Tiles 3 key features: <br />
                1. Appealing, modern and diverse music genres to satisfy every
                music taste! We have over 1000 songs waiting for you to conquer.{" "}
                <br />
                2. Finely-built online mode – connect with countless players all
                around the world. You can also invite your friends/enemies into
                a room and battle each other.
                <br /> 3. Weekly tournament comes with irresistible rewards.
                <br /> 4. Band mode where you can play with additional
                instruments such as guitar, piano and so many more.
                <br /> Game’s rules:
                <br /> 1. Tap the black tiles <br />
                2. Avoid the white tiles <br />
                3. Expect to speed up with each song level
                <br /> Log in to your Facebook account and share data on
                multiple devices <br />
                So, get ready to try out the most challenging piano game for
                free!
                <br /> Besides, to improve the game’s performance and offer a
                customized user experience based on your location we do ask for
                permission to access to your storage and location.
                <br /> Become a real pianist now! <br />
                <br />
                Note:
                <br /> * Albums and their related contents are not included
                subscription privilege and may need separate purchases to
                unlock.
                <br /> * Price is equal to the value that "Apple's App Store
                Matrix" determines is the equivalent of the subscription price
                in USD.
                <br /> Magic Tiles 3 is from Amanotes, the number one music
                games publisher in the world, with over one billion downloads.
                Music lovers can interact with thousand of songs through our
                different apps. Why just listen to music, if you can also play
                with it? At Amanotes, we believe that “everyone can music!".
              </p>
            </Box>
          </Box>
        ) : selectedButton === "ranking" ? (
          <Box
            sx={{
              pt: choosePrize ? "29px" : "145px",
              px: "21px",
              background:
                "linear-gradient(180deg, #FFF 2.51%, #0098EA 37.22%, #0098EA 76.27%, #FFF 97.43%)",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "334px",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 0%)",
                py: "9px",
                background: "white",
                borderRadius: "24px",
                display: choosePrize ? "none" : "block",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  marginBottom: "6px",
                }}
              >
                <img src={RankingCardIcon} alt="Ranking card" />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "#252946",
                  }}
                >
                  My Ranking
                </p>
              </Box>
              <p
                style={{
                  fontSize: "10px",
                  color: "#252946",
                  fontWeight: "500",
                  marginBottom: "16px",
                }}
              >
                You are doing better than 10% of other players!
              </p>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "22px",
                }}
              >
                <Box sx={{ position: "relative" }}>
                  <img
                    src={userProfile?.avatar}
                    alt="My Avatar"
                    style={{ width: 47, height: 47, borderRadius: "50%" }}
                  />
                  {/* <img src={ FranceMan} alt="My Avatar" style={{width:47, height:47}}/> */}
                  <Box
                    sx={{
                      width: "17px",
                      height: "17px",
                      border: "1px solid white",

                      position: "absolute",
                      bottom: "0",
                      left: "50%",
                      transform: "translate(-44%, 30%)",
                      background:
                        "linear-gradient(42deg, #0098EA 18.77%, #6CC2F1 100%)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "8px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        color: "white",
                        lineHeight: "18.118px",
                        fontWeight: "600",
                      }}
                    >
                      4
                    </p>
                  </Box>
                </Box>
                <Box>
                  <img src={MoneyIcon} alt="Money Icon" />
                  <p
                    style={{
                      fontWeight: "600",
                      fontSize: "15px",
                      lineHeight: "28px",
                      color: "#252946",
                    }}
                  >
                    2000k
                  </p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                marginBottom: "16.19px",
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box>
                    <img
                      style={{
                        border:"2px solid white",
                        borderRadius: "50%",
                      }}
                      src={`${process.env.REACT_APP_API_URL}/images/${rankingData[0]?.avatar}/`}
                      height={80}
                      width={80}
                      alt="People Avatar"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {rankingData[0]?.username}
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      3500K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={SecondTower} alt="Tower Icon" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box>
                    <img
                      style={{
                        border:"2px solid white",
                        borderRadius: "50%",
                      }}
                      src={`${process.env.REACT_APP_API_URL}/images/${rankingData[1]?.avatar}/`}
                      height={80}
                      width={80}
                      alt="People Avatar"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {rankingData[1]?.username}
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      4000K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={FirstTower} alt="Tower Icon" />
              </Box>
              <Box sx={{ flex: 1 }}>
                <Box sx={{ px: "17.94px" }}>
                  <Box>
                    <img
                      style={{
                        border:"2px solid white",
                        borderRadius: "50%",
                      }}
                      src={`${process.env.REACT_APP_API_URL}/images/${rankingData[2]?.avatar}/`}
                      height={80}
                      width={80}
                      alt="People Avatar"
                    />
                  </Box>
                  <p
                    style={{
                      fontSize: "12px",
                      color: "white",
                      lineHeight: "20px",
                      fontWeight: "600",
                      marginBottom: "4px",
                    }}
                  >
                    {rankingData[2]?.username}
                  </p>
                  <Box
                    sx={{
                      background: "white",
                      px: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "3.5px",
                      borderRadius: "87.568px",
                      marginBottom: "20.55px",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "11.09px",
                        fontWeight: "600",
                        lineHeight: "25.876px",
                        color: "#252946",
                      }}
                    >
                      3000K
                    </p>
                    <img src={USDTCard} alt="Coin Card" />
                  </Box>
                </Box>
                <img src={ThirdTower} alt="Tower Icon" />
              </Box>
            </Box>
            <Box
              sx={{
                display: choosePrize ? "none" : "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {rankingData.slice(3).map((item, index) => (
                <RankingCard
                  key={index}
                  avatar={item.avatar}
                  title={item.ranking}
                  username={item.username}
                  flag={LanguageFlags[item.region]}
                  country={item.country}
                  tg_coin={item.tgCoin}
                  title_2={item.tgAmount}
                  coinIcon={item.usdtCoin}
                  amount={item.usdtAmount}
                />
              ))}
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              pt: "339px",
              px: "21px",
              background:
                "linear-gradient(180deg, #FFF 2.51%, #0098EA 37.22%, #0098EA 76.27%, #FFF 97.43%)",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "334px",
                position: "absolute",
                top: "0",
                left: "50%",
                transform: "translate(-50%, 0%)",
                py: "9px",
                background: "white",
                borderRadius: "24px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "15px",
                  marginBottom: "10px",
                }}
              >
                <img src={WonPrizeIcon} alt="Ranking card" />
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    color: "#252946",
                  }}
                >
                  Won Prize
                </p>
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
                }}
              >
                <Box
                  sx={{
                    padding: "21px",
                    // borderRight: "1px solid #BABABC",
                  }}
                >
                  <img
                    src={PMoneyIcon}
                    alt="Money Icon"
                    style={{ marginBottom: "5.5px" }}
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      color: "#252946",
                      marginBottom: "4px",
                    }}
                  >
                    $1000
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                      color: "#75757A",
                    }}
                  >
                    USD
                  </p>
                </Box>
                <Box
                  sx={{
                    padding: "21px",
                    // borderBottom: "1px solid #BABABC",
                  }}
                >
                  <img
                    src={PTonIcon}
                    alt="Money Icon"
                    style={{ marginBottom: "5.5px" }}
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      color: "#252946",
                      marginBottom: "4px",
                    }}
                  >
                    6,000
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                      color: "#75757A",
                    }}
                  >
                    Toncoin
                  </p>
                </Box>
                <Box
                  sx={{
                    padding: "21px",
                    // borderTop: "1px solid #BABABC",
                  }}
                >
                  <img
                    src={PStarIcon}
                    alt="Money Icon"
                    style={{ marginBottom: "5.5px" }}
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      color: "#252946",
                      marginBottom: "4px",
                    }}
                  >
                    10,009
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                      color: "#75757A",
                    }}
                  >
                    Point
                  </p>
                </Box>
                <Box
                  sx={{
                    padding: "21px",
                    // borderLeft: "1px solid #BABABC",
                  }}
                >
                  <img
                    src={PNFTIcon}
                    alt="Money Icon"
                    style={{ marginBottom: "5.5px" }}
                  />
                  <p
                    style={{
                      fontSize: "24px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      color: "#252946",
                      marginBottom: "4px",
                    }}
                  >
                    25
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      lineHeight: "12px",
                      color: "#75757A",
                    }}
                  >
                    NFTs
                  </p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                marginBottom: "14px",
                padding: "8px",
                borderRadius: "24px",
                background: "white",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  marginBottom: "10px",
                  marginLeft: "-28px",
                }}
              >
                <img src={CupIcon} alt="Cup Icon" />
                <p
                  style={{
                    textTransform: "uppercase",
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  WINS
                </p>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    padding: "16px 27px 9px",
                    borderRight: "1px solid #BABABC",
                  }}
                >
                  <p
                    style={{
                      color: "#0098EA",
                      fontSize: "30px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      marginBottom: "4px",
                    }}
                  >
                    100
                  </p>
                  <p
                    style={{
                      color: "#75757A",
                      fontSize: "12px",
                      lineHeight: "14px",
                    }}
                  >
                    Matches Won
                  </p>
                </Box>
                <Box
                  sx={{
                    padding: "16px 27px 9px",
                  }}
                >
                  <p
                    style={{
                      color: "#0098EA",
                      fontSize: "30px",
                      fontWeight: "600",
                      lineHeight: "24px",
                      marginBottom: "4px",
                    }}
                  >
                    50
                  </p>
                  <p
                    style={{
                      color: "#75757A",
                      fontSize: "12px",
                      lineHeight: "14px",
                    }}
                  >
                    Winning Streak
                  </p>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "12px",
                borderRadius: "24px",
                background: "#F7F9FB",
                padding: "13px 17px",
              }}
            >
              <Box
                sx={{
                  pt: "4px",
                  pl: "8px",
                  background: "white",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    color: "#252946",
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    textAlign: "left",
                  }}
                >
                  Win
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "-21px",
                  }}
                >
                  <img src={WinIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={WinIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={WinIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={WinIcon} alt="Icon" />
                  <img src={WinIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={WinnerAvatar} alt="Icon" />
                </Box>
              </Box>
              <Box
                sx={{
                  pt: "4px",
                  pl: "8px",
                  background: "white",
                  width: "100%",
                }}
              >
                <p
                  style={{
                    color: "#252946",
                    fontSize: "15px",
                    fontWeight: "600",
                    lineHeight: "24px",
                    textAlign: "left",
                  }}
                >
                  Win
                </p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    marginTop: "-21px",
                  }}
                >
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={FailIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={FailIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={FailIcon} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={EmptyCircle} alt="Icon" />
                  <img src={FailIcon} alt="Icon" />
                  <img src={FailIcon} alt="Icon" />
                  <img src={LoserAvatar} alt="Icon" />
                </Box>
              </Box>
              {recordData.map((item, index) => (
                <RankingCard
                  key={index}
                  avatar={item.avatar}
                  title={item.record}
                  username={item.username}
                  flag={item.flag}
                  country={item.country}
                  title_2={item.state}
                  color={item.stateColor}
                  coinIcon={item.usdtCoin}
                  amount={item.usdtAmount}
                />
              ))}
            </Box>
          </Box>
        )}
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: choosePrize ? "flex" : "none",
          width: "100%",
          height: "100%",
          // background: moveRightState ? "rgba(0, 0, 0, 0.44)" : "unset",
          background: "rgba(0, 0, 0, 0.44)",
          top: "0",
          left: "0",
          transition: "all 0.4s",
          alignItems: "flex-end",
          justifyContent: "center",
          zIndex: 99,
          overflow: "hidden",
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
            onClick={() => setChoosePrize(false)}
          />
          <Box
            sx={{
              marginBottom: "14px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <img src={CupIcon} alt="Cup Icon" />
            <p
              style={{
                fontSize: "15px",
                fontWeight: "600",
                lineHeight: "24px",
                color: "#252946",
              }}
            >
              Play with Points
            </p>
          </Box>
          <Box
            sx={{
              padding: "22px 26px 22px 20px",
              borderRadius: "22.458px",
              background: "linear-gradient(79deg, #F99C39 0%, #FF8606 100%)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <img
              style={{
                position: "absolute",
                opacity: "0.3",
                left: "-23px",
                top: "-44px",
              }}
              src={BSquare}
              alt="Icon"
            />
            <img
              style={{
                position: "absolute",
                opacity: "0.3",
                right: "-6px",
                top: "-84px",
              }}
              src={BSquare}
              alt="Icon"
            />
            <img
              style={{
                position: "absolute",
                opacity: "0.3",
                right: "112px",
                top: "-40px",
              }}
              src={SSquare}
              alt="Icon"
            />
            <img
              style={{
                position: "absolute",
                opacity: "0.3",
                right: "84px",
                top: "81px",
              }}
              src={SSquare}
              alt="Icon"
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                marginBottom: "22px",
              }}
            >
              <p
                style={{
                  color: "white",
                  fontSize: "47px",
                  fontWeight: "600",
                  lineHeight: "18.466px",
                }}
              >
                80
              </p>
              <Box
                sx={{
                  background: "rgba(255, 255, 255, 0.07)",
                  borderRadius: "7.486px",
                  padding: "3.743px 7.09px 3.743px 7.386px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "11.229px",
                    fontWeight: "600",
                    lineHeight: "16.844px",
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
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "11px",
                }}
              >
                <p
                  style={{
                    color: "white",
                    fontSize: "13.834px",
                    fontWeight: "400",
                    lineHeight: "23.057px",
                  }}
                >
                  Entry
                </p>
                <Box
                  sx={{
                    padding: "3.5px",
                    borderRadius: "5.764px",
                    boxShadow:
                      "0px 3.376px 3.376px 0px rgba(21, 173, 255, 0.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "3px",
                    background: "white",
                  }}
                >
                  <p
                    style={{
                      color: "#F99C39",
                      fontSize: "11.817px",
                      fontWeight: "500",
                      lineHeight: "16.881px",
                    }}
                  >
                    50
                  </p>
                  <img src={TGCoinCard} alt="Icon" />
                </Box>
              </Box>
              <img style={{ width: "31.13px" }} src={MoreBtn} alt="Icon" />
            </Box>
          </Box>
          {/* <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "1000.73px",
              paddingRight: !moveRightState ? 0 : "21px",
              marginLeft: moveRightState ? "-463px" : "unset",
              transition: "all 0.7s",
              gap: "12.68px",
            }}
          >
            <PrizeCard
              title={"WIN CASH"}
              fontColor={"#13A199"}
              bgColor={
                "linear-gradient(82deg, #13A199 5.49%, #15B4AB 48.11%, #13C4BA 96.19%)"
              }
              amount={"4.8"}
              coin={"$"}
              currency={"USD"}
              coinIcon={USDTCard}
              coinAmount={"3"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
            <PrizeCard
              title={"WIN POINT"}
              fontColor={"#F99C39"}
              bgColor={
                "linear-gradient(82deg, #F99C39 5.49%, #FFAF5A 48.11%, #FFA443 96.19%)"
              }
              amount={"80"}
              coin={""}
              currency={""}
              coinIcon={TGCoinCard}
              coinAmount={"50"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
            <PrizeCard
              title={"WIN TONCOIN"}
              fontColor={"#4B52D8"}
              bgColor={
                "linear-gradient(82deg, #3C42C2 5.49%, #4E56D9 48.11%, #4951E1 96.19%)"
              }
              amount={"80"}
              coin={""}
              currency={""}
              coinIcon={TetherCard}
              coinAmount={"50"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
            <PrizeCard
              title={"WIN POINT"}
              fontColor={"#F99C39"}
              bgColor={
                "linear-gradient(82deg, #F99C39 5.49%, #FFAF5A 48.11%, #FFA443 96.19%)"
              }
              amount={"80"}
              coin={""}
              currency={""}
              coinIcon={TGCoinCard}
              coinAmount={"50"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
            <PrizeCard
              title={"WIN TONCOIN"}
              fontColor={"#4B52D8"}
              bgColor={
                "linear-gradient(82deg, #3C42C2 5.49%, #4E56D9 48.11%, #4951E1 96.19%)"
              }
              amount={"80"}
              coin={""}
              currency={""}
              coinIcon={TetherCard}
              coinAmount={"50"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
            <PrizeCard
              title={"WIN NFT"}
              fontColor={"#0098EA"}
              bgColor={
                "linear-gradient(82deg, #0098EA 5.49%, #2BB5FF 48.11%, #50C0FC 96.19%)"
              }
              amount={"25"}
              coin={""}
              currency={""}
              coinIcon={NFTCard}
              coinAmount={"50"}
              setMoveRightState={setMoveRightState}
              moveRightState={moveRightState}
            />
          </Box> */}
        </Box>
      </Box>
      <TournamentFooter
        handleChoosePrize={handleChoosePrize}
        choosePrize={choosePrize}
      />
    </Box>
  );
};

export default TournamentsDetail;
