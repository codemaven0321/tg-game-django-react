import React from "react";
import { Box, useTheme, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import MoneyCard from "../components/MoneyCard";
import NFTCard from "../components/NFTCard";

import { NFTData } from "../Constant";

import MoneyCardIcon from "../assets/images/money_card_icon.svg";

const TGExplain = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Navbar />
      <Box></Box>
    </React.Fragment>
  );
};

export default TGExplain;
