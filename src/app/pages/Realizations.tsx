import { Box } from "@mui/material";
import Galery from "../realizations_components/Galery";
import "./realizations.css";
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
        <Box className={"realizations-ttile"}>NASZE REALIZACJE</Box>
        <Box className={"realizations-subtitle"}>
          Poniżej prezentujemy nasze najnowsze prace i osiągnięcia. Każdy
          projekt to dla nas wyjątkowe wyzwanie, a nasza galeria jest
          świadectwem naszej zdolności dostosowania się do różnorodnych potrzeb
          klientów. Zachęcamy do zapoznania się i do kontaktu, jeśli jesteście
          zainteresowani współpracą lub chcielibyście uzyskać więcej informacji
          na temat naszych usług.
        </Box>
      </Box>
      <Box style={{ marginBottom: "50px" }}>
        <Galery images={galeryImages} />
      </Box>
    </Box>
  );
};

export default Realizations;
