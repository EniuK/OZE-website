import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import "./serviceicons.css";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init();

    return () => {
      AOS.refresh();
    };
  }, []);
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
          width: "100%",
          // backgroundColor: "red",
          paddingLeft: isMobileView ? "350px" : "",
        }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-anchor-placement="center-bottom"
        data-aos-delay="500"
      >
        {icons.map((e) => {
          return (
            <Box
              key={e.text + 1}
              style={{
                marginTop: "20px",
                width: isMobileView ? "120px" : "152px",
                minWidth: isMobileView ? "120px" : "",
                height: "131px",
                marginRight: isMobileView ? "20px" : "",
              }}
              className={"service-icon-container"}
            >
              <Link
                href={isHomePage ? "/Serwis" : `/Serwis#${e.url}`}
                onClick={isHomePage ? () => console.log("") : handleScroll}
                style={{ textDecoration: "none", color: "black" }}
                className={"service-icons-link-styled"}
              >
                <Box
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Image
                    className={"service-icon"}
                    src={e.imgsrc}
                    alt={e.text}
                    width={isMobileView ? 70 : 100}
                    height={isMobileView ? 70 : 100}
                  />
                </Box>
                <Box
                  style={{ width: "100%", textAlign: "center" }}
                  // className={"service-icons-text"}
                >
                  {e.text}
                </Box>
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ServicesIcons;
