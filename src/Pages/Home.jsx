import React from "react";
import { Box } from "@mui/material";
import MainBanner from "../components/MainBanner";
import LenisComponent from "../components/LenisComponent";
import TopPicsOfTheMonth from "../components/TopPicsOfTheMonth";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Box>
      <MainBanner />
      <LenisComponent />
      <TopPicsOfTheMonth />
      <Footer />
    </Box>
  );
};

export default Home;
