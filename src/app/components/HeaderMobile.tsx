import { useState } from "react";
import { Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import "./headermobile.css";

const HeaderMobile = ({ path }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll when menu is closed
      document.body.style.overflow = "visible";
    }
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the menu if the click is outside the menu links
    if (
      isMenuOpen &&
      e.target instanceof HTMLDivElement &&
      !e.target.closest(".menu-links")
    ) {
      setIsMenuOpen(false);
      document.body.style.overflow = "visible";
    }
  };

  return (
    <Box className={"header-mobile-container"}>
      <Box className={"logo-mobile-container"}>
        <Link href={"/"}>
          <Image
            src={"/logo_oze.png"}
            alt={"logo"}
            width={194.05}
            height={25}
          />
        </Link>
      </Box>
      <Box className={"header-mobile-menu-items"}>
        <Box onClick={handleMenuToggle}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              paddingRight: "20px",
            }}
          >
            <div
              style={{
                width: "20px",
                height: "3px",
                backgroundColor: "black",
                marginTop: "5px",
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "20px",
                height: "3px",
                backgroundColor: "black",
                marginTop: "5px",
                opacity: isMenuOpen ? 0 : 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            ></div>
            <div
              style={{
                width: "20px",
                height: "3px",
                backgroundColor: "black",
                marginTop: "5px",
                transform: isMenuOpen ? "rotate(45deg)" : "none",
                transition: "transform 0.3s ease-in-out",
              }}
            ></div>
          </div>
        </Box>
        {isMenuOpen && (
          <Box
            className="menu-links"
            style={{
              position: "absolute",
              top: "160px",
              left: "0",
              right: "0",
              backgroundColor: "white",
              zIndex: 1,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transform: "translateY(-100%)",
              opacity: isMenuOpen ? 1 : 0,
              transition:
                "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
            }}
          >
            <Box className={"logo-mobile-container"}>
              <Link href={"/"} onClick={handleMenuToggle}>
                <Image
                  src={"/logo_oze.png"}
                  alt={"logo"}
                  width={194.05}
                  height={25}
                />
              </Link>
            </Box>
            {/* Add your three links here */}
            <Link href={"/Serwis"} passHref>
              <Button component="a" color="primary" onClick={handleMenuToggle}>
                Serwis
              </Button>
            </Link>
            <Link href={"/Kontakt"} passHref>
              <Button component="a" color="primary" onClick={handleMenuToggle}>
                Kontakt
              </Button>
            </Link>
            <Link href={"/Realizacje"} passHref>
              <Button component="a" color="primary" onClick={handleMenuToggle}>
                Realizacje
              </Button>
            </Link>
          </Box>
        )}
      </Box>

      {/* Dim the rest of the page when the menu is open */}
      {isMenuOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 0,
          }}
          onClick={handleOutsideClick}
        />
      )}
    </Box>
  );
};

export default HeaderMobile;
