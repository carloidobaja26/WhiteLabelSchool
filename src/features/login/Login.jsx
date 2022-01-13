import * as React from "react";
import LoginForm from "./components/LoginForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Login = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 2 }}>
        <Typography
          variant="h4"
          component="h4"
          gutterBottom
          style={{ fontSize: "24px" }}
        >
          Login
        </Typography>
        <hr />
        <LoginForm />
      </Box>
    </Container>
  );
};

export default Login
