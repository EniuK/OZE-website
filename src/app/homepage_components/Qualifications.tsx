import { Box } from "@mui/material";
import Image from "next/image";
import "./qualifications.css";
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
  return (
    <Box className={"qualif-container"}>
      <Box className={"qualif-title"}>KWALIFIKACJE</Box>
      <Box className={"qualif-subtitle"}>
        Dysponujemy licznymi kwalifikacjami, które są gwarancją wysokiej jakości
        świadczonych usług. Jesteśmy w stanie dostosować się do <br />{" "}
        różnorodnych potrzeb klientów, zapewniając kompleksową obsługę, która
        obejmuje aspekty techniczne, projektowe i eksploatacyjne. <br /> Lista
        naszych uprawnień:
      </Box>
      <Box>
        <Box className={"qualif-map-container"}>
          {qualificaions.map((e: qualification) => {
            return (
              <Box key={e.name} className={"qualif-item-container"}>
                <Box className={"qualif-shadow-box-container"}>
                  <Box className={"qualif-shadow-box"}>
                    {/* icon */}
                    <Box>
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
                    <Box>{e.name}</Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Qualifications;
