import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

const FooterLinks = ({ pathLinks }: any) => {
  return (
    <>
      <Box className={"logo-container"}>
        <Link href={"/"}>
          <Image src={"/logo_oze.png"} alt={"logo"} width={304} height={40} />
        </Link>
      </Box>
      <Box className={"header-menu-items"}>
        <Box className={"menu-item"}>
          <Link
            href={"/Serwis"}
            style={{ textDecoration: "none", color: "black" }}
          >
            USŁUGI
          </Link>
          {pathLinks === "/Serwis" ? (
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
            href={"/Realizacje"}
            style={{ textDecoration: "none", color: "black" }}
          >
            REALIZACJE
          </Link>
          {pathLinks === "/Realizacje" ? (
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
          {pathLinks === "/Kontakt" ? (
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
      </Box>
    </>
  );
};
export default FooterLinks;
