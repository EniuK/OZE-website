import { Box, useMediaQuery } from "@mui/material";
import ServicesIcons from "../components/ServicesIcons";
import "./services.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ServicesHomePage = ({ home }: any) => {
  const isMobileView = useMediaQuery("(max-width:900px)");
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <Box className={"services-container"}>
      <Box
        className={"services-title"}
        data-aos="fade-left"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
      >
        USŁUGI
      </Box>
      <Box
        className={"services-subtitle"}
        data-aos="fade-right"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
      >
        Jesteśmy zespołem doświadczonych profesjonalistów, oferujących szeroki
        zakres usług, aby sprostać Waszym wszelkim potrzebom. Współpracujemy
        zarówno z klientami indywidualnymi, jak i firmami. Zaufaj nam, a nasz
        profesjonalizm i zaangażowanie przekształcą Twoje potrzeby w solidne i
        efektywne rozwiązania.
      </Box>
      {isMobileView && (
        <Box style={{ width: "100%", padding: "0 10px", textAlign: "center" }}>
          Aby poznać szczegóły, kliknij w konkretną usługę:
        </Box>
      )}

      <Box className={"services-icons-container"}>
        <ServicesIcons isHomePage={home} />
      </Box>
    </Box>
  );
};

export default ServicesHomePage;
