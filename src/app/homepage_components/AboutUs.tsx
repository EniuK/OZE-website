import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import "./aboutus.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const AboutUs = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Box className={"aboutus-container"}>
      <Image
        src={"/gradients/gradient1home.png"}
        width={isMobileView ? 360 : 773}
        height={isMobileView ? 360 : 695}
        alt={"gradient"}
        style={{ position: "absolute", zIndex: "-1" }}
      />
      <Box
        className={"aboutus-text-container"}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        // data-aos-delay="500"
      >
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
      <Box
        className={"aboutus-img-container"}
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-anchor-placement="top-center"
        // data-aos-delay="500"
      >
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
