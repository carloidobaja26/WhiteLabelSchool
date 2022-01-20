import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const PasswordForm = () => {
  const [oldPasswordValues, setOldPasswordValues] = React.useState({
    oldPassword: "",
    showPassword: false,
  });

  const [newPasswordValues, setNewPasswordValues] = React.useState({
    newPassword: "",
    showPassword: false,
  });

  const [confirmPasswordValues, setConfirmPasswordValues] = React.useState({
    confirmPassword: "",
    showPassword: false,
  });

  const handleOldPasswordChange = (prop) => (event) => {
    setOldPasswordValues({ ...oldPasswordValues, [prop]: event.target.value });
  };

  const handleNewPasswordChange = (prop) => (event) => {
    setNewPasswordValues({ ...newPasswordValues, [prop]: event.target.value });
  };

  const handleConfirmPasswordChange = (prop) => (event) => {
    setConfirmPasswordValues({ ...confirmPasswordValues, [prop]: event.target.value });
  };

  const handleClickShowPassword = (id) => {
    if(id === "old") {
      setOldPasswordValues({
        ...oldPasswordValues,
        showPassword: !oldPasswordValues.showPassword,
      });
    }else if(id ==="new") {
      setNewPasswordValues({
        ...newPasswordValues,
        showPassword: !newPasswordValues.showPassword,
      });
    }else if(id ==="confirm") {
      setConfirmPasswordValues({
        ...confirmPasswordValues,
        showPassword: !confirmPasswordValues.showPassword,
      });
    }
  }

  return (
    <Box display="grid" justifyContent="center">
      <Card variant="outlined" style={{ width: "50vw", maxWidth: "450px" }}>
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography
              style={{ fontSize: "16px" }}
              variant="h6"
              component="h6"
              gutterBottom
            >
              Enter your old and new password
            </Typography>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Old Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Old Password"
                type={oldPasswordValues.showPassword ? "text" : "password"}
                value={oldPasswordValues.password}
                onChange={handleOldPasswordChange("oldPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("old")}
                      edge="end"
                    >
                      {oldPasswordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                New Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="New Password"
                type={newPasswordValues.showPassword ? "text" : "password"}
                value={newPasswordValues.password}
                onChange={handleNewPasswordChange("newPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("new")}
                      edge="end"
                    >
                      {newPasswordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                label="Confirm Password"
                type={confirmPasswordValues.showPassword ? "text" : "password"}
                value={confirmPasswordValues.password}
                onChange={handleConfirmPasswordChange("confirmPassword")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => handleClickShowPassword("confirm")}
                      edge="end"
                    >
                      {confirmPasswordValues.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <Button variant="contained" sx={{ m: 1 }}>
              Change Password
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PasswordForm;
