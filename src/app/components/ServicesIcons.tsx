import { Box } from "@mui/material";
import Image from "next/image";

const icons = [
  {
    imgsrc: "/book.svg",
    text: "PROJEKTOWANIE",
    width: 81.25,
    height: 73.48,
    url: "",
  },
  {
    imgsrc: "/gear.svg",
    text: "REALIZACJA",
    width: 81.25,
    height: 73.48,
    url: "",
  },
  {
    imgsrc: "/eye.svg",
    text: "NADZÓR",
    width: 81.25,
    height: 73.48,
    url: "",
  },
  {
    imgsrc: "/tools.svg",
    text: "SERWIS",
    width: 81.25,
    height: 73.48,
    url: "",
  },
  {
    imgsrc: "battery.svg",
    text: "POMIARY",
    width: 81.25,
    height: 73.48,
    url: "",
  },
];
const ServicesIcons = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          width: "80%",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {icons.map((e) => {
          return (
            <Box key={e.text} style={{ width: "152px", height: "131px" }}>
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image src={e.imgsrc} alt={e.text} width={100} height={100} />
              </Box>
              <Box style={{ width: "100%", textAlign: "center" }}>{e.text}</Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServicesIcons;
