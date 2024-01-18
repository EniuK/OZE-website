import { Box } from "@mui/material";
import Image from "next/image";

type qualification = {
  name: string;
};
const qualificaions: qualification[] = [
  {
    name: "FGAZ Personalne",
  },
  {
    name: "FGAZ Personalne",
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
    name: "Budowlane do projektowania w specjalności instalacyjnej w zakresie sieci, instalacji i urządzeń cieplnych, wentylacyjnych, gazowych, wodociągowych i kanalizacyjnych",
  },
];
const Qualifications = () => {
  return (
    <Box>
      <Box>KWALIFIKACJE</Box>
      <Box>
        Dysponujemy licznymi kwalifikacjami, które są gwarancją wysokiej jakości
        świadczonych usług. Jesteśmy w stanie dostosować się do różnorodnych
        potrzeb klientów, zapewniając kompleksową obsługę, która obejmuje
        aspekty techniczne, projektowe i eksploatacyjne. Lista naszych
        uprawnień:
      </Box>
      <Box>
        <Box>
          {qualificaions.map((e: qualification) => {
            return (
              <Box key={e.name}>
                <Box>
                  {/* icon */}
                  <Box>
                    <Image
                      src={"/shiled.svg"}
                      width={40}
                      height={40}
                      alt={"shiled"}
                    ></Image>
                  </Box>
                  {/* divider */}
                  <Box />
                  {/* text */}
                  <Box>{e.name}</Box>
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
