import { Box } from "@mui/material";
import Galery from "../realizations_components/Galery";

const galeryImages = [
  {
    src: "/galery/galery1.png",
    description: "Klimatyzacja",
  },
  {
    src: "/galery/galery2.png",

    description: "Przewody",
  },
  {
    src: "/galery/galery3.png",
    description: "Ciąg klimatyzacji",
  },
  {
    src: "/galery/galery4.png",
    description: "Przewody pod ziemią",
  },
  {
    src: "/galery/galery5.png",
    description: "Monta klimatyzacji",
  },
  {
    src: "/galery/galery6.png",
    description: "Klimatyzacja",
  },
  {
    src: "/galery/galery7.png",
    description: "Klimatyzacja",
  },
  {
    src: "/galery/galery8.png",
    description: "Monta klimatyzacji",
  },
  {
    src: "/galery/galery9.png",
    description: "Ciągi klimatyzacyjne",
  },
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
