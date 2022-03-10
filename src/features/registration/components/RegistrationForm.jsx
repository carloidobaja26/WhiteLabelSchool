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
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as studentHook from "../../../core/hooks/studentInfo";
const RegistrationForm = () => {
  const [sex, setSex] = useState(1);
  const [courseDescription, setCourseDescription] = useState(1);
  const [schoolYear, setSchoolYear] = useState(1);
  const [schoolSemester, setSchoolSemester] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [perAddress, setPerAddress] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [resAddress, setResAddress] = useState('');
  const [email, setEmail] = useState('');
  // const [studentInfoObj, setStudentInfoObj] = useEffect<''>({});
  useEffect(() => {
    let studentInfo = {
      sex: sex,
      courseDescription : courseDescription,
      schoolYear: schoolYear,
      firstName: firstName,
      lastName: lastName,
      middleName: middleName,
      mobileNo: mobileNo,
      password: password,
      perAddress: perAddress,
      placeOfBirth: placeOfBirth,
      resAddress: resAddress,
      email: email
    }
    // setStudentInfoObj(studentInfo);
  });
  const changeGender = (event) => {
    setSex(event.target.value);
  };
  const changeCourse = (event) => {
    setCourseDescription(event.target.value);
  };
  const changeYear = (event) => {
    setSchoolYear(event.target.value);
  };
  const changeSemester = (event) => {
    setSchoolSemester(event.target.value);
  };
  const changeFirstName = (event) => {
    setFirstName(event.target.value)
  }
  const changeLastName = (event) => {
    setLastName(event.target.value)
  }
  const changeMiddleName = (event) => {
    setMiddleName(event.target.value)
  }
  const changeMobileNo = (event) => {
    setMobileNo(event.target.value)
  }
  const changePassword = (event) => {
    setPassword(event.target.value)
  }
  const changePerAddress = (event) => {
    setPerAddress(event.target.value)
  }
  const changePlaceOfBirth = (event) => {
    setPlaceOfBirth(event.target.value)
  }
  const changeResAddress = (event) => {
    setResAddress(event.target.value)
  }
  const changeEmail = (event) => {
    setEmail(event.target.value)
  }
  const navigate = useNavigate()
  const createStudentInfo = () => {
    if(sex == '' || courseDescription == ''
    || schoolYear == ''
    || firstName == ''
    || lastName == ''
    || middleName == ''
    || mobileNo == ''
    || password == ''
    || perAddress == ''
    || placeOfBirth == ''
    || resAddress == ''
    || email == ''
    || schoolSemester == ''){
      alert("please fill all input")
    }
    else {
      let studentInfo = {
        gender: sex,
        courseAndDescription : courseDescription,
        schoolYearId: schoolYear,
        firstName: firstName,
        lastName: lastName,
        middleName: middleName,
        mobileNo: mobileNo,
        password: password,
        permanentAddress: perAddress,
        placeOfBirth: placeOfBirth,
        residentialAddress: resAddress,
        email: email,
        schoolSemesterId: schoolSemester
      }
      studentHook.addStudentInfo(studentInfo);
    }
  }
  return (
    <Box
      display="grid"
      justifyContent="center"
    >
      <Card variant="outlined"
        style={{ width: "50vw", maxWidth: "450px" }}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Typography
              style={{ fontSize: "16px" }}
              variant="h6" component="h6" gutterBottom >
              Please fill up the form
            </Typography>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                First Name
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeFirstName}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="First Name"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Last Name
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeLastName}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Last Name"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Middle Name
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeMiddleName}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Middle Name"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                onChange={changePassword}
                type="password"
                endAdornment={
                  <InputAdornment position="end">
                    <KeyIcon />
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
              <InputLabel id="demo-simple-select-label">Sex</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sex}
                label="Sex"
                onChange={changeGender}
              >
                <MenuItem value={1}>Male</MenuItem>
                <MenuItem value={2}>Female</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Place of Birth
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changePlaceOfBirth}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Place of Birth"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Mobile No.
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeMobileNo}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Mobile No."
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Email
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeEmail}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Email"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Resindetial Address
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changeResAddress}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Resindetial Address"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined"
              style={{ width: '90%' }}
            >
              <InputLabel htmlFor="outlined-username">
                Permanent Address
              </InputLabel>
              <OutlinedInput
                id="outlined-username"
                onChange={changePerAddress}
                endAdornment={
                  <InputAdornment position="end">
                    <AccountCircle />
                  </InputAdornment>
                }
                label="Permanent Address"
              />
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
              <InputLabel id="demo-simple-select-label">Course & Description</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={courseDescription}
                label="Course & Description"
                onChange={changeCourse}
              >
                <MenuItem value={1}>BSCOE</MenuItem>
                <MenuItem value={2}>BSEE</MenuItem>
                <MenuItem value={3}>BSECE</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
              <InputLabel id="demo-simple-select-label">School Year</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={schoolYear}
                label="School Year"
                onChange={changeYear}
              >
                <MenuItem value={1}>2022</MenuItem>
                <MenuItem value={2}>2023</MenuItem>
                <MenuItem value={3}>2024</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1 }} variant="outlined" style={{ width: '90%' }}>
              <InputLabel id="demo-simple-select-label">School Semester</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={schoolSemester}
                label="School Semester"
                onChange={changeSemester}
              >
                <MenuItem value={1}>First Sem</MenuItem>
                <MenuItem value={2}>Second Sem</MenuItem>
                <MenuItem value={3}>Summer</MenuItem>
              </Select>
            </FormControl>
            <Button variant="contained" sx={{ m: 1 }} onClick={createStudentInfo}>Create</Button>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RegistrationForm;
