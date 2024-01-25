import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const icons = [
  {
    imgsrc: "/book.svg",
    text: "PROJEKTOWANIE",
    width: 81.25,
    height: 73.48,
    url: "projektowanie",
  },
  {
    imgsrc: "/gear.svg",
    text: "REALIZACJA",
    width: 81.25,
    height: 73.48,
    url: "realizacja",
  },
  {
    imgsrc: "/eye.svg",
    text: "NADZÓR",
    width: 81.25,
    height: 73.48,
    url: "nadzor",
  },
  {
    imgsrc: "/tools.svg",
    text: "SERWIS",
    width: 81.25,
    height: 73.48,
    url: "serwis",
  },
  {
    imgsrc: "battery.svg",
    text: "POMIARY",
    width: 81.25,
    height: 73.48,
    url: "pomiary",
  },
];
const ServicesIcons = ({ isHomePage }: any) => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)

    const href = e.currentTarget.href;

    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        // width: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        style={{
          display: "flex",
          flexDirection: "row",

          justifyContent: "space-evenly",
          alignItems: "center",
          overflow: "scroll",
          paddingLeft: isMobileView ? "150px" : "",
        }}
      >
        {icons.map((e) => {
          return (
            <Box
              key={e.text + 1}
              style={{
                width: isMobileView ? "120px" : "152px",
                height: "131px",
                marginRight: isMobileView ? "20px" : "",
              }}
            >
              <Box
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Link
                  href={isHomePage ? "/Serwis" : `/Serwis#${e.url}`}
                  onClick={isHomePage ? () => console.log("") : handleScroll}
                >
                  <Image
                    src={e.imgsrc}
                    alt={e.text}
                    width={isMobileView ? 70 : 100}
                    height={isMobileView ? 70 : 100}
                  />
                </Link>
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
