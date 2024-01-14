import { Box } from "@mui/material";
import Image from "next/image";
import "./header.css";
const Header = () => {
  return (
    <Box className={"header-container"}>
      <Box className={"logo-container"}>
        <Image src={"/logo_oze.png"} alt={"logo"} width={304} height={40} />
      </Box>
      <Box className={"menu-items"}>
        <Box>USŁUGI</Box>
        <Box>REALIZACJE</Box>
        <Box>KONTAKT</Box>
      </Box>
    </Box>
  );
};
export default Header;
