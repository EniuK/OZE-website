import { Box, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const [messageSend, setMessageSend] = useState(false);
  const sendEmail = (val: any) => {
    console.log(val);
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Pole wymagane"),
      email: Yup.string()
        .email("Niepoprawny format e-mail")
        .required("Pole wymagane"),
      phoneNumber: Yup.string().required("Pole wymagane"),
      message: Yup.string().required("Pole wymagane"),
    }),
    onSubmit: (values) => {
      sendEmail(values);
      setMessageSend(true);
      console.log(messageSend);
    },
  });
  return (
    <Box>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          label="Imię i nazwisko"
          fullWidth
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          margin="normal"
        />
        <TextField
          label="Email"
          fullWidth
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
        />
        <TextField
          label="Numer telefonu"
          fullWidth
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
          margin="normal"
        />
        <TextField
          label="Twoja wiadomość"
          fullWidth
          multiline
          rows={4}
          name="message"
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Wyślij maila
        </Button>
      </form>
      <Box>
        {messageSend && (
          <Box style={{ color: "green", width: "100%", textAlign: "center" }}>
            Wiadomosc wyslana!
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactForm;
