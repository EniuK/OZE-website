import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import "./header.css";
const Header = () => {
  return (
    <Box className={"header-container"}>
      <Box className={"logo-container"}>
        <Link href={"/"}>
          <Image src={"/logo_oze.png"} alt={"logo"} width={304} height={40} />
        </Link>
      </Box>
      <Box className={"header-menu-items"}>
        <Link
          href={"/Serwis"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box className={"menu-item"}>USŁUGI</Box>
        </Link>
        <Link
          href={"/Realizacje"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box className={"menu-item"}>REALIZACJE</Box>
        </Link>

        <Link
          href={"/Kontakt"}
          style={{ textDecoration: "none", color: "black" }}
        >
          <Box className={"menu-item"}>KONTAKT</Box>
        </Link>
      </Box>
    </Box>
  );
};
export default Header;
