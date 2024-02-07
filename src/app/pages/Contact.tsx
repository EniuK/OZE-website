import { Box, useMediaQuery } from "@mui/material";
import ContactIntroduction from "../contact_components/ContactIntroduction";
import ContactForm from "../contact_components/ContactForm";
import ContactMap from "../contact_components/ContactMap";
import "./contact.css";
import Image from "next/image";

const Contact = () => {
  const isMobileView = useMediaQuery("(max-width:900px)");

  return (
    <Box className={"contact-container"}>
      <Box className={"contact-introduction"}>
        <ContactIntroduction />
      </Box>
      <Box className={"contact-form-map"}>
        <Box>
          <ContactForm />
        </Box>
        <Image
          src={"/gradients/gradient2contact.png"}
          width={isMobileView ? 360 : 500}
          height={isMobileView ? 360 : 500}
          alt={"gradient2"}
          style={{ position: "absolute", zIndex: "-1" }}
        />
        <Box>
          <ContactMap />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
