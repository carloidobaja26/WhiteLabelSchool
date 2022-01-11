import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import KeyIcon from "@mui/icons-material/Key";

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

        <Box sx={{ maxWidth: 475}}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" component="h6" gutterBottom>
                Enter your old and new password
              </Typography>

              <FormControl
                sx={{ m: 1, width: "25ch", display: "block" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Old Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <KeyIcon />
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch", display: "block" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  New Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <KeyIcon />
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>

              <FormControl
                sx={{ m: 1, width: "25ch", display: "block" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Confirm Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  endAdornment={
                    <InputAdornment position="end">
                      <KeyIcon />
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              <Button variant="contained">Change Password</Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Password;
