import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Image from "next/image";

import styles from "./GalleryPage.module.css";
import { FormatAlignJustify } from "@mui/icons-material";
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
            left: "0",
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
                width: isMobileView ? "90%" : "50%",
                marginBottom: isMobileView ? "50px" : "50px",
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
              }}
            >
              <Image
                src={"/galery/exitLight.svg"}
                width={50}
                height={50}
                alt={"exit"}
                onClick={() => exitImage()}
                style={{ cursor: "pointer" }}
              />
            </Box>
          </Box>
          <Box
            style={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: isMobileView ? "30%" : "",
            }}
          >
            <Box
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/galery/arrowLeftLight.svg"}
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
                width={isMobileView ? 250 : 500}
                height={isMobileView ? 250 : 500}
                alt={"shown_img"}
              />
            </Box>
            <Box
              style={{
                width: "33%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/galery/arrowRightLight.svg"}
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

      <Box className={styles.gallery_container}>
        {images.map((e: Gallery, idx: number) => {
          return (
            <Box
              key={e.description + idx}
              position="relative"
              textAlign="center"
              margin={isMobileView ? "5px" : "30px"}
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
