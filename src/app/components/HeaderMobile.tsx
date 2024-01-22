import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import "./headermobile.css";

const HeaderMobile = ({ path }: any) => {
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
        <Box>
          {/* <Box className={"menu-mobile-item"}>
          <Link
            href={"/Serwis"}
            style={{ textDecoration: "none", color: "black" }}
          >
            USŁUGI
          </Link>
          {path === "/Serwis" ? (
            <Box
              style={{
                backgroundColor: "#34A803",
                width: "5px",
                height: "5px",
                marginTop: "10px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Box
              style={{
                width: "5px",
                height: "5px",
                marginTop: "10px",
              }}
            />
          )}
        </Box> */}
          {/* <Box className={"menu-mobile-item"}>
          <Link
            href={"/Realizacje"}
            style={{ textDecoration: "none", color: "black" }}
          >
            REALIZACJE
          </Link>
          {path === "/Realizacje" ? (
            <Box
              style={{
                backgroundColor: "#34A803",
                width: "5px",
                height: "5px",
                marginTop: "10px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Box
              style={{
                width: "5px",
                height: "5px",
                marginTop: "10px",
              }}
            />
          )}
        </Box>
        <Box className={"menu-item"}>
          <Link
            href={"/Kontakt"}
            style={{ textDecoration: "none", color: "black" }}
          >
            KONTAKT
          </Link>
          {path === "/Kontakt" ? (
            <Box
              style={{
                backgroundColor: "#34A803",
                width: "5px",
                height: "5px",
                marginTop: "10px",
                borderRadius: "50%",
              }}
            />
          ) : (
            <Box
              style={{
                width: "5px",
                height: "5px",
                marginTop: "10px",
              }}
            />
          )}
        </Box> */}
        </Box>
      </Box>
    </Box>
  );
};
export default HeaderMobile;
