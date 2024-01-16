"use client";
import React from "react";
import { useRenderContent } from "./layoutContent";
import "./globals.css";
import ThemeRegistry from "./components/ThemeRegistry";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeMeta from "./MetaData";
import { usePathname } from "next/navigation";
import { Box } from "@mui/material";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const renderContent = useRenderContent();
  const pathname = usePathname();

  return (
    <html lang="en">
      <head>
        <title>{"Technika OZE"}</title>
      </head>
      <ThemeRegistry>
        <body>
          <Box style={{ maxWidth: "1440px" }}>
            <Header path={pathname} />
            <HomeMeta>{renderContent || children}</HomeMeta>
            <Footer path={pathname} />
          </Box>
        </body>
      </ThemeRegistry>
    </html>
  );
};

export default RootLayout;
