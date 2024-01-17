import { Box } from "@mui/material";
import type { Metadata } from "next";
import PhotoSlider from "../homepage_components/PhotoSlider";
import AboutUs from "../homepage_components/AboutUs";
import ServicesHomePage from "../homepage_components/Services";
import Offers from "../homepage_components/Offers";
import Qualifications from "../homepage_components/Qualifications";
import "./homepage.css";
export const metadata: Metadata = {
  title: "Technika OZE",
  description: "Technika OZE to usługi specjalizujące się w ...",
};
const HomePage = () => {
  return (
    <Box className={"homepage-container"}>
      <Box className={"homepage-photo-slider"}>
        <PhotoSlider />
      </Box>
      <Box className={"homepage-about-us"}>
        <AboutUs />
      </Box>
      <Box className={"homepage-uslugi"}>
        <ServicesHomePage />
      </Box>
      <Box className={"homepage-oferta"}>
        <Offers />
      </Box>

      <Box className={"homepage-kwalifikacje"}>
        <Qualifications />
      </Box>
    </Box>
  );
};

export default HomePage;
