import React, { useMemo, useEffect, Fragment, useState } from "react";
import { createTheme } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./scenes/home";
import AnswerSurvey from "./scenes/AnswerSurvey";
import ShopEarn from "./scenes/ShopEarn";
import Tournaments from "./scenes/Tournaments";
import TournamentsDetail from "./scenes/TournamentsDetail";
import NFTExplain from "./scenes/NFTExplain";
import TGExplain from "./scenes/TGExplain";
import MyProfile from "./scenes/MyProfile";
import EditProfile from "./scenes/EditProfile";
import Levels from "./scenes/Levels";
import Deposit from "./scenes/Deposit";
import GenerateReferLink from "./scenes/GenerateReferLink";
import DailySpinLink from "./scenes/DailySpinLink";
import { getAuthToken, checkRefreshToken } from "./middleware/authMiddleware";

import themeSettings from "./theme";
import { useDispatch, useSelector } from "react-redux";
import { parseQueryString } from "./utils";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthrized } = useSelector(({ auth }) => auth);
  const [botInformation, setbotInformation] = useState(null);

  const theme = useMemo(() => createTheme(themeSettings));
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    if (botInformation && !isAuthrized)
      dispatch(getAuthToken(parseQueryString(location.search)?.start));
  }, [dispatch, isAuthrized, botInformation]);

  // useEffect(() => {
  //   const handleStorageChange = (event) => {
  //     // Handle the storage change event here
  //     console.log(
  //       "localStorage has changed:",
  //       localStorage.getItem("botInformation")
  //     );
  //     setbotInformation(localStorage.getItem("botInformation") || null);
  //     console.log(event.key);
  //   };

  //   // Add event listener for storage change
  //   window.addEventListener("storage", handleStorageChange);

  //   // Cleanup function to remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("storage", handleStorageChange);
  //   };
  // }, [setbotInformation]); // Empty dependency array ensures the effect runs only once when the component mounts

  // useEffect(() => {
  //   console.log("https://telegram.org/js/telegram-widget");
  //   // Load Telegram widget script after React has initialized
  //   const script = document.createElement("script");
  //   script.async = true;
  //   script.src = "https://telegram.org/js/telegram-widget.js?22";
  //   // script.setAttribute("data-telegram-share-url", "https://5d77-23-237-102-130.ngrok-free.app/?game=0");
  //   // script.setAttribute("data-comment", "Share with Friends");
  //   script.setAttribute("data-telegram-login", "CMsFirstBot");
  //   script.setAttribute("data-size", "medium");
  //   script.setAttribute("data-onauth", "onTelegramAuth(user)");
  //   script.setAttribute("data-request-access", "write");

  //   // Append the script to the document's head
  //   document.body.appendChild(script);

  //   // Cleanup function to remove the script on component unmount
  //   return () => {
  //     document.body.removeChild(script);
  //   };
  // }, []);

  return (
    <>
      {isAuthrized ? (
        <TonConnectUIProvider
          manifestUrl={`${process.env.REACT_APP_PUBLIC_URL}/tonconnect-manifest.json`}
          restoreConnection={true}
        >
          <ThemeProvider theme={theme}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/answer_survey" element={<AnswerSurvey />} />
              <Route exact path="/tournaments" element={<Tournaments />} />
              <Route
                exact
                path="/tournaments_detail"
                element={<TournamentsDetail />}
              />
              <Route exact path="/nft_explain" element={<NFTExplain />} />
              <Route exact path="/telegram_explain" element={<TGExplain />} />
              <Route exact path="/my_profile" element={<MyProfile />} />
              <Route exact path="/edit_profile" element={<EditProfile />} />
              <Route exact path="/levels" element={<Levels />} />
              <Route exact path="/deposit" element={<Deposit />} />
              <Route
                exact
                path="/generate_refer_link"
                element={<GenerateReferLink />}
              />

              <Route exact path="/daily_spin" element={<DailySpinLink />} />

              <Route
                exact
                path="/shop_earn_deals"
                element={<ShopEarn type="deals" />}
              />
              <Route
                exact
                path="/shop_earn_gift"
                element={<ShopEarn type="gift" />}
              />
            </Routes>
          </ThemeProvider>
        </TonConnectUIProvider>
      ) : (
        <div>
          <TelegramLoginButton
            botName="CMsFirstBot"
            dataOnauth={(user) => {
              localStorage.setItem(
                "botInformation",
                JSON.stringify(
                  Object.assign({}, user, { timestamp: Date.now() })
                )
              );
              setbotInformation(user);
            }}
            style={{ margin: '100px' }}
          />
        </div>
      )}
    </>
  );
};

export default App;
