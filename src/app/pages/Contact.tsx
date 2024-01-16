import { Box } from "@mui/material";
import ContactIntroduction from "../contact_components/ContactIntroduction";
import ContactForm from "../contact_components/ContactForm";
import ContactMap from "../contact_components/ContactMap";
const Contact = () => {
  return (
    <Box className={"contact-container"}>
      <Box className={"contact-introduction"}>
        <ContactIntroduction />
      </Box>
      <Box className={"contact-form-map"}>
        <Box>
          <ContactForm />
        </Box>
        <Box>
          <ContactMap />
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
