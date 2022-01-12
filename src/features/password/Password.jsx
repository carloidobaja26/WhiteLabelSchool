import * as React from "react";
import PasswordForm from "./components/PasswordForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Password = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          style={{ fontSize: "24px" }}
        >
          Change Password
        </Typography>
        <hr />

        <PasswordForm />
      </Box>
    </Container>
  );
};

export default Password;
