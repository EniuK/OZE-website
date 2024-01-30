import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

import styles from "./GalleryPage.module.css";
type Gallery = {
  src: string;
  description: string;
};

const Galery = ({ images }: any) => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  const [highlightImg, setHighlightImg] = useState(0);
  const [showImage, setShowImage] = useState(false);

  const setChosenImage = (idx: number) => {
    setHighlightImg(idx);
    setShowImage(true);
  };
  const exitImage = () => {
    setShowImage(false);
  };
  const setNextImage = (imageIndex: number) => {
    if (images[highlightImg + imageIndex] === undefined) {
      switch (imageIndex) {
        case -1:
          setHighlightImg(images.length - 1);
          console.log(images.length - 1);
          break;

        case 1:
          setHighlightImg(0);

          break;
        default:
          setHighlightImg(highlightImg + imageIndex);
      }
    }
    if (images[highlightImg + imageIndex]) {
      setHighlightImg(highlightImg + imageIndex);
    }
  };
  return (
    <Box>
      {showImage && (
        <Box
          style={{
            position: "fixed",
            top: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "10",
            flexDirection: "column",
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
            <Box
              style={{
                width: "50%",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Image
                src={"/galery/exit.svg"}
                width={50}
                height={50}
                alt={"exit"}
                onClick={() => exitImage()}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box style={{ display: "flex", flexDirection: "row", width: "50%" }}>
            <Box style={{ marginRight: "10%", marginTop: "25%" }}>
              <Image
                src={"/galery/arrowLeft.svg"}
                width={50}
                height={50}
                alt={"left"}
                onClick={() => setNextImage(-1)}
                style={{ cursor: "pointer" }}
              />
            </Box>
            <Box>
              <Image
                src={images[highlightImg].src}
                width={isMobileView ? 140 : 305}
                height={isMobileView ? 145 : 310}
                alt={"shown_img"}
              />
            </Box>
            <Box style={{ marginLeft: "10%", marginTop: "25%" }}>
              <Image
                src={"/galery/arrowRight.svg"}
                width={50}
                height={50}
                alt={"right"}
                onClick={() => setNextImage(1)}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
        </Box>
      )}
      <Box>
        <Box>NASZE REALIZACJE</Box>
        <Box>
          Poniżej prezentujemy nasze najnowsze prace i osiągnięcia. Każdy
          projekt to dla nas wyjątkowe wyzwanie, a nasza galeria jest
          świadectwem naszej zdolności dostosowania się do różnorodnych potrzeb
          klientów. Zachęcamy do zapoznania się i do kontaktu, jeśli jesteście
          zainteresowani współpracą lub chcielibyście uzyskać więcej informacji
          na temat naszych usług.
        </Box>
      </Box>
      <Box className={styles.gallery_container}>
        {images.map((e: Gallery, idx: number) => {
          return (
            <Box
              key={e.description + idx}
              position="relative"
              textAlign="center"
              maxWidth={isMobileView ? "140px" : "305px"}
              height={isMobileView ? "145px" : "310px"}
              onClick={() => setChosenImage(idx)}
            >
              <Box className={styles.gallery_description_text}>
                <Typography variant="body1">{e.description}</Typography>
              </Box>
              <Image
                src={e.src}
                width={isMobileView ? 140 : 305}
                height={isMobileView ? 145 : 310}
                alt={e.description}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Galery;
