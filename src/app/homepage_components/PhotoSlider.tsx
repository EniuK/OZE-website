import { Box, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import "./photoslider.css";
const PhotoSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["./slide1.png", "./slide2.png", "./slide3.png"];
  const transitionTime = 1000;
  const isMobileView = useMediaQuery("(max-width:900px)");
  const isTabletWiev = useMediaQuery("(min-width:900px)");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box className={"homepage-slider-container"}>
      <Box
        style={{
          width: "100%",
          height: isMobileView ? "133.33px" : "600px",
          position: "absolute",
        }}
      >
        {images.map((image, index) => (
          <Box
            key={index}
            style={{
              position: "absolute",
              height: isMobileView ? "133.33px" : "600px",
              minWidth: "100vw",

              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              opacity: currentImage === index ? 1 : 0,
              transition: `opacity ${transitionTime / 1000}s ease-in-out`,
              zIndex: 1,
            }}
          />
        ))}
      </Box>
      {isTabletWiev && (
        <Box
          style={{
            zIndex: "3",
            position: "absolute",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box
            style={{
              width: "60%",
              height: "600px",
            }}
          />

          <Box
            style={{
              width: "40%",
              height: "600px",
              zIndex: "2",
              paddingRight: "10%",

              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Firma TechnikaOZE Piotr Pogorzelski oferuje usługi dla osób
            indywidualnych, firm i instytucji w zakresie projektowania,
            realizacji, nadzorów, pomiarów i serwisu w zakresie instalacji
            sanitarnych: ogrzewania, klimatyzacji, wentylacji / rekuperacji,
            instalacji wodno-kanalizacyjnych, gazowych, grzewczych.
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default PhotoSlider;
