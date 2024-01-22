import { Box } from "@mui/material";
import type { Metadata } from "next";
import PhotoSlider from "../homepage_components/PhotoSlider";
import AboutUs from "../homepage_components/AboutUs";
import ServicesHomePage from "../homepage_components/Services";
import Offers from "../homepage_components/Offers";
import Qualifications from "../homepage_components/Qualifications";
import "./homepage.css";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: "Technika OZE",
  description: "Technika OZE to usługi specjalizujące się w ...",
};

const HomePage = () => {
  const pathname = usePathname();
  const isHomepage = pathname === "/" ? true : false;
  return (
    <Box className={"homepage-container"}>
      <PhotoSlider />

      <AboutUs />

      <ServicesHomePage home={isHomepage} />

      <Offers />

      <Box className={"homepage-kwalifikacje"}>
        <Qualifications />
      </Box>
    </Box>
  );
};

export default HomePage;
