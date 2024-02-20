import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import "./qualifications.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type qualification = {
  name: string;
};
const qualificaions: qualification[] = [
  {
    name: "FGAZ Personalne",
  },
  {
    name: "FGAZ Personalne1",
  },
  {
    name: "SEP GR I E",
  },
  {
    name: "SEP GR I D",
  },
  {
    name: "SEP GR II E",
  },
  {
    name: "SEP GR II D",
  },
  {
    name: "SEP GR III E",
  },
  {
    name: "SEP GR III D",
  },
  {
    name: "UDT - kolektory słoneczne",
  },
  {
    name: " UDT - pompy ciepła",
  },
  {
    name: "Kontroli systemu ogrzewania lub systemu klimatyzacji (https://rejestrcheb.mrit.gov.pl/rejestr-uprawnionych )",
  },
  {
    name: "Sporządzania świadectw charakterystyki energetycznej (https://rejestrcheb.mrit.gov.pl/rejestr-uprawnionych)",
  },
  {
    name: "Budowlane do projektowania w specjalności instalacyjnej w zakresie sieci, instalacji i urządzeń cieplnych, wentylacyjnych, gazowych, wodociągowych i kanalizacyjnych",
  },
  {
    name: "Budowlane do projektowania w specjalności instalacyjnej w zakresie sieci, instalacji i urządzeń cieplnych, wentylacyjnych, gazowych, wodociągowych i kanalizacyjnych11",
  },
];
const Qualifications = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  return (
    <Box className={"qualif-container"}>
      <Image
        src={"/gradients/gradient2home.png"}
        width={isMobileView ? 360 : 900}
        height={isMobileView ? 360 : 1000}
        alt={"gradient2"}
        style={{ position: "absolute", zIndex: "-1" }}
      />

      <Box className={"qualif-title"}>KWALIFIKACJE</Box>
      <Box className={"qualif-subtitle"}>
        Dysponujemy licznymi kwalifikacjami, które są gwarancją wysokiej jakości
        świadczonych usług. Jesteśmy w stanie dostosować się do <br />{" "}
        różnorodnych potrzeb klientów, zapewniając kompleksową obsługę, która
        obejmuje aspekty techniczne, projektowe i eksploatacyjne. <br /> Lista
        naszych uprawnień:
      </Box>
      <Box>
        <Box>
          <Swiper
            slidesPerView={3.3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {qualificaions.map((e: qualification) => {
              return (
                <SwiperSlide
                  key={e.name}
                  style={{ height: "300px", marginRight: "50px" }}
                >
                  <Box className={"qualif-shadow-box-container"}>
                    <Box className={"qualif-shadow-box"}>
                      {/* icon */}
                      <Box className={"qualif-image-container "}>
                        <Image
                          src={"/shiled.svg"}
                          width={40}
                          height={40}
                          alt={"shiled"}
                        />
                      </Box>
                      {/* divider */}
                      <Box className={"qualif-divider"} />
                      {/* text */}
                      <Box className={"qualif-text"}>{e.name}</Box>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Qualifications;
