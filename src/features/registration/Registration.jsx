import * as React from "react";
import RegistrationForm from "./components/RegistrationForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Registration = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          style={{ fontSize: "24px" }}
        >
          Registration
        </Typography>
        <hr />
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default Registration
