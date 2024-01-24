"use client";
import React from "react";
import { useRenderContent } from "./layoutContent";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeMeta from "./MetaData";
import { usePathname } from "next/navigation";
import { Box, useMediaQuery } from "@mui/material";
import HeaderMobile from "./components/HeaderMobile";
import PhotoSlider from "./homepage_components/PhotoSlider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const renderContent = useRenderContent();
  const pathname = usePathname();

  const isMobileView = useMediaQuery("(max-width:900px)");

  return (
    <html lang="en">
      <head>
        <title>{"Technika OZE"}</title>
      </head>
      <ThemeRegistry>
        <body
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            width: "100vw",
            overflowX: "clip",
          }}
        >
          {isMobileView ? (
            <HeaderMobile path={pathname} />
          ) : (
            <Header path={pathname} />
          )}
          <Box
            style={{
              width: "100vw",
            }}
          >
            <PhotoSlider />
            <Box
              style={{
                display: "flex",
                maxWidth: "1440px",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                margin: "auto",
              }}
            >
              {/* <HomeMeta></HomeMeta> */}
              {renderContent || children}
            </Box>
          </Box>
          <Footer path={pathname} />
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
