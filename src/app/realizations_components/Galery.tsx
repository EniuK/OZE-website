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

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const gotoPrevious = () => {
    setCurrentImage(currentImage - 1);
  };

  const gotoNext = () => {
    setCurrentImage(currentImage + 1);
  };
  return (
    <Box>
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
            >
              <Box
                // style={{
                //   position: "absolute",
                //   top: "50%",
                //   left: "50%",
                //   transform: "translate(-50%, -50%)",
                //   padding: "10px",
                //   background: "rgba(0, 0, 0, 0.7)",
                //   color: "white",
                // }}
                // width="90%"
                // height="90%"
                // display={"flex"}
                // justifyContent="center"
                // alignItems={"center"}
                className={styles.gallery_description_text}
              >
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
