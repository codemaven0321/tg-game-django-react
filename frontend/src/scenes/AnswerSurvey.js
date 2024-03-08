import React, { useEffect, useState } from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Surveys from "../assets/images/Surveys.svg";
import Coins from "../assets/images/coins.png";
import GameController from "../assets/images/gameController.svg";
import { SurveyData } from "../Constant";
import SurveyCard from "../components/SurveyCard";
import Iframe from "react-iframe";
var pollfishConfig = {
  api_key: "aff4031d-a3cf-4693-92a0-7958183ecd8b",
  debug: true,
  user_id: "test1234",
  offerwall: true,
};
window.pollfishConfig = pollfishConfig;

const AnswerSurvey = () => {
  const theme = useTheme();
  const [visibleThirdpartyAPI, setVisibleThirdpartyAPI] = useState(null);

  const getCpxResearchAPI = () => {
    let urlWithParams =
      "https://offers.cpx-research.com/index.php?app_id=21776&ext_user_id=test1234";
    setVisibleThirdpartyAPI({
      url: urlWithParams,
    });
  };

  const getBitLabsAPI = () => {
    // URL with all desired parameters set
    let urlWithParams =
      "https://web.bitlabs.ai/?uid=test1234&token=c6706ce8-9fc9-4b7d-9cdb-9d53d0591626&width=full_width&navigation_color=%2353BEFE&survey_icon_color=%23458CFE&interaction_color=%2353BEFE";

    setVisibleThirdpartyAPI({
      url: urlWithParams,
    });
  };

  const getTheoremreachAPI = () => {
    let urlWithParams = `https://theoremreach.com/respondent_entry/direct?api_key=21fe1361b7c5873edd1afd477d98&user_id=test1234&transaction_id=${Date.now()}`;
    setVisibleThirdpartyAPI({
      url: urlWithParams,
    });
  };

  const getPollfishAPI = () => {
    console.log({ Pollfish: window.Pollfish });
    window.Pollfish?.showFullSurvey();
  };

  const handleClicks = [
    getCpxResearchAPI,
    getBitLabsAPI,
    getCpxResearchAPI,
    getTheoremreachAPI,
    getPollfishAPI,
  ];

  return (
    <>
      {visibleThirdpartyAPI && (
        <Box
          sx={{
            width: "110%",
            height: "110%",
            backgroundColor: "#000000cc",
            position: "fixed",
            zIndex: 1001,
            top: "-5%",
            left: "-5%",
            padding: "5%",
          }}
          onClick={() => {
            setVisibleThirdpartyAPI(null);

            window.Pollfish?.hide();
          }}
        >
          <Iframe
            url={visibleThirdpartyAPI?.url}
            width="100%"
            height="80%"
            id=""
            className=""
            display="block"
            position="fixed"
            frameBorder={0}
            styles={{
              top: "20%",
              left: "0",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "all",
              backgroundColor: "white",
            }}
          />
        </Box>
      )}
      <>
        <Navbar />
        <Box sx={{ width: "100%" }}>
          {/* <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(180deg, #1EA9FF -125.88%, #1DAAFF 2.14%, #FFFFFF 89.41%)",
            paddingTop: "30px",
            paddingLeft: "71px",
            paddingBottom: "54px",
          }}
        >
          <h2
            style={{
              fontSize: "26.97px",
              fontWeight: "700",
              color: theme.palette.white[0],
              textAlign: "left",
              textShadow: "0px 4px 4px rgb(50, 163, 223)",
            }}
          >
            ANSWER
          </h2>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "900",
              color: theme.palette.white[0],
              textAlign: "left",
              background:
                "linear-gradient(88.83deg, #FFFFFF 7.84%, #FFFFFF 53.72%, #F5FCFF 94.99%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            SURVEYS
          </h1>
          <Box
            sx={{ display: "flex", alignItems: "center", position: "relative" }}
          >
            <p
              style={{
                paddingLeft: "28px",
                textAlign: "left",
                fontSize: "26.97px",
                fontWeight: "800",
                marginRight: "3px",
                background:
                  "linear-gradient(262.84deg, #54A0FE 7.38%, #3940BE 55.58%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "0px 4px 4px rgba(89, 168, 254, 0.22)",
              }}
            >
              AND WIN
            </p>
            <img
              style={{ width: "26.22px", height: "33.56px" }}
              src={MoneyCardIcon}
              alt="Money Card"
            ></img>
            <img
              style={{
                width: "26.22px",
                height: "33.56px",
                position: "absolute",
                transform: "rotate(-28.13deg)",
              }}
              src={MoneyCardIcon}
              alt="Money Card"
            ></img>
          </Box>
        </Box> */}
          <img src={Surveys} alt="Fore Image" />
        </Box>
        <Box sx={{ padding: "0 20px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "31px",
            }}
          >
            <Box
              sx={{
                borderRadius: "24.89px",
                pt: "22.82px",
                px: "35px",
                pb: "11.14px",
                textAlign: "center",
                background:
                  "linear-gradient(231.61deg, #73CDFF 8.44%, #26ADFF 74.37%)",
                boxShadow:
                  "0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
                position: "relative",
              }}
            >
              <img
                src={Coins}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13.48px",
                  lineHeight: "29.04px",
                  color: theme.palette.white[0],
                }}
              >
                Total Won
              </p>
              <p
                style={{
                  fontSize: "26.97px",
                  lineHeight: "29.04px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                120,00
              </p>
            </Box>
            <Box
              sx={{
                borderRadius: "24.89px",
                pt: "22.82px",
                px: "35px",
                pb: "11.14px",
                textAlign: "center",
                background:
                  "linear-gradient(231.61deg, #73CDFF 8.44%, #26ADFF 74.37%)",
                boxShadow:
                  "0px 4.1490678787231445px 4.1490678787231445px 0px rgba(74, 147, 254, 0.27)",
                position: "relative",
              }}
            >
              <img
                src={GameController}
                style={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              />
              <p
                style={{
                  fontWeight: "500",
                  fontSize: "13.48px",
                  lineHeight: "29.04px",
                  color: theme.palette.white[0],
                }}
              >
                Last 7 days
              </p>
              <p
                style={{
                  fontSize: "26.97px",
                  lineHeight: "29.04px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                $25,00
              </p>
            </Box>
          </Box>
          {SurveyData.map((item, index) => (
            <SurveyCard
              key={index}
              title={item.title}
              bgColor={item.bgColor}
              icon={item.icon}
              top={item.top}
              left={item.left}
              onClick={handleClicks[index]}
            />
          ))}
        </Box>
      </>
    </>
  );
};

export default AnswerSurvey;
