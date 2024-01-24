import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import "./aboutus.css";

const AboutUs = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  return (
    //
    <Box className={"aboutus-container"}>
      <Box className={"aboutus-text-container"}>
        <Box className={"aboutus-title"}>O NAS</Box>
        <Box style={{ width: "100%" }}>
          <Box className={"aboutus-subtitle1 sub"}>
            To też tekst wygenerowany przez AI. Witamy w naszej firmie, gdzie
            inżynierska pasja łączy się z solidnym doświadczeniem, tworząc
            zespół ekspertów w dziedzinie instalacji sanitarnych. Nasza firma
            specjalizuje się w kompleksowych usługach obejmujących
            projektowanie, realizację, nadzory, pomiary i serwis w zakresie
            instalacji sanitarnych, ogrzewania, klimatyzacji,
            wentylacji/rekuperacji, instalacji wodno-kanalizacyjnych, gazowych
            oraz grzewczych.
          </Box>
          <Box className={"aboutus-subtitle2 sub"}>
            Z nami możesz być pewien, że Twoje potrzeby związane z instalacjami
            sanitarnymi są w rękach doświadczonych profesjonalistów, dla których
            każdy projekt to nie tylko praca, ale również szansa na stworzenie
            efektywnych, innowacyjnych rozwiązań.
          </Box>
          <Box className={"aboutus-subtitle3 sub"}>
            Zachęcamy do zapoznania się z naszą ofertą i zapraszamy do
            współpracy.
          </Box>
        </Box>
      </Box>
      <Box className={"aboutus-img-container"}>
        <Image
          src="/owners.png"
          alt="Owners"
          width={isMobileView ? 300 : 450}
          height={isMobileView ? 233.33 : 350}
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
