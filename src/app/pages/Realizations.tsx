import { Box } from "@mui/material";
import Galery from "../realizations_components/Galery";
const Realizations = () => {
  return (
    <Box className={"realizations-container"}>
      <Box className={"realizations-text-container"}>
        <Box className={"realizations-ttile"}>Nasze Realizacje</Box>
        <Box className={"realizations-subtitle"}></Box>
      </Box>
      <Box>
        <Galery />
      </Box>
    </Box>
  );
};

export default Realizations;
