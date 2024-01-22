import { Box } from "@mui/material";
import ServicesIcons from "../components/ServicesIcons";
import "./services.css";
const ServicesHomePage = ({ home }: boolean) => {
  return (
    <Box className={"services-container"}>
      <Box className={"services-title"}>USŁUGI</Box>
      <Box className={"services-subtitle"}>
        Jesteśmy zespołem doświadczonych profesjonalistów, oferujących szeroki
        zakres usług, aby sprostać Waszym wszelkim potrzebom. Współpracujemy
        zarówno z klientami indywidualnymi, jak i firmami. Zaufaj nam, a nasz
        profesjonalizm i zaangażowanie przekształcą Twoje potrzeby w solidne i
        efektywne rozwiązania.
      </Box>
      <Box className={"services-icons-container"}>
        <ServicesIcons isHomePage={home} />
      </Box>
    </Box>
  );
};

export default ServicesHomePage;
