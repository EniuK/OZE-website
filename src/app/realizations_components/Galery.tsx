import { Box } from "@mui/material";
import React from "react";
import Gallery from "react-image-gallery";
import Image from "next/image";

import "react-image-gallery/styles/css/image-gallery.css";
const Galery = ({ images }: any) => {
  return (
    <Gallery
      items={images}
      showThumbnails={true}
      showFullscreenButton={false}
      showPlayButton={false}
      renderItem={(item: any) => (
        <div>
          <Image
            src={item.original}
            alt={item.description}
            width={305}
            height={310}
          />
          <div className="image-gallery-description">{item.description}</div>
        </div>
      )}
    />
  );
};

export default Galery;
