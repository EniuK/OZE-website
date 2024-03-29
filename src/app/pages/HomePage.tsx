import { Box, useMediaQuery } from "@mui/material";
import type { Metadata } from "next";
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
  const isMobileView = useMediaQuery("(max-width:900px)");

  const pathname = usePathname();
  const isHomepage = pathname === "/" ? true : false;
  console.log(isHomepage);
  return (
    <Box className={"homepage-container"}>
      <AboutUs />

      <ServicesHomePage home={isHomepage} />

      <Offers />

      <Qualifications />
    </Box>
  );
};

export default HomePage;
