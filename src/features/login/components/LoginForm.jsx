import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import KeyIcon from "@mui/icons-material/Key";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";

const LoginForm = () => {
  return (
    <Box
      display="grid"
      justifyContent="center"
    >
      <Card variant="outlined" 
      style={{width: "50vw", maxWidth: "450px"}}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >

            <Typography 
            style={{fontSize: "16px"}} 
            variant="h6" component="h6" gutterBottom >
              Enter your old and new password
            </Typography>

            <FormControl sx={{ m: 1 }} variant="outlined" 
            style={{ width: '90%' }}
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
                label="Old Password"
              />
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
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
                label="New Password" 
              />
            </FormControl>

            <FormControl sx={{ m: 1}} variant="outlined" style={{ width: '90%' }}>
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
                label="Confirm Password"
              />
            </FormControl>

            <Button variant="contained" sx={{ m: 1 }} >Change Password</Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
