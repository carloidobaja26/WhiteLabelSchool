import * as React from "react";
import UserHeader from "../../../components/userHeader/UserHeader";
import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Grid,
    FormControl,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
  } from "@mui/material"
  import Card from "@mui/material/Card"
  import Container from "@mui/material/Container";

const PersonalData = () => {
    return (
          <Box>
            <Card sx={{ marginTop: "16px", marginBottom: "16px" }} variant="outlined">
            <CardHeader
                title={
                    <Typography sx={{ fontWeight: "medium" }}>
                Personal Data
                    </Typography>
                }
                sx={{
                    bgcolor: "maroon",
                    color: "white",
                }}
            />

           </Card>
            <Grid container 
            spacing={2}
            >
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Student Number</span> 
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque earum est voluptates possimus sint praesentium consectetur, ratione, nostrum laboriosam minima veniam quos animi aut temporibus pariatur, voluptas deserunt facilis qui.</span> 
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Course Code & Description</span> <br />
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>GPA (excludes NSTP and subjects with non-numeric ratings)</span> 
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Student Number</span> 
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque earum est voluptates possimus sint praesentium consectetur, ratione, nostrum laboriosam minima veniam quos animi aut temporibus pariatur, voluptas deserunt facilis qui.</span> 
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>Course Code & Description</span> <br />
                </Grid>
                <Grid item xs={3}>
                    <span style={{ fontWeight: "bold" }}>GPA (excludes NSTP and subjects with non-numeric ratings)</span> 
                </Grid>
            </Grid>

            <hr/>
          </Box>
    )
}

const AgreementCard = () => {
    return (
       <Box>
            <Card sx={{ marginTop: "16px" }} variant="outlined">
            <CardHeader
                title={
                    <Typography sx={{ fontWeight: "medium" }}>
                I hereby certify that all the information provided are true and correct to the best of my knowledge.
                    </Typography>
                }
                style={{
                    borderLeftColor: "maroon",
                    fontStyle: "italic",
                }}
            />
        </Card>
        <Button variant="contained" 
        sx={{ mt: 2 }} 
        >Save</Button>
       </Box>
    )
}

const cardBody = (
    <CardContent>
      <UserHeader />
      <PersonalData />
      <AgreementCard />
    </CardContent>
)

const ProfileForm = () => {
    return <Card variant="outlined">{cardBody}</Card>
  }

export default ProfileForm;