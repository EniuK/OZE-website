import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import "./footer.css";
import FooterLinks from "./FooterLinks";
interface Logo {
  path: string;
  width: number;
  height: number;
  alt: string;
  href: string;
}
interface SocialLinks {
  path: string;
  icon: string;
  name: string;
  width: number;
  height: number;
}
const logos: Logo[] = [
  {
    path: "/Thesslagreen_logo.png",
    width: 300,
    height: 30,
    alt: "Thesslagreen_logo",
    href: "https://thesslagreen.com/",
  },
  {
    path: "/Panasonic_logo.png",
    width: 194,
    height: 30,
    alt: "Panasonic_logo",
    href: "https://www.panasonic.com/pl/",
  },
  {
    path: "/Bezprzewodu_logo.png",
    width: 262,
    height: 37.5,
    alt: "Bezprzewodu_logo",
    href: "https://bezprzewodu.pl/",
  },
  {
    path: "/Daikin_logo.png",
    width: 181,
    height: 37,
    alt: "Daikin_logo",
    href: "https://www.daikin.pl/pl_pl/klienci.html",
  },
];

const socialLinks: SocialLinks[] = [
  {
    path: "/",
    icon: "/facebook.png",
    name: "Facebook",
    width: 30,
    height: 30,
  },
  {
    path: "/",
    icon: "/instagram.png",
    name: "Instagram",
    width: 30,
    height: 30,
  },
  {
    path: "/",
    icon: "/youtube.png",
    name: "YouTube",
    width: 30,
    height: 30,
  },
];
const Footer = ({ path }: any) => {
  return (
    <Box className={"footer-container"}>
      <Box className={"footer-teamwork"}>
        <Box className={"footer-title"}>Współpraca</Box>
        <Box className={"footer-logos-container"}>
          {logos.map((e: Logo) => {
            return (
              <Box key={e.alt} className={"footer-logos-item"}>
                <Link href={e.href} target={"_blank"}>
                  <Image
                    src={e.path}
                    width={e.width}
                    height={e.height}
                    alt={e.alt}
                  />
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box className={"footer-menu"}>
        <FooterLinks pathLinks={path} />
        <Box className={"footer-underlinks"}>
          <Box style={{ width: "50%" }}>Polityka prywatności RODO</Box>
          <Box className={"footer-social-links"} style={{ width: "50%" }}>
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "center",
              }}
            >
              {socialLinks.map((e: SocialLinks) => {
                return (
                  <Box
                    key={e.name}
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Box>
                      <Image
                        src={e.icon}
                        width={e.width}
                        height={e.height}
                        alt={e.name}
                      ></Image>
                    </Box>
                    <Box style={{ marginLeft: "15px" }}>{e.name}</Box>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Footer;
