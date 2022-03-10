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
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as logInHook from "../../../core/hooks/login";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }
  const logInClick = async () => {
    let studentInfo = {
      email: email,
      password: password
    }
    const result = await logInHook.logInStudent(studentInfo);
    if(result.success) {
      navigate('/home')
    }
    else {
      alert(result.message)
    }
  }
  const registrationClick = () => {
    navigate('/registration')
  }
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
              Enter your username and password
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined" 
            style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                User Name
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeEmail}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="User Name"
              />
            </FormControl>
            <FormControl sx={{ m: 1}} variant="outlined" style={{ width: '90%' }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type="password"
                onChange={changePassword}
                endAdornment={
                  <InputAdornment position="end">
                    <KeyIcon />
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button variant="contained" sx={{ m: 1 }} onClick={logInClick}>Login</Button>
            <Button variant="contained" sx={{ m: 1 }} onClick={registrationClick}>Registration</Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginForm;
