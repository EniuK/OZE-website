import { Box } from "@mui/material";
import Image from "next/image";
import "./offers.css";
type Image = {
  url: string;
  name: string;
};

const images: Image[] = [
  {
    url: "/pompyciepla.png",
    name: "POMPY CIEPŁA",
  },
  {
    url: "/kotlygazowe.png",
    name: "KOTŁY GAZOWE",
  },
  {
    url: "/instalacjegazowe.png",
    name: "INSTALACJE GAZOWE",
  },
  {
    url: "/rekuperacja.png",
    name: "REKUPERACJA I WENTYLACJA",
  },
  {
    url: "/instalacjewodne.png",
    name: "INSTALACJE WODNO-KANALIZACYJNE",
  },
  {
    url: "/klimatyzacja.png",
    name: "KLIMATYZACJA",
  },
  {
    url: "/projektowanie.png",
    name: "PROJEKTOWANIE",
  },
  {
    url: "/serwis.png",
    name: "SERWIS I PRZEGLĄDY",
  },
  {
    url: "/instalacjegrzewcze.png",
    name: "INSTALACJE GRZEWCZE",
  },
];

const Offers = () => {
  return (
    <Box className={"offers-container"}>
      <Box className={"offers-title"}>Oferta</Box>
      <Box className={"offers-map-container"}>
        {images.map((e: Image) => {
          return (
            <Box key={e.name} style={{ padding: "30px" }}>
              <Box>
                <Image src={e.url} width={301} height={301} alt={e.name} />
              </Box>
              <Box style={{ width: "100%", textAlign: "center" }}>{e.name}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Offers;
