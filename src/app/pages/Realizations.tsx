import { Box } from "@mui/material";
import Galery from "../realizations_components/Galery";

const galeryImages = [
  {
    original: "/galery/galery1.png",
    thumbnail: "/galery/galery1.png",
    description: "Opis zdjęcia 1",
  },
  {
    original: "/galery/galery1.png",
    thumbnail: "/galery/galery1.png",
    description: "Opis zdjęcia 2",
  },
  // Dodaj kolejne obiekty dla kolejnych zdjęć
];
const Realizations = () => {
  return (
    <Box className={"realizations-container"}>
      <Box className={"realizations-text-container"}>
        <Box className={"realizations-ttile"}>Nasze Realizacje</Box>
        <Box className={"realizations-subtitle"}></Box>
      </Box>
      <Box>
        <Galery images={galeryImages} />
      </Box>
    </Box>
  );
};

export default Realizations;
